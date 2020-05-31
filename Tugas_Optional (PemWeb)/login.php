<?php 
include 'config.php';
//   menghubungkan dengan file config.php yaitu file koneksi database
$username = $_POST['username'];
// menerima nilai pada input form username
$password = md5($_POST['password']);
//  menerima nilai pada input form password dan men des enkripsikan password
$login = mysql_query("select * from user where username='$username' and password='$password'");
// query pengecekan apakan terdapat kecocokan? ditandai dengan ada tidaknya baris hasil query
$cek = mysql_num_rows($login);
 
if($cek > 0){
	// jika terdapat baris, status akan menjadi login
	session_start();
	$_SESSION['username'] = $username;
	$_SESSION['status'] = "login";
	// diarahkan ke file index.php yang sudah login
	header("location:admin/index.php");
}else{
	header("location:index.php");	
	// jika baris tidak muncul, kembalikan ke form login
}
 
?>