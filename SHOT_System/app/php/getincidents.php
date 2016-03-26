<?php

/* This will automatically open a database connection and check if the session has expired */
require_once(dirname(__FILE__) . '/common.php'); // from the same folder
set_error_handler("customError");

// authorization
$func = "Access Departments";
$needed_access_functions = array("Access_NewIncident","Access_QueryUpdate", "Access_QueryView");
Verify_Security($func, $needed_access_functions);

// defaults
$success = true;
$result = [];
$where = [];

// search params
$post = $_REQUEST; // @TODO replace with _POST
// error_log(print_r($post, 1));

// partial incident name
if (isset($post['name'])) {
  $value = trim($post['name']); // just in case
  if (strlen($value)) { // string
    $where[] = "i.Incident_Name LIKE '%$value%'"; // @TODO needs sanitation with mysqli->prepare
  }
}

// exact state region
if (isset($post['region'])) {
  $value = trim($post['region']);
  if (strlen($value)) {
    $where[] = "st.Region = '$value'";
  }
}

// partial city
if (isset($post['city'])) {
  $value = trim($post['city']);
  if (strlen($value)) {
    $where[] = "i.City LIKE '%$value%'";
  }
}

// exact state ID
if (isset($post['state'])) {
  $value = intval(trim($post['state']));
  if ($value) { // must be a positive number
    $where[] = "i.State_ID = $value";
  }
}

// partial ZIP
if (isset($post['zip'])) {
  $value = trim($post['zip']);
  if (strlen($value)) {
    $where[] = "i.ZIP_CODE LIKE '%$value%'";
  }
}

// date_from
if (isset($post['date_from'])) {
  $value = trim($post['date_from']);
  if (strlen($value)) {
    list($date) = explode('T', $value); // just in case
    $where[] = "i.Date_Occured >= '$date'";
  }
}

// date_to
if (isset($post['date_to'])) {
  $value = trim($post['date_to']);
  if (strlen($value)) {
    list($date) = explode('T', $value);
    $where[] = "i.Date_Occured <= '$date'";
  }
}

// partial Subject (Suspect) Name
if (isset($post['subject'])) {
  $value = trim($post['subject']);
  if (strlen($value)) {
    $where[] = "su.Suspect_Name LIKE '%$value%'";
  }
}

// mysql request
if ($where) {
  $where = implode(' AND ', $where);

  $sql = "SELECT
      i.Incident_Name,
      i.Date_Occured,
      i.City,
      st.State,
      i.Incident_ID
    FROM
      incident AS i
      LEFT JOIN state AS st ON i.State_ID = st.State_ID
      LEFT JOIN suspect_mapping AS sm ON i.Incident_ID = sm.Incident_Suspect_ID
      LEFT JOIN suspect AS su ON sm.Suspect_ID = su.Suspect_ID
    WHERE $where
    ORDER BY
      i.Incident_Name
  ;";
  // error_log($sql);
  $success = $mysqli->connect_errno === 0;
  $mysqli_result = $mysqli->query($sql);
  if ( ! $mysqli_result) {
    // error_log($mysqli->error);
    trigger_error('Error Retrieving incidents from Database!');
  }
  if ($mysqli_result->num_rows > 300) {
    // error_log($num_rows);
    trigger_error('Too many incidents to return.  Please narrow your search!');
  }
	while ($record = $mysqli_result->fetch_assoc()) {
		$result[] = $record;
	}
  $mysqli->close();
} else {
  // error_log('Empty search! Return nothing.');
}

// send information back to extjs
$out = [
  'success'  => $success,
  'num_rows' => count($result), 
  'Incident' => $result,
];
echo json_encode($out);

/* End of file */
