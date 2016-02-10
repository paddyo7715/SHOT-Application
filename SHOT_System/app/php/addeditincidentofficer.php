<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $Incident_ID = $_POST['Incident_ID'];   
  $Incident_Officer_ID = $_POST['Incident_Officer_ID'];   
  $Officer_ID = $_POST['Officer_ID']; 
  $Outside_Agency_Assist = $_POST['Outside_Agency_Assist'];
  $Assignment_ID = $_POST['Assignment_ID']; 
  $Call_Type_ID = $_POST['Call_Type_ID']; 
  $Dept_Type_ID = $_POST['Dept_Type_ID']; 
  $Department_ID = $_POST['Department_ID']; 
  $Status_ID = $_POST['Status_ID']; 
  $Experience = $_POST['Experience']; 
  $Shots_Files = $_POST['Shots_Files']; 
  $Age = $_POST['Age']; 
  $Exp_in_Cluster = $_POST['Exp_in_Cluster']; 
  $Officer_Casualty = $_POST['Officer_Casualty']; 

  $Outside_Agency_Assist = setDBBoolean($Outside_Agency_Assist);
  $Assignment_ID = NumberorNULL($Assignment_ID);
  $Call_Type_ID = NumberorNULL($Call_Type_ID);
  $Dept_Type_ID = NumberorNULL($Dept_Type_ID);
  $Department_ID = NumberorNULL($Department_ID);
  $Status_ID = NumberorNULL($Status_ID);
  $Experience = NumberorNULL($Experience);
  $Shots_Files = NumberorNULL($Shots_Files);
  $Age = NumberorNULL($Age);
  $Exp_in_Cluster = StringorNULL($Exp_in_Cluster);
  $Officer_Casualty = StringorNULL($Officer_Casualty);

//  error_log($indoors);

  $last_id = 0;

//Add or update depending on if an incident_source number is supplied or not
  if ($Incident_Officer_ID == "")
  {
// Set autocommit to off
    mysqli_autocommit($mysqli,FALSE);

//    $mysqli->beginTransaction();

    $sql = "INSERT INTO Incident_Officer (Incident_ID, Assignment_ID, Call_Type_ID, Outside_Agency_Assist, Status_ID, Dept_Type_ID, Experience, Shots_Files, Department_ID, Age, Exp_in_Cluster, Officer_Casualty)
    VALUES ($Incident_ID, $Assignment_ID, $Call_Type_ID, $Outside_Agency_Assist, $Status_ID, $Dept_Type_ID, $Experience, $Shots_Files, $Department_ID, $Age, $Exp_in_Cluster, $Officer_Casualty)"; 

//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      $mysqli->rollback();
      trigger_error("Error Adding Incident Officer to Database!");
    }
    $last_id = $mysqli->insert_id;

    $sql = "INSERT INTO Officer_Mapping (Officer_ID, Incident_Officer_ID) VALUES ($Officer_ID, $last_id)"; 

//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      $mysqli->rollback();
      trigger_error("Error Adding Officer Mapping to Database!");
    }

// Commit transaction
    $mysqli->commit();


//    error_log($last_id);
  }
  else
  {
    $sql = "UPDATE Incident_Officer set Assignment_ID = $Assignment_ID, Call_Type_ID = $Call_Type_ID, Outside_Agency_Assist = $Outside_Agency_Assist, Status_ID = $Status_ID, Dept_Type_ID = $Dept_Type_ID, Experience = $Experience, Shots_Files = $Shots_Files, Department_ID = $Department_ID, Age = $Age, Exp_in_Cluster = $Exp_in_Cluster, Officer_Casualty = $Officer_Casualty WHERE Incident_ID = $Incident_ID and Incident_Officer_ID = $Incident_Officer_ID";
//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Incident Officer Record in Database!");
    }


  }

  $result = array();
  $sql = "SELECT I.Incident_Officer_ID, O.Name, I.Age, CT.Call_Type, DT.Dept_Type, D.Department, case I.Outside_Agency_Assist when 'Y' THEN 'true' else 'false' end as Outside_Agency_Assist, O.Gender, R.Race, I.Assignment_ID, I.Call_Type_ID, I.Dept_Type_ID, I.Department_ID, I.Status_ID, I.Experience, I.Shots_Files, O.Officer_ID, O.Race_ID, I.Exp_in_Cluster, I.Officer_Casualty  FROM Incident_Officer I JOIN Officer_Mapping M on I.Incident_Officer_ID = M.Incident_Officer_ID join Officer O on M.Officer_ID = O.Officer_ID join Race R on O.Race_ID = R.Race_ID left outer join Officer_Call_Type CT on I.Call_Type_ID = CT.Call_Type_ID left outer join Officer_Dept_Type DT on I.Dept_Type_ID = DT.Dept_Type_ID left outer join Officer_Department D on I.Department_ID = D.Department_ID where Incident_ID = $Incident_ID  order by I.Incident_Officer_ID";
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