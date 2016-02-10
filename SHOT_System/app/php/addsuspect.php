<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $Suspect_Name = $_POST['Suspect_Name'];
  $Gender = $_POST['Gender'];
  $Race_ID = $_POST['Race_ID'];  

//  error_log($indoors);

  $Suspect_Name = StringorNULL($Suspect_Name);
  $Gender = StringorNULL($Gender);
  $Race_ID = NumberorNULL($Race_ID);

//  error_log($indoors);

  $last_id = 0;


    $sql = "INSERT INTO Suspect (Suspect_Name,Gender,Race_ID) VALUES ($Suspect_Name, $Gender, $Race_ID)"; 
    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Subject to Database!");
    }
    $last_id = $mysqli->insert_id;
//    error_log($last_id);

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"LAST_INSERT_ID" => $last_id
  ));	

/* close connection */
  $mysqli->close();

?>