<?php 

session_start();

$server = "127.0.0.1";
$user = "shotuser";
$pass = "redcar11";
$dbName = "shotdb";

$mysqli = new mysqli($server, $user, $pass, $dbName);
/* check connection */
/* might want to change this code to send error message back to extj */
if ($mysqli->connect_errno) {
    $result['success'] = false;
    $result['msg'] = 'Unable to Connect to Database.';
    echo json_encode($result);
    exit("Unable to connect to Database");
}

?>