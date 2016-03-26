<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Delete incident suspect";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

function getShotStrings($mysqli,$f){
  
  $shot_s = "";
  $sql = "SELECT Target_Area_ID FROM incident_shot where Suspect_Incident_ID = $f order by Target_Area_ID";
  
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

//  error_log($indoors);

// Set autocommit to off
    mysqli_autocommit($mysqli,FALSE);

    $sql = "delete from incident_suspect  where Incident_ID = $Incident_ID and Incident_Suspect_ID = $Incident_Suspect_ID"; 

//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      $mysqli->rollback();
      trigger_error("Error deleting Incident Suspect to Database!");
    }



// Commit transaction
    $mysqli->commit();
    


//    error_log($last_id);

  $result = array();
  $sql = "SELECT I.Incident_Suspect_ID, M.Suspect_ID, S.Suspect_Name, I.Mental_Status_ID, I.Weapons_ID, case I.Vehicle_Use_hit_and_run when 'Y' THEN 'true' else 'false' end as Vehicle_Use_hit_and_run, case I.Vehicle_Chase when 'Y' THEN 'true' else 'false' end as Vehicle_Chase, case I.Foot_Chase when 'Y' THEN 'true' else 'false' end as Foot_Chase, I.Type_of_Agression_ID, I.Age, case I.US_Citizen when 'Y' THEN 'true' else 'false' end as US_Citizen, case I.Gang_Affiliation when 'Y' THEN 'true' else 'false' end as Gang_Affiliation, case I.Fatality when 'Y' THEN 'true' else 'false' end as Fatality, case I.Injury when 'Y' THEN 'true' else 'false' end as Injury, S.Gender, R.Race, R.Race_ID, W.Weapons_Type, A.Aggression_Type  FROM incident_suspect I JOIN suspect_mapping M on I.Incident_Suspect_ID = M.Incident_Suspect_ID join suspect S on M.Suspect_ID = S.Suspect_ID join race R on S.Race_ID = R.Race_ID left outer join weapons W on I.Weapons_ID = W.Weapons_ID left outer join aggression_type A on I.Type_of_Agression_ID = A.Type_of_Agression_ID where Incident_ID = $Incident_ID  order by I.Incident_Suspect_ID";
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