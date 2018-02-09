<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

	<title>tuaner</title>

</head>
	<body>
  <?php
 @header('Content-Type:text/html;charset=utf-8');
 error_reporting(NULL);
ini_set('display_errors','Off');
include "db_connect.php";

$topicid=$_GET['topicid'];
$sql="DELETE FROM mainposts WHERE id='$topicid'";
$query=mysql_query($sql);
$row=mysql_fetch_assoc($query);
echo "删除成功！";
     	header("Refresh:2;url=admin.php");
    
?>
	</body>
	</html>