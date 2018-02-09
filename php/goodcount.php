<?php
 @header('Content-Type:text/html;charset=utf-8');
 error_reporting(NULL);
ini_set('display_errors','Off');
session_start();
include "db_connect.php";
$newsid=$_POST['newsid'];
if (isset($_SESSION[$newsid])) {
    echo "你已经点赞过了";

}else{
    
    $sql="UPDATE news SET likecount=likecount+1 WHERE newsid='$newsid'";
     $query=mysql_query($sql);
      if($query){
        echo "点赞成功";
        $_SESSION[$newsid]="true";
      }
  }
     	
     	 	
     	
     	
    
?>