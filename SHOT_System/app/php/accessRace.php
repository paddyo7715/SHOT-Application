<?php

  $Action = $_POST['Action']; 
  $Race_ID = $_POST['Race_ID']; 
  $Race = $_POST['Race']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  if ($Action == "A")
  {
    $sql = "INSERT INTO Race (Race) VALUES ('$Race')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Race to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE Race set Race = '$Race' WHERE Race_ID = $Race_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Race in Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM Race WHERE Race_ID = $Race_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Race from Database!  This Race may be used by an officer or subject");
    }
  }  



  $sql = "SELECT Race_ID, Race FROM Race order by Race";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Race from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Race" => $result

  ));	
/* close connection */
  $mysqli->close();

?>