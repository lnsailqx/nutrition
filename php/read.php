<?php
 @header('Content-Type:text/html;charset=utf-8');

include "db_connect.php";



date_default_timezone_set($timezone); //北京时间

$newsid = $_POST["newsid"];
   
  
 	$sql="SELECT * FROM news WHERE newsid='$newsid'  ";
	$query=mysql_query($sql);
	$json = "";
	while ($row = mysql_fetch_array($query,MYSQL_ASSOC)) {
		
		foreach ($row as $key => $value) {
			$row[$key] = $value;
		}
		$json .= urldecode(json_encode($row)).',';
	}

	  echo '['.substr($json, 0, strlen($json)-1).']';  
?>