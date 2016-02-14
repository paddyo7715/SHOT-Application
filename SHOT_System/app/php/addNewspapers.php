<?php

  $Newspaper = $_POST['Newspaper']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sql = "INSERT INTO newspapers (Newspaper) VALUES ('$Newspaper')"; 

  if ($resultdb = $mysqli->query($sql) != TRUE) {
    trigger_error("Error Adding Newspaper to Database!");
  }

  $sql = "SELECT Newspaper_ID, Newspaper FROM newspapers order by Newspaper";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Newspapers from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Newspapers" => $result

  ));	
/* close connection */
  $mysqli->close();

?>