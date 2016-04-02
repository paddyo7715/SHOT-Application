<?php

$post = $_POST;

// fix date and time
if (! empty($post['Date_Occured'])) {
    $post['Date_Occured'] = trim($post['Date_Occured']);
    $post['Date_Occured'] = trim($post['Date_Occured'], '"');
    list($post['Date_Occured']) = explode('T', $post['Date_Occured']);
}
if (! empty($post['Time'])) {
    $post['Time'] = trim($post['Time']);
    $post['Time'] = trim($post['Time'], '"');
    list(,$post['Time']) = explode('T', $post['Time']);
}

$sources = '';
$post['sources'] = json_decode($post['sources']);
foreach ($post['sources'] as $source) {
    $sources .= '<li>';
    foreach ($source as $key => $value) {
        $sources .= $key . ': ' . $value . '<br>';
    }
}

$officers = '';
$post['officers'] = json_decode($post['officers']);
foreach ($post['officers'] as $source) {
    $officers .= '<li>';
    foreach ($source as $key => $value) {
        $officers .= $key . ': ' . $value . '<br>';
    }
}

$subjects = '';
$post['subjects'] = json_decode($post['subjects']);
foreach ($post['subjects'] as $source) {
    $subjects .= '<li>';
    foreach ($source as $key => $value) {
        $subjects .= $key . ': ' . $value . '<br>';
    }
}

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

    <h2>Location</h2>
    <p>Address_1: $post[Address_1]</p>
    <p>Address_2: $post[Address_2]</p>
    <p>City: $post[City]</p>
    <p>State: $post[State]</p>
    <p>Region: $post[Region]</p>
    <p>zip: $post[zip]</p>
    <p>latitude: $post[latitude]</p>
    <p>longitude: $post[longitude]</p>
    <p>Location: $post[Location]</p>
    <p>LocationDet: $post[LocationDet]</p>
    <p>Indoor: $post[Indoor]</p>
    <p>Outdoor: $post[Outdoor]</p>

    <h2>Details</h2>
    <p>Lawsuit: $post[Lawsuit]</p>
    <p>Number_Officers_on_Scene: $post[Number_Officers_on_Scene]</p>
    <p>Off_Fired_Guns: $post[Off_Fired_Guns]</p>
    <p>Total_Officer_Shots_Fired: $post[Total_Officer_Shots_Fired]</p>
    <p>Date_Occured: $post[Date_Occured]</p>
    <p>Time: $post[Time]</p>
    <p>Approx_Time: $post[Approx_Time]</p>

    <h2>Sources</h2>
    <ol>$sources</ol>

    <h2>Officers</h2>
    <ol>$officers</ol>

    <h2>Subjects</h2>
    <ol>$subjects</ol>

    <button>Print</button>
    <button>Cancel</button>
    
OUT;
?>
</body>
</html>
