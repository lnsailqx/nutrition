<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

	<title>tuaner</title>
	<link rel="stylesheet" type="text/css" href="__PUBLIC__/css/main.css" />
	<script type="text/javascript" src="__PUBLIC__/js/wt.js"></script>
	<script type="text/javascript" src="__PUBLIC__/js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="__PUBLIC__/js/logris.js"></script>

</head>
	<body>
<?php
 @header('Content-Type:text/html;charset=utf-8');
 error_reporting(NULL);
ini_set('display_errors','Off');
include "db_connect.php";

    $username=$_GET['username'];
    $sql="DELETE FROM userandpassword WHERE username='$username'";
     $query=mysql_query($sql);
      $row=mysql_fetch_assoc($query);
     	 $sql1="DELETE FROM mainposts WHERE userid='$username'";
     	 $query1=mysql_query($sql1);
     	 $row1=mysql_fetch_assoc($query1);
     	 	
     	echo "删除成功！";
     	header("Refresh:2;url=admin.php");
    
?>
	</body>
</html>