<?php

  $Action = $_POST['Action']; 
  $Function = $_POST['Function']; 
  $Suspect_Name = $_POST['Suspect_Name'];
  $Gender = $_POST['Gender'];
  $Race_ID = $_POST['Race_ID'];  
  $Suspect_ID = $_POST['Suspect_ID'];

  $last_id = 0;
  $result = array();


/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  require("common2.php");
  set_error_handler("customError");

  $func = "Access Subjects";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
	$emsg = "Error Adding Subject to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO suspect (Suspect_Name,Gender,Race_ID) VALUES (?,?,?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('ssi', $Suspect_Name, $Gender, $Race_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();

    $last_id = $mysqli->insert_id;
  }  


//Only send back all officers if this is call is from the DB Main page
  if ($Function == "D")
  {
	
  $emsg = "Error Retrieving Subjects from Database!";
  $stmt = $mysqli->prepare("SELECT Suspect_ID, Suspect_Name, Gender, Race FROM suspect s, race r where s.Race_ID = r.Race_ID order by Suspect_ID"); 
  if ( false===$stmt ) {
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
	
  }

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
        "LAST_INSERT_ID" => $last_id, 
	"suspectsearch" => $result

  ));	
/* close connection */
  $mysqli->close();

?>