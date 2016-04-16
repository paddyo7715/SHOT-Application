<?php

function buildFrom($has_state, $has_loc_det, $has_officer_map, $has_officer_inc, $has_officer, $has_subject_map, $has_subject_inc, $has_subject) {
   $From_part = " from incident i";
   if ($has_state)
   {
     $From_part .= " JOIN state st ON i.State_ID = st.State_ID";
   }
   if ($has_loc_det)
   {
     $From_part .= " JOIN location_detail ld ON i.Location_Detail_ID = ld.Location_Detail_ID";
   }
   if ($has_officer_inc)
   {
     $From_part .= " JOIN incident_officer io ON i.Incident_ID = io.Incident_ID";
   }
   if ($has_officer_map)
   {
     $From_part .= " JOIN officer_mapping om ON io.Incident_Officer_ID = om.Incident_Officer_ID";
   }
   if ($has_officer)
   {
     $From_part .= " JOIN officer o ON om.Officer_ID = o.Officer_ID";
   }
   if ($has_subject_inc)
   {
     $From_part .= " JOIN incident_suspect ins ON i.Incident_ID = ins.Incident_ID";
   }
   if ($has_subject_map)
   {
     $From_part .= " JOIN suspect_mapping sm ON ins.Incident_Suspect_ID = sm.Incident_Suspect_ID";
   }
   if ($has_subject)
   {
     $From_part .= " JOIN suspect s ON sm.Suspect_ID = s.Suspect_ID";
   }
   return $From_part;

}

/* This will automatically open a database connection and check if the session has expired */
require_once(dirname(__FILE__) . '/common.php'); // from the same folder
set_error_handler("customError");

// authorization
$func = "Generate Reports";
  $needed_access_functions = array("Access_Reports");
Verify_Security($func, $needed_access_functions);

//From Geo
$bad = '#[^\w\d\s/-]#'; // legal only: word (A-Za-z_), digit (0-9), whitespace, forward slash, dash

// defaults
$success = true;
$result = [];
$Select = "";
$From = "";
$where = "";
$filter = "";
$rpt_title = "";
$rpt_type = "";

//rpt_type  1 = Pie Chart,  2 = Bar Chart

$has_state = false;
$has_loc_det = false;
$has_officer_map = false;
$has_officer_inc = false;
$has_officer = false;
$has_subject_map = false;
$has_subject_inc = false;
$has_subject = false;

$rpt = $_POST['rpt_fltr_report']; 
//error_log($rpt);

// search params
//$post = $_POST;
$startdate = $_POST['rpt_fltr_startdate']; 
//error_log($startdate);
 if (preg_match($bad, $startdate)) trigger_error('Illegal input for Start Date');
