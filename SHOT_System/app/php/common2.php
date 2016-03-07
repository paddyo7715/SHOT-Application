<?php 

function validatepw($pw)
{
  $valid_pw = "Y";

  if (strlen($pw) < 8 || strlen($pw) > 12)
    $valid_pw = "N"; 

  return $valid_pw;
}

function echorspage($error)
{

 	echo "<script language=\"Javascript\">\n";
	echo "function loadpage() { \n";
 	echo "document.getElementById(\"oldpw\").focus(); \n";
 	echo "document.getElementById(\"error\").innerHTML=\"" . $error . "\"; \n";
	echo "} \n"; 
 	echo "function validateForm() \n";
 	echo "{ \n";
 	echo " var oldpw = document.getElementById(\"oldpw\").value; \n";
 	echo " var password1 = document.getElementById(\"mypassword1\").value; \n";
 	echo " var password2 = document.getElementById(\"mypassword2\").value; \n";
 	echo "if(oldpw.trim().length == 0) \n";
 	echo "{ \n";
 	echo "   document.getElementById(\"error\").innerHTML=\"You must enter your current password. \"; \n";
 	echo "   return false; \n";
 	echo " } \n";
 	echo " else if(password1.trim().length == 0 || password2.trim().length == 0) \n";
 	echo " { \n";
 	echo "   document.getElementById(\"error\").innerHTML=\"You must enter a new password and confirm the password. \"; \n";
 	echo "   return false; \n";
 	echo " } \n";
 	echo "else if(password1.trim() != password2.trim()) \n";
 	echo " { \n";
 	echo "   document.getElementById(\"error\").innerHTML=\"Password and Confirm PW must match. \"; \n";
 	echo "   return false; \n";
 	echo " } \n";
 	echo " else \n";
 	echo "{ \n";
 	echo "  form.submit(); \n";
 	echo " } \n";
 	echo "} \n";
 	echo "</script>\n";
 	echo "<html>\n";
 	echo "<head><title>Change Password SHOT System</title></head>\n";
 	echo "<body onload=\"loadpage()\">\n";
 	echo "<center>\n";
 	$sr = "http://localhost/SHOT_System/app/resources/images/shotlogo.png";
 	echo "<div><img height=\"400\"width=\"370\" src=\""  . $sr .  "\"><br><br></div>\n";
 	echo "<table width=\"300\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"1\" bgcolor=\"#CCCCCC\">\n";
 	echo "<tr><td><span style=\"color:red;\" id=\"error\" > </span></td></tr>\n";
 	echo "<tr>\n";
 	echo "<form name=\"form1\" method=\"post\" onsubmit=\"return validateForm()\" action=\"Resetpw.php\">\n";
 	echo "<td>\n";
 	echo "<table width=\"100%\" border=\"0\" cellpadding=\"3\" cellspacing=\"1\" bgcolor=\"#FFFFFF\">\n";
 	echo "<tr>\n";
 	echo "<td colspan=\"3\"><strong>Password Change Required</strong></td>\n";
 	echo "</tr>\n";
 	echo "<tr>\n";
 	echo "<td width=\"78\">Current Password</td>\n";
 	echo "<td width=\"6\">:</td>\n";
 	echo "<td width=\"294\"><input name=\"oldpw\" type=\"PASSWORD\" id=\"oldpw\"></td>\n";
 	echo "</tr>\n";
 	echo "<tr>\n";
 	echo "<td>Password</td>\n";
 	echo "<td>:</td>\n";
 	echo "<td><input name=\"mypassword1\" type=\"PASSWORD\" id=\"mypassword1\"></td>\n";
 	echo "</tr>\n";
 	echo "<tr>\n";
 	echo "<td>Confirm PW</td>\n";
 	echo "<td>:</td>\n";
 	echo "<td><input name=\"mypassword2\" type=\"PASSWORD\" id=\"mypassword2\"></td>\n";
 	echo "</tr>\n";
 	echo "<tr>\n";
 	echo "<td>&nbsp;</td>\n";
 	echo "<td>&nbsp;</td>\n";
 	echo "<td><input type=\"submit\" name=\"Submit\" value=\"Login\"></td>\n";
 	echo "</tr>\n";
 	echo "</table>\n";
 	echo "</td>\n";
 	echo "</form>\n";
 	echo "</tr>\n";
 	echo "</table>\n";
 	echo "</center>\n";
 	echo "</body>\n";
 	echo "</html>\n";


}


?>