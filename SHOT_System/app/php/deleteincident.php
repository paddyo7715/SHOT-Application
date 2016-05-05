<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Delete Incident";
  $needed_access_functions = array("Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  $Incident_ID = $_POST['Incident_ID'];   



// Set autocommit to off
    mysqli_autocommit($mysqli,FALSE);

	$emsg = "Error deleting Incident Database!";
    $stmtx = $mysqli->prepare("DELETE from incident WHERE Incident_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('i', $Incident_ID);
    if (false===$rc)
    {
	  $mysqli->rollback();
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
	  $mysqli->rollback();
      trigger_error($emsg);
    }
    $stmtx->close();


// Commit transaction
    $mysqli->commit();
    


//    error_log($last_id);

  $result = array();
  
  $img_files = glob('../../app/suspect-images/*'); // get all file names
  $fstart = $Incident_ID . "_";
  foreach($img_files as $img_file){ // iterate files
//  error_log(basename($img_file).PHP_EOL);
  if(is_file($img_file) && strpos(basename($img_file).PHP_EOL, $fstart) === 0)
    unlink($img_file); // delete file
  }

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident" => $result

  ));	
//  error_log("Before close");
/* close connection */
  $mysqli->close();

?>