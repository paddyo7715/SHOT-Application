<?php

  $func = "";
  $Action = $_POST['Action']; 
  $Function = $_POST['Function']; 
  $Name = $_POST['Name'];
  $Gender = $_POST['Gender'];
  $Race_ID = $_POST['Race_ID'];  
  $AdditionalInfo = $_POST['AdditionalInfo'];
  $Officer_ID = $_POST['Officer_ID'];

  $last_id = 0;
  $result = array();


/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");


  $func = "Add Officer";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);



  if ($Action == "A")
  {
    $sql = "INSERT INTO officer (Name,Gender,Race_ID,Additional_Info) VALUES ('$Name', '$Gender', $Race_ID, '$AdditionalInfo')"; 
//error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Officer to Database!");
    }

    $last_id = $mysqli->insert_id;
  }  

//Only send back all officers if this is call is from the DB Main page
  if ($Function == "D")
  {
    $sql = "SELECT Officer_ID, Name, Gender, Race, Additional_Info FROM officer o, race r where o.Race_ID = r.Race_ID order by Name";
//    error_log($sql);
    if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
    }
    else { trigger_error("Error Retrieving Officers from Database!"); } 

//  error_log($mysqli);
}

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"officersearch" => $result,
	"LAST_INSERT_ID" => $last_id
  ));	
/* close connection */
  $mysqli->close();

?>