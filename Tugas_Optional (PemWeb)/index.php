<!DOCTYPE html>
<html>
<head>
	<title>Membuat Form Validasi dengan Javascript - WWW.MALASNGODING.COM</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<br/>
	<br/>
	<center><h2>PRAKTEK FORM LOGIN (POST)</h2></center>	
	<br/>
	<div class="login">
	<br/>
	<!-- menampilkan form untuk login -->
	<!-- memanggil fungsi validasi pada java script di bagian bawah -->
		<form action="login.php" method="post" onSubmit="return validasi()">
			<div>
				<label>Username:</label>
				<input type="text" name="username" id="username" />  
			</div>
			<div>
				<label>Password:</label>
				<input type="password" name="password" id="password" />
			</div>			
			<div>
				<input type="submit" value="Login" class="tombol">
			</div>
		</form>
		<!-- form ini akan menggunakan method POST yaitu mengirimkan nilai
		   pada form ke file login.php -->
    </div>
    <h2><center>Username : admin <br> Password : admin123</h2></center>	
</body>
<script type="text/javascript">
	function validasi() {
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;		
		if (username != "" && password!="") {
			return true;
		}else{
			alert('Username dan Password harus di isi !');
			return false;
		}
	}
</script>
</html>