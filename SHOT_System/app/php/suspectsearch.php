<?php

  $Name_search = $_POST['Name_search'];
  /*
  $likeclause = " Suspect_Name like '%$Name_search%' and ";*/
   if ($Name_search != "") $likeParam = "%$Name_search%";
  else $likeParam = "%%";

  $result = array();

/* This will automatically open a database connection and check if the session has expired */
  require("common.php");
  set_error_handler("customError");

  $func = "Suspect Search";
  $needed_access_functions = array("Access_NewIncident","Access_QueryUpdate");
  Verify_Security($func, $needed_access_functions);

  $num_rows = 0;
  
  $emsg = "Error Retrieving subjects from Database!";
  $stmt = $mysqli->prepare("SELECT Suspect_ID, Suspect_Name, Gender, Race FROM suspect s, race r where Suspect_Name like ? and  s.Race_ID = r.Race_ID order by Suspect_ID"); 
  if ( false===$stmt ) {
      trigger_error($emsg);
  }
  $rc = $stmt->bind_param('s', $likeParam);
    if (false===$rc)
    {
      trigger_error($emsg);
    }
  $rslt = $stmt->execute();
  if ($rslt == TRUE) {
    if ($resultdb = $stmt->get_result()) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
		$num_rows++;
	}
       $stmt->close();
    }
    else { trigger_error($emsg); } 
  }
  else { trigger_error($emsg); }
  

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
        "num_rows" => $num_rows, 
	"suspectsearch" => $result

  ));	
/* close connection */
  $mysqli->close();

?>