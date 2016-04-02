<?php

$post = $_REQUEST;

?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>SHOT System | Print Preview</title>
</head>
<body>
<?php echo <<<OUT

    <h1>Print Preview</h1>
    <p>Incident_ID: $post[Incident_ID]</p>
    <p>Incident_Name: $post[Incident_Name]</p>
    <p>Lawsuit: $post[Lawsuit]</p>

    <h2>Address</h2>
    <p>Address_1: $post[Address_1]</p>
    <p>Address_2: $post[Address_2]</p>
    <p>City: $post[City]</p>
    <p>State: $post[State]</p>
    <p>Region: $post[Region]</p>
    <p>zip: $post[zip]</p>
    
OUT;
?>
</body>
</html>
