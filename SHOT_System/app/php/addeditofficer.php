<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $Name = $_POST['Name'];
  $Gender = $_POST['Gender'];
  $Race_ID = $_POST['Race_ID'];  
  $AdditionalInfo = $_POST['AdditionalInfo'];

//  error_log($indoors);

  $Name = StringorNULL($Name);
  $Gender = StringorNULL($Gender);
  $Race_ID = NumberorNULL($Race_ID);
  $AdditionalInfo = StringorNULL($AdditionalInfo);

//  error_log($indoors);

  $last_id = 0;


    $sql = "INSERT INTO Officer (Name,Gender,Race_ID,Additional_Info) VALUES ($Name, $Gender, $Race_ID, $AdditionalInfo)"; 
    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Officer to Database!");
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