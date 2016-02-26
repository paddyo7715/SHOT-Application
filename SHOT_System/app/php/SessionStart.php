<?php

session_start();

require_once './../../keys.php';
$_SESSION['dbServer'] = $DB_Host;
$_SESSION['dbUser'] = $DB_User;
$_SESSION['dbPW'] = $DB_Pass;
$_SESSION['dbDatabase'] = $DB_Name;

header('Location: ../../app.html');
exit;

/* End of file */