$enddate = $_POST['rpt_fltr_enddate']; 
if (preg_match($bad, $enddate)) trigger_error('Illegal input for End Date');
$approx_time = $_POST['rpt_fltr_approx_time']; 
if (preg_match($bad, $approx_time)) trigger_error('Illegal input for Approximate Time');
$approx_time_display = $_POST['rpt_fltr_approx_time_display']; 
$State = $_POST['rpt_fltr_State']; 
if (preg_match($bad, $State)) trigger_error('Illegal input for State');
$State_display = $_POST['rpt_fltr_State_display']; 
$Region = $_POST['rpt_fltr_Region']; 
if (preg_match($bad, $Region)) trigger_error('Illegal input for Region');
$lawsuit = $_POST['rpt_fltr_lawsuit']; 
if (preg_match($bad, $lawsuit)) trigger_error('Illegal input for Lawsuit');
$location = $_POST['rpt_fltr_location']; 
$location_display = $_POST['rpt_fltr_location_display']; 
if (preg_match($bad, $location)) trigger_error('Illegal input for Location');
$locationdet = $_POST['rpt_fltr_locationdet']; 
$locationdet_display = $_POST['rpt_fltr_locationdet_display']; 
if (preg_match($bad, $locationdet)) trigger_error('Illegal input for Location Detail');
$off_race = $_POST['rpt_fltr_off_race']; 
$off_race_display = $_POST['rpt_fltr_off_race_display']; 
if (preg_match($bad, $off_race)) trigger_error('Illegal input for Race');
$off_fate = $_POST['rpt_fltr_off_fate']; 
if (preg_match($bad, $off_fate)) trigger_error('Illegal input for Officer Fate');
$off_fate_display = $_POST['rpt_fltr_off_fate_display']; 
$off_offassignment = $_POST['rpt_fltr_off_offassignment']; 
if (preg_match($bad, $off_offassignment)) trigger_error('Illegal input for Officer Assignment');
$off_offassignment_display = $_POST['rpt_fltr_off_offassignment_display']; 
$off_calltype = $_POST['rpt_fltr_off_calltype']; 
if (preg_match($bad, $off_calltype)) trigger_error('Illegal input for Officer Call Type');
$off_calltype_display = $_POST['rpt_fltr_off_calltype_display']; 
$off_depttype = $_POST['rpt_fltr_off_depttype']; 
if (preg_match($bad, $off_depttype)) trigger_error('Illegal input for Officer Department Type');
$off_depttype_display = $_POST['rpt_fltr_off_depttype_display']; 
$off_status = $_POST['rpt_fltr_off_status']; 
if (preg_match($bad, $off_status)) trigger_error('Illegal input for Officer Status');
$off_status_display = $_POST['rpt_fltr_off_status_display']; 
$off_exp_in_cluster = $_POST['rpt_fltr_off_exp_in_cluster']; 
if (preg_match($bad, $off_exp_in_cluster)) trigger_error('Illegal input for Officer Experience');
$off_exp_in_cluster_display = $_POST['rpt_fltr_off_exp_in_cluster_display']; 
$sus_race = $_POST['rpt_fltr_sus_race']; 
if (preg_match($bad, $sus_race)) trigger_error('Illegal input for subject Race');
$sus_race_display = $_POST['rpt_fltr_sus_race_display']; 
$sus_fate = $_POST['rpt_fltr_sus_fate']; 
if (preg_match($bad, $sus_fate)) trigger_error('Illegal input for subject Fate');
$sus_fate_display = $_POST['rpt_fltr_sus_fate_display']; 
$MentalState = $_POST['rpt_fltr_MentalState']; 
if (preg_match($bad, $MentalState)) trigger_error('Illegal input for subject Mental State');
$MentalState_display = $_POST['rpt_fltr_MentalState_display']; 
$Weapons = $_POST['rpt_fltr_Weapons']; 
if (preg_match($bad, $Weapons)) trigger_error('Illegal input for subject Weapon');
$Weapons_display = $_POST['rpt_fltr_Weapons_display']; 
$aggression = $_POST['rpt_fltr_aggression']; 
if (preg_match($bad, $aggression)) trigger_error('Illegal input for subject Aggression');
$aggression_display = $_POST['rpt_fltr_aggression_display']; 
$uscitizen = $_POST['rpt_fltr_uscitizen']; 
if (preg_match($bad, $uscitizen)) trigger_error('Illegal input for US Citizen');
$gang = $_POST['rpt_fltr_gang']; 
if (preg_match($bad, $gang)) trigger_error('Illegal input for subject Gang Member');
$vhitrun = $_POST['rpt_fltr_vhitrun']; 
if (preg_match($bad, $vhitrun)) trigger_error('Illegal input for subject Vehicle Hit and Run');
$vchase = $_POST['rpt_fltr_vchase']; 
if (preg_match($bad, $vchase)) trigger_error('Illegal input for subject Vehicle Chase');
$fchase = $_POST['rpt_fltr_fchase']; 
if (preg_match($bad, $fchase)) trigger_error('Illegal input for subject Foot Chase');

if (strlen($startdate) != 0)
{
  $filter .= "Occurred between $startdate and $enddate ";
  $where .= " i.Date_Occured between '$startdate' and '$enddate'";
}

if (strlen($approx_time) != 0)
{
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
   $filter .= "Approx Time = $approx_time_display";
   $where .= " i.Approx_Time = '$approx_time'";
}

if (strlen($State) != 0)
{
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "State is $State_display";
  $where .= "i.State_ID = $State";
}

if (strlen($Region) != 0)
{
  $has_state = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Region is $Region";
  $where .= " st.Region = '$Region'";
}

if (strlen($lawsuit) != 0)
{
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= ($lawsuit == "Y") ? "Lawsuit" : "No Lawsuit";
  $where .= " i.Lawsuit = '$lawsuit'";
}

if (strlen($location) != 0)
{
  $has_loc_det = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Location of $location_display";
  $where .= " ld.Location_ID = $location";
}

if (strlen($locationdet) != 0)
{
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Location Detail of $locationdet_display";
  $where .= " i.Location_Detail_ID = $locationdet";
}

