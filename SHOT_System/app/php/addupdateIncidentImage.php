<?php
require("common.php");

  //$func = "";
$Incidentnum = $_POST['img_upld_incident_id']; 
$file_size_check = round($_FILES["file"]["size"] / 1024, 2);
$file_type_check = $_FILES["file"]["type"];

  $result = array();

$IncNum = $Incidentnum;  //need to somehow retrieve this from the form, possibly through global variable or common.php function??

//error_log("got into script");

if ($_FILES["file"]["error"] > 0)
{
  //$error  = $_FILES["file"]["error"];
  $error = "No file selected!";
  $response = array('success' => false,
  //'data' => $file_size,                    
  'msg' => $error
  );
    
  echo json_encode($response);
}
else
{
    if( $file_size_check > 100) {
          $error = "File too large! Must be less than 20kb. File Size: {$file_size_check}kb";
          $response = array('success' => false,
            //'data' => $file_size_check,                            
            'msg' => $error
          );
          echo json_encode($response);
    }
    
    else if ($file_type_check != "image/png" && $file_type_check != "image/jpeg" && $file_type_check != "image/gif") {
        
          $error = "File is not an image! File Type: {$file_type_check} \r Accepted File Types: .JPG, .PNG, .GIF";
          $response = array('success' => false,
            //'data' => $file_size_check,                            
            'msg' => $error
          );
          echo json_encode($response);        
        
    }
    
    else {
          $uploads_dir = '../suspect-images';
        
          $currfile = $_FILES["file"]["tmp_name"]; //full directory
          $file_name = $_FILES["file"]["name"];
          $file_type = $_FILES["file"]["type"];
          $file_size = round($_FILES["file"]["size"] / 1024, 2) . "  KB";
        
          $file_name_final = $IncNum."_".$file_name;
        
          $url_fs = $uploads_dir."/".$file_name_final;
        
        
          $uploads_dir_db = 'app/suspect-images'; //directory for database and html rendering
          $url = $uploads_dir_db."/".$file_name_final; //creates a url that will get the image from html scope
          
          
          move_uploaded_file($currfile, "$url_fs");
         

          $sql = "INSERT INTO incident_images (Incident_Id, image_name, image_size, url) VALUES({$IncNum}, '{$file_name_final}', '{$file_size}', '{$url}')";
        

          $mysqli->query($sql);    



$sql = "SELECT image_id, url, Incident_Id, SUBSTRING_INDEX(image_name,'_',-1) as image_name FROM incident_images WHERE Incident_Id = $Incidentnum";

  if ($resultdb = $mysqli->query($sql)) {
	while($record = $resultdb->fetch_assoc()) {
		array_push($result, $record);
	}
       $resultdb->close();
  }
  else { trigger_error("Error Retrieving Images from Database!"); } 

//send back information to extjs
  echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"SuspectImages" => $result

  ));	

/* close connection */
  $mysqli->close();
}
}

?>

