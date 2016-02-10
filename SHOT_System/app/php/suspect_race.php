<?php

  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sql = "SELECT race , Count(*) as incidents FROM suspect_mapping sm, suspect s, race r where sm.Suspect_ID = s.Suspect_ID and s.Race_ID = r.Race_ID group by Race  order by Race";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Suspect Race Data for Report!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"suspect_race" => $result

  ));	
/* close connection */
  $mysqli->close();

?>