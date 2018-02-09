<?php
 @header('Content-Type:text/html;charset=utf-8');

include "db_connect.php";

session_start();
$id=$_SESSION['username'];
date_default_timezone_set($timezone); //北京时间

	$topicid=$_POST['topicid'];
   
  
 	$sql="SELECT postid,commentatorid,becommentatorid,message,commenttime FROM comments WHERE postid='$topicid'";
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