if (strlen($off_race) != 0)
{
  $has_officer = true;
  $has_officer_map = true;
  $has_officer_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Officer Race = $off_race_display";
  $where .= " o.Race_ID = $off_race";
}

if (strlen($off_fate) != 0)
{
  $has_officer_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Officer Casualty = $off_fate_display";
  $where .= " io.Officer_Casualty = '$off_fate'";
}

if (strlen($off_offassignment) != 0)
{
  $has_officer_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Officer Assignment = $off_offassignment_display";
  $where .= " io.Assignment_ID = $off_offassignment";
}

if (strlen($off_calltype) != 0)
{
  $has_officer_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Officer Call Type = $off_calltype_display";
  $where .= " io.Call_Type_ID = $off_calltype";
}

if (strlen($off_depttype) != 0)
{
  $has_officer_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter.= "Officer Department Type = $off_depttype_display";
  $where .= " io.Dept_Type_ID = $off_depttype";
}

if (strlen($off_status) != 0)
{
  $has_officer_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Officer Status = $off_status_display";
  $where .= " io.Status_ID = $off_status";
}

if (strlen($off_exp_in_cluster) != 0)
{
  $has_officer_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Officer Experience = $off_exp_in_cluster_display";
  $where .= " io.Exp_in_Cluster = '$off_exp_in_cluster'";
}

if (strlen($sus_race) != 0)
{
  $has_subject = true;
  $has_subject_map = true;
  $has_subject_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Subject Race = $sus_race_display";
  $where .= " s.Race_ID = $sus_race";
}

if (strlen($sus_fate) != 0)
{
  $has_subject_inc = true;
  if ($where != "")  {$filter .= " AND ";}
  $filter .= "Subject Fate = $sus_fate_display";
  if ($sus_fate == "I") 
  {
    $where .= " AND ";
    $where .= " ins.Injury = 'Y'";
  }
  else if ($sus_fate == "K")
  {  
    $where .= " AND ";
    $where .= " ins.Fatality = 'Y'";
  }
}

if (strlen($MentalState) != 0)
{
  $has_subject_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Subject Mental State = $MentalState_display";
  $where .= " ins.Mental_Status_ID = $MentalState";
}

if (strlen($Weapons) != 0)
{
  $has_subject_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Subject Weapon = $Weapons_display";
  $where .= " ins.Weapons_ID = $Weapons";
}

if (strlen($aggression) != 0)
{
  $has_subject_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  $filter .= "Subject Aggression = $aggression_display";
  $where .= " ins.Type_of_Agression_ID = $aggression";
}

if (strlen($uscitizen) != 0)
{
  $has_subject_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  if ($uscitizen == "Y")
    $filter .= "Subject is a US citizen";
  else
    $filter .= "Subject is not US citizen";
  $where .= " ins.US_Citizen = '$uscitizen'";
}

if (strlen($gang) != 0)
{
  $has_subject_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  if ($gang == "Y")
    $filter .= "Subject is a gang member";
  else
    $filter .= "Subject is not a gang member";
  $where .= " ins.Gang_Affiliation = '$gang'";
}

if (strlen($vhitrun) != 0)
{
  $has_subject_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  if ($vhitrun == "Y")
    $filter .= "a hit and run was involved";
  else
    $filter .= "a hit and run was not involved";
  $where .= " ins.Vehicle_Use_hit_and_run = '$vhitrun'";
}

if (strlen($vchase) != 0)
{
  $has_subject_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  if ($vchase == "Y")
    $filter .= "a vehicle chase was involved";
  else
    $filter .= "a vehicle chase was not involved";
  $where .= " ins.Vehicle_Chase = '$vchase'";
}

if (strlen($fchase) != 0)
{
  $has_subject_inc = true;
  if ($where != "")  {$where .= " AND "; $filter .= " AND ";}
  if ($fchase == "Y")
    $filter .= "a foot chase was involved";
  else
    $filter .= "a foot chase was not involved";
  $where .= " ins.Foot_Chase = '$fchase'";
}

if (strlen($where) > 0) $where = " Where " . $where; 

//error_log($rpt);

