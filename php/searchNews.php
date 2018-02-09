<?php
 @header('Content-Type:text/html;charset=utf-8');

include "db_connect.php";


date_default_timezone_set($timezone); //北京时间
 	$Num=$_POST['sum'];

   
  
 	$sql="SELECT * FROM news  LIMIT $Num,10";
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