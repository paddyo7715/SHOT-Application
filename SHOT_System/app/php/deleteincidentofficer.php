<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $Incident_ID = $_POST['Incident_ID'];   
  $Incident_Officer_ID = $_POST['Incident_Officer_ID'];   

//  error_log($indoors);


// Set autocommit to off
    mysqli_autocommit($mysqli,FALSE);

//    $mysqli->beginTransaction();

    $sql = "DELETE FROM incident_officer WHERE Incident_ID = $Incident_ID AND Incident_Officer_ID = $Incident_Officer_ID"; 

//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      $mysqli->rollback();
      trigger_error("Error deleting Incident Officer to Database!");
    }

// Commit transaction
    $mysqli->commit();


//    error_log($last_id);


  $result = array();
  $sql = "SELECT I.Incident_Officer_ID, O.Name, I.Age, CT.Call_Type, DT.Dept_Type, D.Department, I.Outside_Agency_Assist, O.Gender, R.Race, I.Assignment_ID, I.Call_Type_ID, I.Dept_Type_ID, I.Department_ID, I.Status_ID, I.Experience, I.Shots_Files, O.Officer_ID, O.Race_ID, I.Exp_in_Cluster, I.Officer_Casualty  FROM incident_officer I JOIN officer_mapping M on I.Incident_Officer_ID = M.Incident_Officer_ID join officer O on M.Officer_ID = O.Officer_ID join race R on O.Race_ID = R.Race_ID left outer join officer_call_type CT on I.Call_Type_ID = CT.Call_Type_ID left outer join officer_dept_type DT on I.Dept_Type_ID = DT.Dept_Type_ID left outer join officer_department D on I.Department_ID = D.Department_ID where Incident_ID = $Incident_ID  order by I.Incident_Officer_ID";
//  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents officers from Database!"); } 

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident_Officer" => $result

  ));	

/* close connection */
  $mysqli->close();

?>