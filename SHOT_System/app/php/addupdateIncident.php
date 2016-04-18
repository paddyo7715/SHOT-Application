<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "";
  $Incidentnum = $_POST['id_Incidentnum']; 
  $Incidentname = $_POST['id_Incidentname']; 
  $user = $_POST['id_user']; 
  $lawsuit = $_POST['id_lawsuit']; 
  $indoors = $_POST['id_indoors']; 
  $Address1 = $_POST['id_Address1']; 
  $City = $_POST['id_City']; 
  $State = $_POST['id_State']; 
  $zipcode = $_POST['id_zipcode']; 
  $Address2 = $_POST['id_address2']; 
  $dateoccurred = $_POST['id_dateoccurred']; 
  $officersscene = $_POST['id_officersscene']; 
  $locationdet = $_POST['id_locationdet']; 
  $officersfiredguns = $_POST['id_officersfiredguns']; 
  $officersshotsfired = $_POST['id_officersshotsfired']; 
  $latitude = $_POST['id_latitude']; 
  $longitude = $_POST['id_longitude']; 
  $time = $_POST['id_time']; 
  $approx_time = $_POST['id_approx_time']; 

//  error_log($indoors);

  $Incidentname = StringorNULLp($Incidentname);
  $user = StringorNULLp($user);
  $lawsuit = setDBBooleanp($lawsuit);
  $indoors = setDBBooleanp($indoors);
  $Address1 = StringorNULLp($Address1);
  $City = StringorNULLp($City);
  $State = StringorNULLp($State);
  $zipcode = StringorNULLp($zipcode);
  $Address2 = StringorNULLp($Address2);
  $dateoccurred = StringorNULLp($dateoccurred);
  $officersscene = NumberorNULLp($officersscene);
  $locationdet = StringorNULLp($locationdet);
  $officersfiredguns = NumberorNULLp($officersfiredguns);
  $officersshotsfired = NumberorNULLp($officersshotsfired);
  $latitude = StringorNULLp($latitude);
  $longitude = StringorNULLp($longitude);
  $time = TimeorNULLp($time);
  $approx_time = StringorNULLp($approx_time);

//  error_log($indoors);

  $last_id = 0;

  if ($Incidentnum == "")
  {
    $func = "Create Incident";
    $needed_access_functions = array("Access_NewIncident");
    Verify_Security($func, $needed_access_functions);
  }
  else
  {
    $func = "Edit Incident";
    $needed_access_functions = array("Access_QueryUpdate");
    Verify_Security($func, $needed_access_functions);
  }

  $user = $_SESSION['app_userid'];
  $user = StringorNULLp($user);

//Add or update depending on if an incident number is supplied or not
  if ($Incidentnum == "")
  {
	$emsg = "Error Adding Incident to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO incident (Incident_Name,User_id,Number_Officers_on_Scene,Date_Occured,Address_1,Address_2,City,State_ID,ZIP_CODE,Location_Detail_ID,Lawsuit,Time,Approx_Time,Off_Fired_Guns,latitude, longitude, Total_Officer_Shots_Fired,Indoors) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('ssissssisisssissis', $Incidentname, $user, $officersscene, $dateoccurred, $Address1, $Address2, $City, $State, $zipcode, $locationdet, $lawsuit, $time, $approx_time, $officersfiredguns, $latitude, $longitude, $officersshotsfired, $indoors);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
	
    $last_id = $mysqli->insert_id;
//    error_log($last_id);
  }
  else
  {
	$emsg = "Error Updating Incident Record in Database!";
    $stmtx = $mysqli->prepare("UPDATE incident set Incident_Name = ?, Number_Officers_on_Scene = ?, Date_Occured = ?, Address_1 = ?, Address_2 = ?, City = ?, State_ID = ?, ZIP_CODE = ?, Location_Detail_ID = ?, Lawsuit = ?,Time = ?, Approx_Time = ?, Off_Fired_Guns = ?, latitude = ?, longitude = ?, Total_Officer_Shots_Fired = ?, Indoors = ? WHERE Incident_ID = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('sissssisisssissisi', $Incidentname, $officersscene, $dateoccurred, $Address1, $Address2, $City, $State, $zipcode, $locationdet, $lawsuit, $time, $approx_time, $officersfiredguns, $latitude, $longitude, $officersshotsfired, $indoors, $Incidentnum);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();
	
  }

  $result = array();
  
//  $emsg = "Error Retrieving incidents from Database!";
//  $stmt = $mysqli->prepare("SELECT Incident_ID, Incident_Name, Date_Occured, City, State FROM incident I, state S where I.State_ID = S.State_ID order by Incident_Name"); 
//  if ( false===$stmt ) {
//      trigger_error($emsg);
//  }
//  $rslt = $stmt->execute();
//  if ($rslt == TRUE) {
//    if ($resultdb = $stmt->get_result()) {
//	while($record = $resultdb->fetch_assoc()) {
//		array_push($result, $record);
//	}
//       $stmt->close();
//    }
//    else { trigger_error($emsg); } 
//  }
//  else { trigger_error($emsg); } 
  

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident" => $result,
	"LAST_INSERT_ID" => $last_id
  ));	

/* close connection */
  $mysqli->close();

?>