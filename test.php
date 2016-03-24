<?php

// get keys
require_once './../../keys.php';

$db = new mysqli($DB_Host, $DB_User, $DB_Pass, $DB_Name);

// test connection
if ($db->connect_errno > 0) {
    exit("Connect Error: $db->connect_error");
}
echo "Connected: $db->host_info<br>";

// test query
$sql = "SELECT * FROM incident";
$result = $db->query($sql);
if (! $result) {
    exit("Query error: $db->error");
}
echo "Query ok: $result->num_rows rows<br>";

// print results
echo 'Results: <ul>';
while ($row = $result->fetch_object()) {
    echo "<li>$row->Incident_Name</li>";
}
echo '</ul>';

$db->close();

/* End of file */
