<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sourceid = $_POST['Source_ID'];   
  $Incident_ID = $_POST['Incident_ID']; 

  $func = "Delete Source";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

//Delete the Incident Source

	$emsg = "Error Deleting Incident Source Record in Database!";
    $stmtx = $mysqli->prepare("DELETE from incident_source WHERE Source_ID = ? and Incident_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('ii', $sourceid, $Incident_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();


  $result = array();
  
  $emsg = "Error Retrieving incidents sources from Database!";
  $stmt = $mysqli->prepare("SELECT Source_ID, I.Source_Type_ID, Source, Title, Author, Source_Date, Link, I.Newspaper_ID, Newspaper, Abstract  FROM incident_source I LEFT OUTER JOIN source_type s on i.Source_Type_ID = s.Source_Type_ID left outer join newspapers n on i.Newspaper_ID = n.Newspaper_ID where Incident_ID = ?  order by Source_ID"); 
  if ( false===$stmt ) {
      trigger_error($emsg);
  }
  $rc = $stmt->bind_param('i', $Incident_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
  $rslt = $stmt->execute();
  if ($rslt == TRUE) {
    if ($resultdb = $stmt->get_result()) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $stmt->close();
    }
    else { trigger_error($emsg); } 
  }
  else { trigger_error($emsg); } 
  

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident_Source" => $result

  ));	

/* close connection */
  $mysqli->close();

?>