//Suspect by Race Pie Chart
if ($rpt == "sus_race")
{
  $rpt_type = "1";
  $rpt_title = "Race of Subject";
  $From = buildFrom($has_state, $has_loc_det, $has_officer_map, $has_officer_inc, $has_officer, true, true, true);
  $From .= " join race r on s.Race_ID = r.Race_ID ";
  $sql = "SELECT race as f1 , Count(*) as f2 $From $where group by Race  order by Race";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Suspect Race Data for Report!"); } 
} 
else if ($rpt == "off_race") //Officer by Race Pie Chart
{
  $rpt_type = "1";
  $rpt_title = "Race of Officer";
  $From = buildFrom($has_state, $has_loc_det, true, true, true, $has_subject_map, $has_subject_inc, $has_subject);
  $From .= " join race r on o.Race_ID = r.Race_ID ";
  $sql = "SELECT race as f1 , Count(*) as f2 $From $where group by Race  order by Race";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Officer Race Data for Report!"); } 
}
else if ($rpt == "off_assign") //Incidents by officer assignment
{
  $rpt_type = "1";
  $rpt_title = "Incidents by Officer Assignment";
  $From = buildFrom($has_state, $has_loc_det, $has_officer_map, true, $has_officer, $has_subject_map, $has_subject_inc, $has_subject);
  $From .= " join officer_assignment oa on oa.Assignment_ID = io.Assignment_ID ";
  $sql = "SELECT Assignment as f1 , Count(*) as f2 $From $where group by Assignment  order by Assignment";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving officer assignment Data for Report!"); } 
}
else if ($rpt == "off_dept_type") //Incidents by officer dept type
{
  $rpt_type = "1";
  $rpt_title = "Incidents by Officer Department Type";
  $From = buildFrom($has_state, $has_loc_det, $has_officer_map, true, $has_officer, $has_subject_map, $has_subject_inc, $has_subject);
  $From .= " join officer_dept_type odt on odt.Dept_Type_ID = io.Dept_Type_ID ";
  $sql = "SELECT Dept_Type as f1 , Count(*) as f2 $From $where group by Dept_Type  order by Dept_Type";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving officer department type Data for Report!"); } 
}
else if ($rpt == "off_status") //Incidents by officer status
{
  $rpt_type = "1";
  $rpt_title = "Incidents by Officer Status";
  $From = buildFrom($has_state, $has_loc_det, $has_officer_map, true, $has_officer, $has_subject_map, $has_subject_inc, $has_subject);
  $From .= " join officer_status ost on ost.Status_ID = io.Status_ID ";
  $sql = "SELECT Status as f1 , Count(*) as f2 $From $where group by Status  order by Status";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving officer status Data for Report!"); } 
}
else if ($rpt == "sus_mental") //Incidents by Subject Mental State
{
  $rpt_type = "1";
  $rpt_title = "Incidents by Subject Mental State";
  $From = buildFrom($has_state, $has_loc_det, $has_officer_map, $has_officer_inc, $has_officer, $has_subject_map, true, $has_subject);
  $From .= " join mental_states sms on sms.Mental_Status_ID = ins.Mental_Status_ID ";
  $sql = "SELECT Mental_Status as f1 , Count(*) as f2 $From $where group by Mental_Status  order by Mental_Status";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Subject Mental State Data for Report!"); } 
}
else if ($rpt == "sus_weapon") //Incidents by Subject Weapon
{
  $rpt_type = "1";
  $rpt_title = "Incidents by Subject Weapon";
  $From = buildFrom($has_state, $has_loc_det, $has_officer_map, $has_officer_inc, $has_officer, $has_subject_map, true, $has_subject);
  $From .= " join weapons w on w.Weapons_ID = ins.Weapons_ID ";
  $sql = "SELECT Weapons_Type as f1 , Count(*) as f2 $From $where group by Weapons_Type  order by Weapons_Type";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Subject Weapon Data for Report!"); } 
}
else if ($rpt == "Location_Details") //Incidents by Location Details
{
  $rpt_type = "2";
  $rpt_title = "Incidents by Location Detail";
  $From = buildFrom($has_state, true, $has_officer_map, $has_officer_inc, $has_officer, $has_subject_map, $has_subject_inc, $has_subject);
//  $From .= " join aggression_type at on at.Type_of_Agression_ID = ins.Type_of_Agression_ID ";
  $sql = "SELECT Location_Details as f1 , Count(*) as f2 $From $where group by Location_Details  order by f2 desc";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Location Detail Data for Report!"); } 
}
else if ($rpt == "Location") //Incidents by Location
{
  $rpt_type = "2";
  $rpt_title = "Incidents by Location";
  $From = buildFrom($has_state, true, $has_officer_map, $has_officer_inc, $has_officer, $has_subject_map, $has_subject_inc, $has_subject);
  $From .= " join location l on l.Location_ID = ld.Location_ID ";
  $sql = "SELECT Location as f1 , Count(*) as f2 $From $where group by Location  order by f2 desc";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Location Data for Report!"); } 
}
else if ($rpt == "sus_agg") //Incidents by Subject Aggression
{
  $rpt_type = "1";
  $rpt_title = "Incidents by Subject Aggression Type";
  $From = buildFrom($has_state, $has_loc_det, $has_officer_map, $has_officer_inc, $has_officer, $has_subject_map, true, $has_subject);
  $From .= " join aggression_type at on at.Type_of_Agression_ID = ins.Type_of_Agression_ID ";
  $sql = "SELECT Aggression_Type as f1 , Count(*) as f2 $From $where group by Aggression_Type  order by Aggression_Type";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Subject Aggression Data for Report!"); } 
}
else if ($rpt == "inc_region") //Incidents by Region
{
  $rpt_type = "1";
  $rpt_title = "Incidents by Region";
  $From = buildFrom(true, $has_loc_det, $has_officer_map, $has_officer_inc, $has_officer, $has_subject_map, $has_subject_inc, $has_subject);
  $sql = "SELECT Region as f1 , Count(*) as f2 $From $where group by Region  order by f2";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Incident by Region Data for Report!"); } 
}
else if ($rpt == "inc_time") //Incidents by Approximate Time
{
  $rpt_type = "1";
  $rpt_title = "Incidents by Approximate";
  $From = buildFrom($has_state, $has_loc_det, $has_officer_map, $has_officer_inc, $has_officer, $has_subject_map, $has_subject_inc, $has_subject);
  $sql = "SELECT case Approx_Time when 'EM' then 'Early Morning' when 'MO' then 'Morning' when 'NO' then 'Noon' when 'AF' then 'Afternoon' when 'EV' then 'Evening' when 'NI' then 'Night' when 'MN' then 'Midnight' END as f1 , Count(*) as f2 $From $where group by Approx_Time  order by f2";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Incident by Approximate Time Data for Report!"); } 
}
else if ($rpt == "inc_experience") //Incidents by Officer Experience
{
  $rpt_type = "1";
  $rpt_title = "Incidents by Officer Experience";
  $From = buildFrom($has_state, $has_loc_det, $has_officer_map, true, $has_officer, $has_subject_map, $has_subject_inc, $has_subject);
  $sql = "SELECT case Exp_in_Cluster when 'LTT' then '<=12 months' when 'OTT' then '1 to 3 years' when 'FTS' then '4 to 7 years' when 'GTE' then '>=8 years' END as f1 , Count(*) as f2 $From $where and Exp_in_Cluster is not null group by Exp_in_Cluster  order by f2";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Incident by Officer Experience Data for Report!"); } 
}
else if ($rpt == "inc_state") //Incidents by State
{
  $rpt_type = "2";
  $rpt_title = "Incidents by State";
  $From = buildFrom(true, $has_loc_det, $has_officer_map, $has_officer_inc, $has_officer, $has_subject_map, $has_subject_inc, $has_subject);
  $sql = "SELECT State as f1 , Count(*) as f2 $From $where group by State order by f2 desc";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Incidents by State data for Report!"); } 
}
else if ($rpt == "inc_year") //Incidents by year
{
  $rpt_type = "3";
  $rpt_title = "Incidents by Year";
  $From = buildFrom($has_state, $has_loc_det, $has_officer_map, $has_officer_inc, $has_officer, $has_subject_map, $has_subject_inc, $has_subject);

  if ($where != "")  
     $where .= " AND YEAR(Date_Occured) is not null ";
  else
     $where = " where YEAR(Date_Occured) is not null  ";
//error_log($where);
  $sql = "SELECT YEAR(Date_Occured) as f1 , Count(*) as f2 $From $where group by f1 order by f1 desc";
//error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {

        if ($resultdb->num_rows == 0) {
          // error_log($num_rows);
          trigger_error('No records returned to produce a chart!');
        }

	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Incidents by State data for Report!"); } 
}








/* close connection */
  $mysqli->close();

  if ($filter == "")
    $filter = "Filtered on:  None";
  else
    $filter = "Filtered on:  " . $filter;

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
        "title" => $rpt_title, 
        "filter" => $filter, 
        "RPT_Type" => $rpt_type,
        "report_data" => $result
  ));	

//send back information to extjs
//  echo json_encode($out);




?>

