<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

function getShotStrings($mysqli,$f){
  
  $shot_s = "";
  $sql = "SELECT Target_Area_ID FROM Incident_Shot where Suspect_Incident_ID = $f order by Target_Area_ID";
  
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
                if ($shot_s == "")
                {
                  $shot_s = $record["Target_Area_ID"];
                }
                else
                {
                  $shot_s = $shot_s . "," . $record["Target_Area_ID"];
                }
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents shots from Database!"); } 
  
  return $shot_s;  
  
}


  $Incident_ID = $_POST['Incident_ID'];   
  $Incident_Suspect_ID = $_POST['Incident_Suspect_ID'];   
  $Suspect_ID = $_POST['Suspect_ID']; 
  $Vehicle_Use_hit_and_run = $_POST['Vehicle_Use_hit_and_run'];
  $Vehicle_Chase = $_POST['Vehicle_Chase']; 
  $Foot_Chase = $_POST['Foot_Chase']; 
  $US_Citizen = $_POST['US_Citizen']; 
  $Gang_Affiliation = $_POST['Gang_Affiliation']; 
  $Fatality = $_POST['Fatality']; 
  $Injury = $_POST['Injury']; 
  $Mental_Status_ID = $_POST['Mental_Status_ID']; 
  $Weapons_ID = $_POST['Weapons_ID']; 
  $Type_of_Agression_ID = $_POST['Type_of_Agression_ID']; 
  $alt_motive = $_POST['alt_motive']; 
  $Age = $_POST['Age']; 
  $SHOT_String = $_POST['SHOT_String']; 

  $Vehicle_Use_hit_and_run = setDBBoolean($Vehicle_Use_hit_and_run);
  $Vehicle_Chase = setDBBoolean($Vehicle_Chase);
  $Foot_Chase = setDBBoolean($Foot_Chase);
  $US_Citizen = setDBBoolean($US_Citizen);
  $Gang_Affiliation = setDBBoolean($Gang_Affiliation);
  $Fatality = setDBBoolean($Fatality);
  $Injury = setDBBoolean($Injury);
  $Mental_Status_ID = NumberorNULL($Mental_Status_ID);
  $Weapons_ID = NumberorNULL($Weapons_ID);
  $Type_of_Agression_ID = NumberorNULL($Type_of_Agression_ID);
  $alt_motive = StringorNULL($alt_motive);
  $Age = NumberorNULL($Age);

//  error_log($indoors);

  $last_id = 0;

  $myArray = array();
  $myArray = explode(',', $SHOT_String);

//Add or update depending on if an incident suspect number is supplied or not
  if ($Incident_Suspect_ID == "")
  {
// Set autocommit to off
    mysqli_autocommit($mysqli,FALSE);

//    $mysqli->beginTransaction();

    $sql = "INSERT INTO Incident_Suspect (Incident_ID, Mental_Status_ID, Weapons_ID, Vehicle_Use_hit_and_run, Vehicle_Chase, Foot_Chase, Alt_Motive, Type_of_Agression_ID, Age, US_Citizen, Gang_Affiliation, Fatality, Injury) VALUES ($Incident_ID, $Mental_Status_ID, $Weapons_ID, $Vehicle_Use_hit_and_run, $Vehicle_Chase, $Foot_Chase, $alt_motive, $Type_of_Agression_ID, $Age, $US_Citizen, $Gang_Affiliation, $Fatality, $Injury)"; 

//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      $mysqli->rollback();
      trigger_error("Error Adding Incident Subject to Database!");
    }
    $last_id = $mysqli->insert_id;

    $sql = "INSERT INTO Suspect_Mapping (Suspect_ID, Incident_Suspect_ID) VALUES ($Suspect_ID, $last_id)"; 

