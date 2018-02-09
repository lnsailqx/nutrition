<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

	<title>tuaner</title>

</head>
	<body>
  <?php
 @header('Content-Type:text/html;charset=utf-8');
include "db_connect.php";

   $username=$_GET['userid'];
  $sql="SELECT * FROM mainposts WHERE userid='$username'";
  $query=mysql_query($sql);
  $result=array();
  while ($row=mysql_fetch_array($query)) {
     $result[]=$row;
  }
  ?>
  <table bgcolor=#CCFFCC border="1px" width=70% height=30% align="center">
    <tr><td align="center">ID</td><td align="center">usernmae</td><td align="center">Content</td><td align="center">发表时间</td><td align="center">删除</td></tr>
<?php
if (!$result) {
  echo '<table border="1px" width=70% height=30% align="center"><tr><td align="center">该用户没有发表帖子！</td></tr></table>';
}else{
foreach ($result as $k =>$v) {
  echo '<tr>

  <td align="center">'.$v['id'].'</td>
   <td align="center">'.$v['userid'].'</td>
  
  <td align="center">'.$v['message'].'</td>
  <td align="center">'.$v['posttime'].'</td>
  <td align="center"><a href="deletecontent.php?topicid='.$v['id'].'">删除</a></td>
  </tr>';
}
}
?>
  </table>
 </body>
 </html>