<?php

  $result = array();
  $result2 = array();
  $result3 = array();
  $result4 = array();
  $result5 = array();  
  $result6 = array();  
  $result7 = array();  
  $result8 = array(); 
  $result9 = array();
  $result10 = array();
  $result11 = array();
  $result12 = array();
  $result13 = array();
  $result14 = array();
  $result15 = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sql = "SELECT State_ID, State, Region FROM State";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving States from Database!"); } 	

  $sql = "SELECT Location_ID, Location FROM Location";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result2, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Locations from Database!"); } 

  $sql = "SELECT Location_Detail_ID, Location_Details, Location_ID FROM Location_Detail";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result3, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Location Details from Database!"); } 

  $sql = "SELECT Newspaper_ID, Newspaper FROM Newspapers order by Newspaper";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result4, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Newspapers from Database!"); } 

  $sql = "SELECT Source_Type_ID, Source FROM Source_Type";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result5, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Sources from Database!"); } 

  $sql = "SELECT Assignment_ID, Assignment FROM Officer_Assignment";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result6, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Officer Assignments from Database!"); } 

  $sql = "SELECT Call_Type_ID, Call_Type FROM Officer_Call_Type";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result7, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Officer Call Types from Database!"); } 

  $sql = "SELECT Status_ID, Status FROM Officer_Status";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result8, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Officer Status from Database!"); } 

  $sql = "SELECT Dept_Type_ID, Dept_Type FROM Officer_Dept_Type";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result9, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Officer Dept Type from Database!"); } 

  $sql = "SELECT Department_ID, Department FROM Officer_Department order by Department";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result10, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Officer Department from Database!"); } 

  $sql = "SELECT Race_ID, Race FROM Race";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result11, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Races from Database!"); } 

  $sql = "SELECT Mental_Status_ID, Mental_Status FROM Mental_States";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result12, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Mental States from Database!"); } 

  $sql = "SELECT Weapons_ID, Weapons_Type FROM Weapons";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result13, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Weapons Types from Database!"); } 

  $sql = "SELECT Type_of_Agression_ID, Aggression_Type FROM Aggression_Type";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result14, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Aggression Types from Database!"); } 

  $sql = "SELECT Target_Area_ID, Target_Area, Specific_Target_Area FROM Target_Area";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result15, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Target Areas from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"State" => $result,
	"Location" => $result2,
	"Location_Detail" => $result3,
	"Newspapers" => $result4,
	"Source_Type" => $result5,
	"Officer_Assignment" => $result6,
	"Officer_Call_Type" => $result7,
	"Officer_Status" => $result8,
	"Officer_Dept_Type" => $result9,
	"Officer_Department" => $result10,
	"Race" => $result11,
	"Mental_States" => $result12,
	"Weapons" => $result13,
	"Aggression_Type" => $result14,
	"Target_Area" => $result15

  ));	
/* close connection */
  $mysqli->close();

?>