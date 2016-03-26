<?php

/* This will automatically open a database connection and check if the session has expired */
require_once(dirname(__FILE__) . '/common.php'); // from the same folder
set_error_handler("customError");

  $Incident_Name = $_POST['Incident_Name']; 
  $likeclause = "";
  if ($Incident_Name != "") {
    $likeclause = " Incident_Name like '%$Incident_Name%' and ";
  }

  $result = array();
  $func = "Access Departments";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate", "Access_QueryView");
  Verify_Security($func, $needed_access_functions);

  $num_rows = 0;

  if ($Incident_Name != "")
  {
  $sql = "SELECT Incident_ID, Incident_Name, Date_Occured, City, State FROM incident I, state S where $likeclause  I.State_ID = S.State_ID order by Incident_Name";
//  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
                $num_rows++;
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents from Database!"); } 
  }

  if ($num_rows > 300)
  {
//    error_log($num_rows);
    trigger_error("Too many incidents to return.  Please narrow your search!");
  }


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
        "num_rows" => $num_rows, 
	"Incident" => $result

  ));	
/* close connection */
  $mysqli->close();

?>