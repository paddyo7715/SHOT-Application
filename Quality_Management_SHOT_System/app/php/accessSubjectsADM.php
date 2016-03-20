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
  require("commonADM.php");
  set_error_handler("customError");

  $func = "Access Subjects";
  $needed_access_functions = array("Access_DatabaseMaint");
  Verify_Security($func, $needed_access_functions);

  if ($Action == "A")
  {
    $sql = "INSERT INTO suspect (Suspect_Name,Gender,Race_ID) VALUES ('$Suspect_Name', '$Gender', $Race_ID)"; 
//error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Subject to Database!");
    }

    $last_id = $mysqli->insert_id;
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE suspect set Suspect_Name = '$Suspect_Name', Gender = '$Gender', Race_ID = $Race_ID WHERE Suspect_ID = $Suspect_ID"; 
//error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Subject in Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM suspect WHERE Suspect_ID = $Suspect_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Subject from Database!  This Newspaper may be used in an Incident");
    }
  }  

//Only send back all officers if this is call is from the DB Main page
  if ($Function == "D")
  {
  $sql = "SELECT Suspect_ID, Suspect_Name, Gender, Race FROM suspect s, race r where s.Race_ID = r.Race_ID order by Suspect_ID";
//    error_log($sql);
    if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
    }
    else { trigger_error("Error Retrieving Subjects from Database!"); } 

//  error_log($mysqli);
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