<?php

$Incident_id = $_POST['Incident_ID']; 
$result = array();


require("common.php");
  set_error_handler("customError");


$sql = "SELECT image_id, url, Incident_Id, SUBSTRING_INDEX(image_name,'_',-1) as image_name FROM incident_images WHERE Incident_Id = '$Incident_id'";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Images from Database!"); } 

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"SuspectImages" => $result

  ));	

/* close connection */
  $mysqli->close();

?>

