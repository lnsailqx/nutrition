<?php
session_start();
require 'ValidateCode.class.php';  //ͼƬ������·��
$_vc = new ValidateCode();		
$_vc->doimg();		
$_SESSION['authnum_session'] = $_vc->getCode();//��֤�뱣�浽SESSION��
echo $_SESSION['authnum_session'];
?>