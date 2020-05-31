<?php 
session_start();
session_destroy();
// nilai session dibersihkan
header("location:../index.php");
// dialihkan ke tampilan login
?>