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
session_start();
include "db_connect.php";

      $username=$_SESSION['username'];
      $sql="SELECT * FROM userandpassword WHERE usernamee=$username";
      $query=mysql_query($sql);
      $row=mysql_fetch_assoc($query);
      if($username=="linzecong"){

      $sql1="SELECT * FROM userandpassword ";
      $query1=mysql_query($sql1);
      $result=array();
      while($row1=mysql_fetch_array($query1)){
        $result[]=$row1;
  }
}
  ?>
  <h1>欢迎管理员</h1> <h3><?php echo "1134170478";?></h3>
<table bgcolor=#CCFFCC border="1px" width=80% height=30% align="center">
<tr><td align="center">ID</td> <!-- <td align="center">Email</td> --><!-- <td align="center">Headlogo</td> --><td align="center">username</td><td align="center">Nickname</td><td align="center">age</td><td align="center">sex</td> <td align="center">删除</td><td align="center">发过的分享</td><td align="center">最后登陆</td>
 
   </tr>
<?php
foreach ($result as $k =>$v) {
echo'
<tr>
  <td align="center">'. $v["id"].' </td>
  <td align="center">'. $v["username"].'</td>
  
    <td align="center">'.$v["name"].' </td>
    <td align="center">'.$v["age"].' </td>
    <td align="center">'.$v["sex"].' </td>
    <td align="center"><a href="delete.php?id='.$v['username'].'">删除</a></td>
    <td align="center"><a href="content.php?userid='.$v['username'].'">发表的帖子</a></td>
   
    <td align="center">'.$v['lastdate'].'</td>
</tr>';
}
?>
</table>
</body>
</html>