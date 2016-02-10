<?php

  $Incident_ID = $_POST['Incident_ID']; 


  $result = array();
  $results = array();
  $resulto = array();
  $resultsu = array();


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



  $sql = "SELECT Incident_ID, Incident_Name, User_id, Number_Officers_on_Scene, DATE_FORMAT(Date_Occured,'%m/%d/%Y') as Date_Occured, Address_1, Address_2, City, State_ID, ZIP_CODE, Location_ID, Location_Detail_ID, case Lawsuit when 'T' then 'true' when 'N' then 'false' end as Lawsuit, case Indoors when 'T' then 'true' when 'N' then 'false' else '' end as Indoors, CAST(Time AS CHAR(5)) AS Time, Approx_Time, Off_Fired_Guns, Off_Fired_Guns, latitude, longitude, Total_Officer_Shots_Fired FROM Incident I  where Incident_ID = $Incident_ID";
  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incident from Database!"); } 

  $sql = "SELECT Source_ID, I.Source_Type_ID, Source, Title, Author, Source_Date, Link, I.Newspaper_ID, Newspaper, Abstract  FROM Incident_Source I LEFT OUTER JOIN Source_Type s on i.Source_Type_ID = s.Source_Type_ID left outer join Newspapers n on i.Newspaper_ID = n.Newspaper_ID where Incident_ID = $Incident_ID  order by Source_ID";
//  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($results, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents sources from Database!"); }

  $sql = "SELECT I.Incident_Officer_ID, O.Name, I.Age, CT.Call_Type, DT.Dept_Type, D.Department, I.Outside_Agency_Assist, O.Gender, R.Race, I.Assignment_ID, I.Call_Type_ID, I.Dept_Type_ID, I.Department_ID, I.Status_ID, I.Experience, I.Shots_Files, O.Officer_ID, O.Race_ID, I.Exp_in_Cluster, I.Officer_Casualty  FROM Incident_Officer I JOIN Officer_Mapping M on I.Incident_Officer_ID = M.Incident_Officer_ID join Officer O on M.Officer_ID = O.Officer_ID join Race R on O.Race_ID = R.Race_ID left outer join Officer_Call_Type CT on I.Call_Type_ID = CT.Call_Type_ID left outer join Officer_Dept_Type DT on I.Dept_Type_ID = DT.Dept_Type_ID left outer join Officer_Department D on I.Department_ID = D.Department_ID where Incident_ID = $Incident_ID  order by I.Incident_Officer_ID";
  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($resulto, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents officers from Database!"); } 

  $sql = "SELECT I.Incident_Suspect_ID, M.Suspect_ID, S.Suspect_Name, I.Mental_Status_ID, I.Weapons_ID, case I.Vehicle_Use_hit_and_run when 'Y' THEN 'true' else 'false' end as Vehicle_Use_hit_and_run, case I.Vehicle_Chase when 'Y' THEN 'true' else 'false' end as Vehicle_Chase, case I.Foot_Chase when 'Y' THEN 'true' else 'false' end as Foot_Chase, I.Type_of_Agression_ID, I.Age, case I.US_Citizen when 'Y' THEN 'true' else 'false' end as US_Citizen, case I.Gang_Affiliation when 'Y' THEN 'true' else 'false' end as Gang_Affiliation, case I.Fatality when 'Y' THEN 'true' else 'false' end as Fatality, case I.Injury when 'Y' THEN 'true' else 'false' end as Injury, S.Gender, R.Race, R.Race_ID, W.Weapons_Type, A.Aggression_Type  FROM Incident_Suspect I JOIN Suspect_Mapping M on I.Incident_Suspect_ID = M.Incident_Suspect_ID join Suspect S on M.Suspect_ID = S.Suspect_ID join Race R on S.Race_ID = R.Race_ID left outer join Weapons W on I.Weapons_ID = W.Weapons_ID left outer join Aggression_Type A on I.Type_of_Agression_ID = A.Type_of_Agression_ID where Incident_ID = $Incident_ID  order by I.Incident_Suspect_ID";
//  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
                $shot_s = getShotStrings($mysqli, $record["Incident_Suspect_ID"]);
		$record["shot_string"] = $shot_s;
		array_push($resultsu, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents Subjects from Database!"); } 

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident" => $result,
	"Incident_Source" => $results,
	"Incident_Officer" => $resulto,
	"Incident_Suspect" => $resultsu,


  ));	
/* close connection */
  $mysqli->close();

?>