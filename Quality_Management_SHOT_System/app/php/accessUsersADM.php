<?php

  $Action = $_POST['Action']; 
  $User_Number = $_POST['User_Number']; 
  $User_ID = $_POST['User_ID']; 
  $Password = $_POST['Password']; 
  $Name = $_POST['Name']; 
  $Organization = $_POST['Organization']; 
  $Email = $_POST['Email']; 
  $Phone = $_POST['Phone']; 
  $Active = $_POST['Active']; 
  $Access_NewIncident = $_POST['Access_NewIncident']; 
  $Access_QueryView = $_POST['Access_QueryView']; 
  $Access_QueryUpdate = $_POST['Access_QueryUpdate']; 
  $Access_DatabaseMaint = $_POST['Access_DatabaseMaint']; 
  $Access_Reports = $_POST['Access_Reports']; 
  $Access_UserManagement = $_POST['Access_UserManagement']; 
  $encpw = "";

  $result = array();



/* This will automatically open a database connection and check if the session has expired */
  require("commonADM.php");
  require("common2ADM.php");
  set_error_handler("customError");

  $func = "Access Users";
  $needed_access_functions = array("Access_UserManagement");
  Verify_Security($func, $needed_access_functions);

  $User_ID = StringorNULLp($User_ID);
  $Password = StringorNULLp($Password);

  if ($Password != "")
  {
     $validpw = validatepw($Password);
     if ($validpw != "Y")
        trigger_error("Invalid password!  New passwords must have a length of between 8 and 12 characters");

     $encpw = crypt(md5($Password),md5($User_ID));
  }  


  $Name = StringorNULLp($Name);
  $Organization = StringorNULLp($Organization);
  $Email = StringorNULLp($Email);
  $Phone = StringorNULLp($Phone);
  $Active = setDBBooleanp($Active);
  $Access_NewIncident = setDBBooleanp($Access_NewIncident);
  $Access_QueryView = setDBBooleanp($Access_QueryView);
  $Access_QueryUpdate = setDBBooleanp($Access_QueryUpdate);
  $Access_DatabaseMaint = setDBBooleanp($Access_DatabaseMaint);
  $Access_Reports = setDBBooleanp($Access_Reports);
  $Access_UserManagement = setDBBooleanp($Access_UserManagement);

  error_log($Access_NewIncident);

  if ($Action == "A")
  {
    $emsg = "Error Adding User to Database!";
    $stmtx = $mysqli->prepare("INSERT INTO users (User_ID, Name, Organization, Email, Phone, Password, Access_NewIncident, Access_QueryView, Access_QueryUpdate, Access_DatabaseMaint, Access_Reports, Access_UserManagement) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }

    $rc = $stmtx->bind_param('ssssssssssss', $User_ID, $Name, $Organization, $Email, $Phone, $encpw, $Access_NewIncident, $Access_QueryView, $Access_QueryUpdate, $Access_DatabaseMaint, $Access_Reports, $Access_UserManagement);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();


  }  
  elseif ($Action == "U")
  {
    $emsg = "Error Updating Users in Database!";
    $stmtx = $mysqli->prepare("UPDATE users set User_ID = ?, Name = ?, Organization = ?, Email = ?, Phone = ?, Access_NewIncident = ?, Access_QueryView = ?, Access_QueryUpdate = ?, Access_DatabaseMaint = ?, Access_Reports = ?, Access_UserManagement = ? WHERE User_Number = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('sssssssssssi', $User_ID, $Name, $Organization, $Email, $Phone, $Access_NewIncident, $Access_QueryView, $Access_QueryUpdate, $Access_DatabaseMaint, $Access_Reports, $Access_UserManagement, $User_Number);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();


  }  
  elseif ($Action == "D")
  {
    $emsg = "Error Deleting User in Database!";
    $stmtx = $mysqli->prepare("UPDATE users SET isdeleted = 1 WHERE User_Number = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('i', $User_Number);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();

  }  
  elseif ($Action == "P")
  {
    $emsg = "Error Reseting Password in Database!";
    $stmtx = $mysqli->prepare("UPDATE users set Password = ?, resetpw = 1 WHERE User_Number = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('si', $encpw, $User_Number);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();

  } 
  elseif ($Action == "S")
  {
   
    $stmtx = $mysqli->prepare("UPDATE users set Active = ? WHERE User_Number = ?");
    $stmtx->bind_param('si', $Active, $User_Number);
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error("Error updating status in Database!");
    }
    $stmtx->close();

    $emsg = "Error Updating User Status in Database!";
    $stmtx = $mysqli->prepare("UPDATE users set Active = ? WHERE User_Number = ?");
    if ( false===$stmtx ) {
      trigger_error($emsg);
    }
    $rc = $stmtx->bind_param('si', $Active, $User_Number);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
    if ($resultdb = $stmtx->execute() != TRUE) {
      trigger_error($emsg);
    }
    $stmtx->close();

  } 


  $emsg = "Error Retrieving Users from Database!";
  $stmt = $mysqli->prepare("SELECT case Active when 'Y' then 'Active' when 'N' then 'Suspended' end as Status, User_Number, User_ID, Name, Organization, Email, Phone, case Access_NewIncident when 'Y' then 'true' when 'N' then 'false' end as Access_NewIncident, case Access_QueryView when 'Y' then 'true' when 'N' then 'false' end as Access_QueryView, case Access_QueryUpdate when 'Y' then 'true' when 'N' then 'false' end as Access_QueryUpdate, case Access_DatabaseMaint when 'Y' then 'true' when 'N' then 'false' end as Access_DatabaseMaint, case Access_Reports when 'Y' then 'true' when 'N' then 'false' end as Access_Reports, case Access_UserManagement when 'Y' then 'true' when 'N' then 'false' end as Access_UserManagement   FROM users WHERE isdeleted = 0 order by User_ID"); 
  if ( false===$stmt ) {
      trigger_error($emsg);
  }
  $rslt = $stmt->execute();
  if ($rslt == TRUE) {    
    if ($resultdb = $stmt->get_result()) {
	while($record = $resultdb->fetch_assoc()) {
                $Display_Access = "";

                $Access_NewIncident = $record["Access_NewIncident"];
                if ($Access_NewIncident == "true")
                {
                   $Display_Access .= ( $Display_Access == '' ) ? 'New Incident' : ', New Incident';
                }

                $Access_QueryView = $record["Access_QueryView"];
                if ($Access_QueryView == "true")
                {
                   $Display_Access .= ( $Display_Access == '' ) ? 'Query (View)' : ', Query (View)';
                }

                $Access_QueryUpdate = $record["Access_QueryUpdate"];
                if ($Access_QueryUpdate == "true")
                {
                   $Display_Access .= ( $Display_Access == '' ) ? 'Query (Update)' : ', Query (Update)';
                }

                $Access_DatabaseMaint = $record["Access_DatabaseMaint"];
                if ($Access_DatabaseMaint == "true")
                {
                   $Display_Access .= ( $Display_Access == '' ) ? 'Database Maint' : ', Database Maint';
                }

                $Access_Reports = $record["Access_Reports"];
                if ($Access_Reports == "true")
                {
                   $Display_Access .= ( $Display_Access == '' ) ? 'Reports' : ', Reports';
                }

                $Access_UserManagement = $record["Access_UserManagement"];
                if ($Access_UserManagement == "true")
                {
                   $Display_Access .= ( $Display_Access == '' ) ? 'User Management' : ', User Management';
                }

		$record["Display_Access"] = $Display_Access;
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
	"Users" => $result

  ));	
/* close connection */
  $mysqli->close();

?>