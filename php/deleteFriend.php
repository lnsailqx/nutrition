<?php
 @header('Content-Type:text/html;charset=utf-8');
 // error_reporting(NULL);
// ini_set('display_errors','Off');
include "db_connect.php";
    session_start();
    $mainuser=$_SESSION['username'];
    $username=$_POST['username'];
    $sql="DELETE FROM relationship WHERE userfriend='$username' AND mainuser='$mainuser'  ";
     $query=mysql_query($sql);
      
     	 
     	 	
     	echo "删除关注成功";
     	header("Refresh:2;url=admin.php");
    
?>