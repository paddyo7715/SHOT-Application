<?php
  
  session_start();


  $result = array(); 
  $result['success'] = true; 
  $result['msg'] = 'logout';

  session_destroy();

  echo json_encode($result);
?>