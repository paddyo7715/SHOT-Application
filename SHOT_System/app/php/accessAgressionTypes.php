<?php

  $Action = $_POST['Action']; 
  $Aggression_Type_ID = $_POST['Aggression_Type_ID']; 
  $Aggression_Type = $_POST['Aggression_Type']; 
  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  if ($Action == "A")
  {
    $sql = "INSERT INTO Aggression_Type (Aggression_Type) VALUES ('$Aggression_Type')"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Aggression Type to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE Aggression_Type set Aggression_Type = '$Aggression_Type' WHERE Type_of_Agression_ID = $Aggression_Type_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Aggression Type to Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM Aggression_Type WHERE Type_of_Agression_ID = $Aggression_Type_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Aggression Type to Database!  This Aggression Type may be used in an Incident");
    }
  }  


  $sql = "SELECT Type_of_Agression_ID , Aggression_Type FROM Aggression_Type order by Aggression_Type";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Aggression Type from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Aggression_Type" => $result

  ));	
/* close connection */
  $mysqli->close();

?>