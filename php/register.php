<?php
@header('Content-Type:text/html;charset=utf-8');
// error_reporting(NULL);ini_set('display_errors','Off');
session_start();
$username = $_POST["username"];
$password = $_POST["password"];
$name = $_POST["name"];
$row_sex = $_POST["sex"];
$sex=1;
if($row_sex=="男"){
	$sex=1;
}
else{
	$sex=0;
}
$age = $_POST["age"];


	include "db_connect.php";

$sql = "SELECT username FROM userandpassword WHERE username='$username'";
$query = mysql_query($sql);
$row = mysql_fetch_assoc($query);
if (mysql_affected_rows() == 0) {
	$insert = "INSERT INTO userandpassword (username,password,name,sex,age) VALUES('$username','$password','$name','$sex','$age')";
	$result = mysql_query($insert);
	if ($result == true) {
		echo $username;
		$sql1 = "SELECT username,id FROM userandpassword WHERE username='$username'";
		$query1 = mysql_query($sql1);
		$row1 = mysql_fetch_assoc($query1);
		$_SESSION['username'] = $row1['username'];
		$_SESSION['id'] = $row1['id'];
		$insert1 = "INSERT INTO relationship (mainuser,userfriend) VALUES('$username','$username')";
		$result1 = mysql_query($insert1);
	}
} else {
	echo "used";
	echo mysql_error();
}
mysql_close($link);


?>