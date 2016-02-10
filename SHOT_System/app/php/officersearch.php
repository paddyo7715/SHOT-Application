<?php

  $Name_search = $_POST['Name_search']; 
  $likeclause = " Name like '%$Name_search%' and ";


  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $num_rows = 0;
  $sql = "SELECT Officer_ID, Name, Gender, Race, Additional_Info FROM Officer o, Race r where $likeclause  o.Race_ID = r.Race_ID order by Officer_ID";
  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
                $num_rows++;
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents from Database!"); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
        "num_rows" => $num_rows, 
	"officersearch" => $result

  ));	
/* close connection */
  $mysqli->close();

?>