//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      $mysqli->rollback();
      trigger_error("Error Adding Subject Mapping to Database!");
    }

   
    foreach($myArray as $element) {
      $sql = "INSERT INTO Incident_Shot (Suspect_Incident_ID, Target_Area_ID) VALUES ($last_id, $element)"; 
      error_log($sql);
      if ($resultdb = $mysqli->query($sql) != TRUE) {
        $mysqli->rollback();
        trigger_error("Error Adding incident shot to Database!");
      }      
    }

// Commit transaction
    $mysqli->commit();
    


//    error_log($last_id);
  }
  else
  {
// Set autocommit to off
    mysqli_autocommit($mysqli,FALSE);




    $sql = "UPDATE Incident_Suspect set Mental_Status_ID = $Mental_Status_ID, Weapons_ID = $Weapons_ID, Vehicle_Use_hit_and_run = $Vehicle_Use_hit_and_run, Vehicle_Chase = $Vehicle_Chase, Foot_Chase = $Foot_Chase, Alt_Motive = $alt_motive, Type_of_Agression_ID = $Type_of_Agression_ID, Age = $Age, US_Citizen = $US_Citizen, Gang_Affiliation = $Gang_Affiliation, Fatality = $Fatality, Injury = $Injury WHERE Incident_ID = $Incident_ID and Incident_Suspect_ID = $Incident_Suspect_ID";
    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Incident Suspect Record in Database!");
    }

    $sql = "DELETE FROM Incident_Shot WHERE Incident_ID = $Incident_ID AND Suspect_Incident_ID = $Incident_Suspect_ID"; 
//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      $mysqli->rollback();
      trigger_error("Error deleting Incident shot from Database!");
    }


    foreach($myArray as $element) {
      $sql = "INSERT INTO Incident_Shot (Suspect_Incident_ID, Incident_ID, Target_Area_ID) VALUES ($Incident_Suspect_ID, $Incident_ID, $element)"; 
      error_log($sql);
      if ($resultdb = $mysqli->query($sql) != TRUE) {
        $mysqli->rollback();
        trigger_error("Error Adding incident shot to Database!");
      }      
    }


// Commit transaction
    $mysqli->commit();

  }

  $result = array();
  $sql = "SELECT I.Incident_Suspect_ID, M.Suspect_ID, S.Suspect_Name, I.Mental_Status_ID, I.Weapons_ID, case I.Vehicle_Use_hit_and_run when 'Y' THEN 'true' else 'false' end as Vehicle_Use_hit_and_run, case I.Vehicle_Chase when 'Y' THEN 'true' else 'false' end as Vehicle_Chase, case I.Foot_Chase when 'Y' THEN 'true' else 'false' end as Foot_Chase, I.Type_of_Agression_ID, I.Age, case I.US_Citizen when 'Y' THEN 'true' else 'false' end as US_Citizen, case I.Gang_Affiliation when 'Y' THEN 'true' else 'false' end as Gang_Affiliation, case I.Fatality when 'Y' THEN 'true' else 'false' end as Fatality, case I.Injury when 'Y' THEN 'true' else 'false' end as Injury, S.Gender, R.Race, R.Race_ID, W.Weapons_Type, A.Aggression_Type  FROM Incident_Suspect I JOIN Suspect_Mapping M on I.Incident_Suspect_ID = M.Incident_Suspect_ID join Suspect S on M.Suspect_ID = S.Suspect_ID join Race R on S.Race_ID = R.Race_ID left outer join Weapons W on I.Weapons_ID = W.Weapons_ID left outer join Aggression_Type A on I.Type_of_Agression_ID = A.Type_of_Agression_ID where Incident_ID = $Incident_ID  order by I.Incident_Suspect_ID";
//  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
                $shot_s = getShotStrings($mysqli, $record["Incident_Suspect_ID"]);
		$record["shot_string"] = $shot_s;
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents Subjects from Database!"); } 

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident_Suspect" => $result

  ));	
//  error_log("Before close");
/* close connection */
  $mysqli->close();

?>