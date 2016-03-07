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

  $Incidentname = StringorNULL($Incidentname);
  $user = StringorNULL($user);
  $lawsuit = setDBBoolean($lawsuit);
  $indoors = setDBBoolean($indoors);
  $Address1 = StringorNULL($Address1);
  $City = StringorNULL($City);
  $State = StringorNULL($State);
  $zipcode = StringorNULL($zipcode);
  $Address2 = StringorNULL($Address2);
  $dateoccurred = StringorNULL($dateoccurred);
  $officersscene = NumberorNULL($officersscene);
  $locationdet = StringorNULL($locationdet);
  $officersfiredguns = NumberorNULL($officersfiredguns);
  $officersshotsfired = NumberorNULL($officersshotsfired);
  $latitude = StringorNULL($latitude);
  $longitude = StringorNULL($longitude);
  $time = TimeorNULL($time);
  $approx_time = StringorNULL($approx_time);

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
  $user = StringorNULL($user);

//Add or update depending on if an incident number is supplied or not
  if ($Incidentnum == "")
  {
    $sql = "INSERT INTO incident (Incident_Name,User_id,Number_Officers_on_Scene,Date_Occured,Address_1,Address_2,City,State_ID,ZIP_CODE,Location_Detail_ID,Lawsuit,Time,Approx_Time,Off_Fired_Guns,latitude, longitude, Total_Officer_Shots_Fired,Indoors) VALUES ($Incidentname, $user, $officersscene, $dateoccurred, $Address1, $Address2, $City, $State, $zipcode, $locationdet, $lawsuit, $time, $approx_time, $officersfiredguns, $latitude, $longitude, $officersshotsfired, $indoors)"; 

//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Incident to Database!");
    }
    $last_id = $mysqli->insert_id;
//    error_log($last_id);
  }
  else
  {
    $sql = "UPDATE incident set Incident_Name = $Incidentname, Number_Officers_on_Scene = $officersscene, Date_Occured = $dateoccurred, Address_1 = $Address1, Address_2 = $Address2, City = $City, State_ID = $State, ZIP_CODE = $zipcode, Location_Detail_ID = $locationdet, Lawsuit = $lawsuit,Time = $time, Approx_Time = $approx_time, Off_Fired_Guns = $officersfiredguns, latitude = $latitude, longitude = $longitude, Total_Officer_Shots_Fired = $officersshotsfired, Indoors = $indoors WHERE Incident_ID = $Incidentnum";
//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Incident Record in Database!");
    }


  }

  $result = array();
  $sql = "SELECT Incident_ID, Incident_Name, Date_Occured, City, State FROM incident I, state S where I.State_ID = S.State_ID order by Incident_Name";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents from Database!"); } 

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident" => $result,
	"LAST_INSERT_ID" => $last_id
  ));	

/* close connection */
  $mysqli->close();

?>