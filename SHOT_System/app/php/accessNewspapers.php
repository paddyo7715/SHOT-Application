<?php

  $Action = $_POST['Action']; 
  $Newspaper_ID = $_POST['Newspaper_ID']; 
  $Newspaper = $_POST['Newspaper']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  if ($Action == "A")
  {
    $sql = "INSERT INTO newspapers (Newspaper) VALUES ('$Newspaper')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Newspaper to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE newspapers set Newspaper = '$Newspaper' WHERE Newspaper_ID = $Newspaper_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Newspaper in Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM newspapers WHERE Newspaper_ID = $Newspaper_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Newspaper from Database!  This Newspaper may be used in an Incident");
    }
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