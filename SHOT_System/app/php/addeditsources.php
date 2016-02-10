<?php

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $sourceid = $_POST['sd_sourceid'];   
  $Incident_ID = $_POST['Incident_ID']; 
  $sd_Title = $_POST['sd_Title']; 
  $sd_Author = $_POST['sd_Author']; 
  $sd_datewritten = $_POST['sd_datewritten']; 
  $sd_newspaper = $_POST['sd_newspaper']; 
  $sd_Link = $_POST['sd_Link']; 
  $sd_SourceType = $_POST['sd_SourceType']; 
  $sd_abstract = $_POST['sd_abstract']; 

//  error_log($indoors);


  $sd_Title = StringorNULL($sd_Title);
  $sd_Author = StringorNULL($sd_Author);
  $sd_datewritten = StringorNULL($sd_datewritten);
  $sd_newspaper = NumberorNULL($sd_newspaper);
  $sd_Link = StringorNULL($sd_Link);
  $sd_SourceType = NumberorNULL($sd_SourceType);
  $sd_abstract = StringorNULL($sd_abstract);

//  error_log($indoors);

  $last_id = 0;

//Add or update depending on if an incident_source number is supplied or not
  if ($sourceid == "")
  {
    $sql = "INSERT INTO Incident_Source (Incident_ID, Source_Type_ID, Title, Author, Source_Date, Link, Newspaper_ID, Abstract) VALUES ($Incident_ID, $sd_SourceType, $sd_Title, $sd_Author, $sd_datewritten, $sd_Link, $sd_newspaper, $sd_abstract)"; 

    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Adding Incident Source to Database!");
    }
    $last_id = $mysqli->insert_id;
//    error_log($last_id);
  }
  else
  {
    $sql = "UPDATE Incident_Source set Source_Type_ID = $sd_SourceType, Title = $sd_Title, Author = $sd_Author, Source_Date = $sd_datewritten, Link = $sd_Link, Newspaper_ID = $sd_newspaper, Abstract = $sd_abstract WHERE Incident_ID = $Incident_ID";
//    error_log($sql);
    if ($resultdb = $mysqli->query($sql) != TRUE) {
      trigger_error("Error Updating Incident Source Record in Database!");
    }


  }

  $result = array();
  $sql = "SELECT Source_ID, I.Source_Type_ID, Source, Title, Author, Source_Date, Link, I.Newspaper_ID, Newspaper, Abstract  FROM Incident_Source I LEFT OUTER JOIN Source_Type s on i.Source_Type_ID = s.Source_Type_ID left outer join Newspapers n on i.Newspaper_ID = n.Newspaper_ID where Incident_ID = $Incident_ID  order by Source_ID";
//  error_log($sql);
  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving incidents sources from Database!"); } 

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"Incident_Source" => $result,
	"LAST_INSERT_ID" => $last_id
  ));	

/* close connection */
  $mysqli->close();

?>