<?php

  $Action = $_POST['Action']; 
  $Location_ID = $_POST['Location_ID']; 
  $Location_Det_ID = $_POST['Location_Det_ID']; 
  $Location_Det = $_POST['Location_Det']; 
  $result = array();
  $result2 = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  if ($Action == "A")
  {
    $sql = "INSERT INTO location_detail (Location_Details, Location_ID) VALUES ('$Location_Det', $Location_ID)"; 
//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Location Detail to Database!");
    }
  }  
  elseif ($Action == "U")
  {
    $sql = "UPDATE location_detail set Location_Details = '$Location_Det', Location_ID = $Location_ID  WHERE Location_Detail_ID = $Location_Det_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Location Detail in Database!");
    }
  }  
  elseif ($Action == "D")
  {
    $sql = "DELETE FROM location_detail WHERE Location_Detail_ID = $Location_Det_ID"; 

    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Deleting Location Detail in Database!  This Location Detail may be used in an Location");
    }
  }  


  $sql = "SELECT Location_Detail_ID, Location_Details, Location, ld.Location_ID FROM location_detail ld, location l where ld.Location_ID = l.Location_ID order by Location_Details ";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Location Details from Database!"); } 	

  $sql = "SELECT Location_ID, Location FROM Location";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result2, $record);
	}	
  $resultdb->close();
  }
  else { trigger_error("Error Retrieving Locations from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Location_Detail" => $result,
	"Location" => $result2

  ));	
/* close connection */
  $mysqli->close();

?>