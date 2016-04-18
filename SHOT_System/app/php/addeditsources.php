<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");


  $sourceid = $_POST['sd_sourceid'];   
  $Incident_ID = $_POST['Incident_ID']; 
  $sd_Title = $_POST['sd_Title']; 
  $sd_Author = $_POST['sd_Author']; 
  $sd_datewritten = $_POST['sd_datewritten']; 
  $sd_newspaper = $_POST['sd_newspaper']; 
  $sd_Link = $_POST['sd_Link']; 
  $sd_SourceType = $_POST['sd_SourceType']; 
  $sd_abstract = $_POST['sd_abstract']; 

//  error_log($indoors);


  $sd_Title = StringorNULLp($sd_Title);
  $sd_Author = StringorNULLp($sd_Author);
  $sd_datewritten = StringorNULLp($sd_datewritten);
  $sd_newspaper = NumberorNULLp($sd_newspaper);
  $sd_Link = StringorNULLp($sd_Link);
  $sd_SourceType = NumberorNULLp($sd_SourceType);
  $sd_abstract = StringorNULLp($sd_abstract);

  
  if ($sourceid == "")
  {
    $func = "Create Incident source";
    $needed_access_functions = array("Access_NewIncident");
    Verify_Security($func, $needed_access_functions);
  }
  else
  {
    $func = "Edit Incident source";
    $needed_access_functions = array("Access_QueryUpdate");
    Verify_Security($func, $needed_access_functions);
  }

//  error_log($indoors);

  $last_id = 0;

//Add or update depending on if an incident_source number is supplied or not
  if ($sourceid == "")
  {
	$emsg = "Error Adding Incident Source to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO incident_source (Incident_ID, Source_Type_ID, Title, Author, Source_Date, Link, Newspaper_ID, Abstract) VALUES (?,?,?,?,?,?,?,?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('iissssis', $Incident_ID, $sd_SourceType, $sd_Title, $sd_Author, $sd_datewritten, $sd_Link, $sd_newspaper, $sd_abstract);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg." ".$mysqli->error." sadf=".$sd_newspaper);
    }
    $stmtx->close();
	
    $last_id = $mysqli->insert_id;
//    error_log($last_id);
  }
  else
  {
	$emsg = "Error Updating Incident Source Record in Database!";
    $stmtx = $mysqli->prepare("UPDATE incident_source set Source_Type_ID = ?, Title = ?, Author = ?, Source_Date = ?, Link = ?, Newspaper_ID = ?, Abstract = ? WHERE Incident_ID = ? and Source_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('issssisii', $sd_SourceType, $sd_Title, $sd_Author, $sd_datewritten, $sd_Link, $sd_newspaper, $sd_abstract, $Incident_ID, $sourceid);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();

  }

  $result = array();
  
  $emsg = "Error Retrieving incidents sources from Database!";
  $stmt = $mysqli->prepare("SELECT Source_ID, I.Source_Type_ID, Source, Title, Author, Source_Date, Link, I.Newspaper_ID, Newspaper, Abstract  FROM incident_source I LEFT OUTER JOIN source_type s on I.Source_Type_ID = s.Source_Type_ID left outer join newspapers n on I.Newspaper_ID = n.Newspaper_ID where Incident_ID = ?  order by Source_ID"); 
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
	"Incident_Source" => $result,
	"LAST_INSERT_ID" => $last_id
  ));	

/* close connection */
  $mysqli->close();

?>