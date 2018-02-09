<?php
@header('Content-Type:text/html;charset=utf-8');
// error_reporting(NULL);ini_set('display_errors','Off');
if (isset($_SESSION['username'])) {
	echo $_SESSION['username'];

} else {
	session_start();
	include "db_connect.php";
	$username = $_POST["username"];
	$password = $_POST["password"];
	$vaild=$_POST["vaild"];
	if($vaild==$_SESSION['authnum_session']){
	$sql = "SELECT * FROM userandpassword WHERE username='$username' AND password='$password'";

	$query = mysql_query($sql);
	$row = mysql_fetch_assoc($query);
	if (mysql_affected_rows() == 1) {
		$_SESSION['username'] = $row['username'];
		echo $_SESSION['username'];
		// 登陆时间
		// $date1 = time();
		// $date = date('Y-m-d-h-i-s', $date1);
		// $update = "UPDATE userandpassword SET lastlogin = '{$date}' where username = '{$username}'";
		// mysql_query($update);

	} else {
		echo "wrong";
	}
}
	else{
		echo "验证码错误";
		}
}

mysql_close($link);