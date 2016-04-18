<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

/*
function getShotStrings($mysqli,$f){
  
  $shot_s = "";
  
  $emsg = "Error Retrieving incidents shots from Database!";
  $stmt = $mysqli->prepare("SELECT Target_Area_ID FROM incident_shot where Suspect_Incident_ID = ? order by Target_Area_ID"); 
  if ( false===$stmt ) {
      trigger_error($emsg);
  }
  $rc = $stmt->bind_param('i', $f);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
  $rslt = $stmt->execute();
  if ($rslt == TRUE) {
    if ($resultdb = $stmt->get_result()) {
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
       $stmt->close();
    }
    else { trigger_error($emsg); } 
  }
  else { trigger_error($emsg); } 
  
  return $shot_s;  
  
}
*/
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

  $Vehicle_Use_hit_and_run = setDBBooleanp($Vehicle_Use_hit_and_run);
  $Vehicle_Chase = setDBBooleanp($Vehicle_Chase);
  $Foot_Chase = setDBBooleanp($Foot_Chase);
  $US_Citizen = setDBBooleanp($US_Citizen);
  $Gang_Affiliation = setDBBooleanp($Gang_Affiliation);
  $Fatality = setDBBooleanp($Fatality);
  $Injury = setDBBooleanp($Injury);
  $Mental_Status_ID = NumberorNULLp($Mental_Status_ID);
  $Weapons_ID = NumberorNULLp($Weapons_ID);
  $Type_of_Agression_ID = NumberorNULLp($Type_of_Agression_ID);
  $alt_motive = StringorNULLp($alt_motive);
  $Age = NumberorNULLp($Age);

  if ($Incident_Suspect_ID == "")
  {
    $func = "Create Incident Suspect";
    $needed_access_functions = array("Access_NewIncident");
    Verify_Security($func, $needed_access_functions);
  }
  else
  {
    $func = "Edit Incident Suspect";
    $needed_access_functions = array("Access_QueryUpdate");
    Verify_Security($func, $needed_access_functions);
  }

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

    $emsg = "Error Adding Incident Subject to Database";
    $stmtx = $mysqli->prepare("INSERT INTO incident_suspect (Incident_ID, Mental_Status_ID, Weapons_ID, Vehicle_Use_hit_and_run, Vehicle_Chase, Foot_Chase, Alt_Motive, Type_of_Agression_ID, Age, US_Citizen, Gang_Affiliation, Fatality, Injury)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('iiissssiissss', $Incident_ID, $Mental_Status_ID, $Weapons_ID, $Vehicle_Use_hit_and_run, $Vehicle_Chase, $Foot_Chase, $alt_motive, $Type_of_Agression_ID, $Age, $US_Citizen, $Gang_Affiliation, $Fatality, $Injury);
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
	
    $last_id = $mysqli->insert_id;

	$emsg = "Error Adding Subject Mapping to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO suspect_mapping (Suspect_ID, Incident_Suspect_ID) VALUES (?,?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('ii', $Suspect_ID, $last_id);
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
   
   $emsg = "Error Adding incident shot to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO incident_shot (Suspect_Incident_ID, Target_Area_ID) VALUES (?,?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
	$element = "";
	$rc = $stmtx->bind_param('ii', $last_id, $element);
    if (false===$rc)
    {
	  $mysqli->rollback();
      trigger_error($emsg);
    }
	
foreach($myArray as $element) {
    
    if ($resultdb = $stmtx->execute() != TRUE) {
	  $mysqli->rollback();
      trigger_error($emsg);
    }
    
}

	$stmtx->close();
	
// Commit transaction
    $mysqli->commit();
    


//    error_log($last_id);
  }
  else
  {
// Set autocommit to off
    mysqli_autocommit($mysqli,FALSE);

    $emsg = "Error Updating Incident Suspect Record in Database!";
    $stmtx = $mysqli->prepare("UPDATE incident_suspect set Mental_Status_ID = ?, Weapons_ID = ?, Vehicle_Use_hit_and_run = ?, Vehicle_Chase = ?, Foot_Chase = ?, Alt_Motive = ?, Type_of_Agression_ID = ?, Age = ?, US_Citizen = ?, Gang_Affiliation = ?, Fatality = ?, Injury = ? WHERE Incident_ID = ? and Incident_Suspect_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('iissssiissssii', $Mental_Status_ID, $Weapons_ID, $Vehicle_Use_hit_and_run, $Vehicle_Chase, $Foot_Chase, $alt_motive, $Type_of_Agression_ID, $Age, $US_Citizen, $Gang_Affiliation, $Fatality, $Injury, $Incident_ID, $Incident_Suspect_ID);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();

	$emsg = "Error deleting Incident shot from Database!";
    $stmtx = $mysqli->prepare("DELETE FROM incident_shot WHERE Suspect_Incident_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('i', $Incident_Suspect_ID);
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

	$emsg = "Error Adding incident shot to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO incident_shot (Suspect_Incident_ID, Target_Area_ID) VALUES (?,?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
foreach($myArray as $element) {
    $rc = $stmtx->bind_param('ii', $Incident_Suspect_ID, $element);
    if (false===$rc)
    {
	  $mysqli->rollback();
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
	  $mysqli->rollback();
      trigger_error($emsg);
    }
    
}

	$stmtx->close();

// Commit transaction
    $mysqli->commit();

  }

  $result = array();
  
  $emsg = "Error Retrieving incidents Subjects from Database!";
  $stmt = $mysqli->prepare("SELECT I.Incident_Suspect_ID, M.Suspect_ID, S.Suspect_Name, I.Mental_Status_ID, I.Weapons_ID, case I.Vehicle_Use_hit_and_run when 'Y' THEN 'true' else 'false' end as Vehicle_Use_hit_and_run, case I.Vehicle_Chase when 'Y' THEN 'true' else 'false' end as Vehicle_Chase, case I.Foot_Chase when 'Y' THEN 'true' else 'false' end as Foot_Chase, I.Type_of_Agression_ID, I.Age, case I.US_Citizen when 'Y' THEN 'true' else 'false' end as US_Citizen, case I.Gang_Affiliation when 'Y' THEN 'true' else 'false' end as Gang_Affiliation, case I.Fatality when 'Y' THEN 'true' else 'false' end as Fatality, case I.Injury when 'Y' THEN 'true' else 'false' end as Injury, S.Gender, R.Race, R.Race_ID, W.Weapons_Type, A.Aggression_Type  FROM incident_suspect I JOIN suspect_mapping M on I.Incident_Suspect_ID = M.Incident_Suspect_ID join suspect S on M.Suspect_ID = S.Suspect_ID join race R on S.Race_ID = R.Race_ID left outer join weapons W on I.Weapons_ID = W.Weapons_ID left outer join aggression_type A on I.Type_of_Agression_ID = A.Type_of_Agression_ID where Incident_ID = ?  order by I.Incident_Suspect_ID"); 
  if ( false===$stmt ) {
      trigger_error($emsg);
  }
  $rc = $stmt->bind_param('i', $Incident_ID);
    if (false===$rc)
    {
	  $mysqli->rollback();
      trigger_error($emsg);
    }
  $rslt = $stmt->execute();
  if ($rslt == TRUE) {
    if ($resultdb = $stmt->get_result()) {
	while($record = $resultdb->fetch_assoc()) {
		$shot_s = getShotStrings($mysqli, $record["Incident_Suspect_ID"]);
		$record["shot_string"] = $shot_s;
		array_push($result, $record);
	}
       $stmt->close();
    }
    else { trigger_error($emsg); } 
  }
  else { trigger_error($emsg); } 


//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident_Suspect" => $result

  ));	
//  error_log("Before close");
/* close connection */
  $mysqli->close();

?>