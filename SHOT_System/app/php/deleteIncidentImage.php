<?php

  $image_id = $_POST['image_id']; 
  $url = $_POST['url']; 
  $Incident_Id = $_POST['Incident_Id']; 
  $image_name = $_POST['image_name']; 
  $result = array();


//  error_log(getcwd());

  $func = "Delete Images";

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

$needed_access_functions = array("Access_QueryView","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);


  $stmtx = $mysqli->prepare("delete from incident_images where Image_Id = (?) and Incident_Id = (?)");
  if ( false===$stmtx ) {
    trigger_error("Error deleting image from Database");
  }

  $rc = $stmtx->bind_param('ii', $image_id, $Incident_Id);
  if (false===$rc)
  {
    trigger_error("Error binding parameters while deleting images from database.");
  }
  if ($resultdb = $stmtx->execute() != TRUE) {
    trigger_error("Error deleting iamge from database");
  }
  $stmtx->close();

  unlink("../../" . $url);

$sql = "SELECT image_id, url, Incident_Id, SUBSTRING_INDEX(image_name,'_',-1) as image_name FROM incident_images WHERE Incident_Id = '$Incident_Id'";

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

