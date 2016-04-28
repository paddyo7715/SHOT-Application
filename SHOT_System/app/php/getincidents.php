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
$post = $_POST;
// $post = $_REQUEST;
// print_r($post);

$bad = '#[^\w\d\s/-]#'; // legal only: word (A-Za-z_), digit (0-9), whitespace, forward slash, dash

// partial incident name
if ($success && isset($post['name'])) {
  $value = trim($post['name']); // just in case
  if (preg_match($bad, $post['name'])) {
    $success = false;
    trigger_error('Illegal input for name');
  } elseif (strlen($value)) { // string
    $where[] = "i.Incident_Name LIKE '%$value%'"; // @TODO needs sanitation with mysqli->prepare
  }
}

// exact state region
if ($success && isset($post['region'])) {
  $value = trim($post['region']);
  if (preg_match($bad, $post['region'])) {
    $success = false;
    trigger_error('Illegal input for region');
  } elseif (strlen($value)) {
    $where[] = "st.Region = '$value'";
  }
}

// partial city
if ($success && isset($post['city'])) {
  $value = trim($post['city']);
  if (preg_match($bad, $post['city'])) {
    $success = false;
    trigger_error('Illegal input for city');
  } elseif (strlen($value)) {
    $where[] = "i.City LIKE '%$value%'";
  }
}

// exact state ID
if ($success && isset($post['state'])) {
  $value = intval($post['state']);
  if (preg_match($bad, $post['state'])) {
    $success = false;
    trigger_error('Illegal input for state');
  } elseif ($value) { // must be a positive number
    $where[] = "i.State_ID = $value";
  }
}

// partial ZIP
if ($success && isset($post['zip'])) {
  $value = trim($post['zip']);
  if (preg_match($bad, $post['zip'])) {
    $success = false;
    trigger_error('Illegal input for zip');
  } elseif (strlen($value)) {
    $where[] = "i.ZIP_CODE LIKE '%$value%'";
  }
}

// date_from
if ($success && isset($post['date_from'])) {
  $value = trim($post['date_from']);
  if (preg_match($bad, $post['date_from'])) {
    $success = false;
    trigger_error('Illegal input for date_from');
  } elseif (strlen($value)) {
    list($date) = explode('T', $value); // just in case
    $where[] = "i.Date_Occured >= '$date'";
  }
}

// date_to
if ($success && isset($post['date_to'])) {
  $value = trim($post['date_to']);
  if (preg_match($bad, $post['date_to'])) {
    $success = false;
    trigger_error('Illegal input for date_to');
  } elseif (strlen($value)) {
    list($date) = explode('T', $value);
    $where[] = "i.Date_Occured <= '$date'";
  }
}

// partial Subject (Suspect) Name
if ($success && isset($post['subject'])) {
  $value = trim($post['subject']);
  if (preg_match($bad, $post['subject'])) {
    $success = false;
    trigger_error('Illegal input for subject');
  } elseif (strlen($value)) {
    $where[] = "su.Suspect_Name LIKE '%$value%'";
  }
}

// mysql request
if ($success && $where) {
  $where = implode(' AND ', $where);

  $sql = "SELECT
      i.Incident_ID,
      i.Incident_Name,
      date(i.Date_Occured) as Date_Occured,
      i.City,
      st.State,
      i.latitude,
      i.longitude
    FROM
      incident AS i
      LEFT JOIN state AS st ON i.State_ID = st.State_ID
      LEFT JOIN incident_suspect AS `is` ON i.Incident_ID = `is`.Incident_ID
      LEFT JOIN suspect_mapping AS sm ON `is`.Incident_Suspect_ID = sm.Incident_Suspect_ID
      LEFT JOIN suspect AS su ON sm.Suspect_ID = su.Suspect_ID
    WHERE $where
    ORDER BY i.Incident_Name
    LIMIT 301
  ;";
  // LIMIT: since we are breaking after 300 a few lines lower, no need to bother the DB for more than 301 rows
  $success = $mysqli->connect_errno === 0;
  $mysqli_result = $mysqli->query($sql);
  if ( ! $mysqli_result) {
    // error_log($mysqli->error);
    trigger_error('Error Retrieving incidents from Database!');
    $success = false;
  }
  if ($mysqli_result->num_rows > 300) {
    // error_log($num_rows);
    trigger_error('Too many incidents to return.  Please narrow your search!');
    $success = false;
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
