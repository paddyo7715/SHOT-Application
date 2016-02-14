<?php

  $Name_search = $_POST['Name_search']; 
  $likeclause = " Suspect_Name like '%$Name_search%' and ";


  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $num_rows = 0;
  $sql = "SELECT Suspect_ID, Suspect_Name, Gender, Race FROM suspect s, race r where $likeclause  s.Race_ID = r.Race_ID order by Suspect_ID";
  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
                $num_rows++;
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving subjects from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
        "num_rows" => $num_rows, 
	"suspectsearch" => $result

  ));	
/* close connection */
  $mysqli->close();

?>