<?php
	$Name = $_POST['name'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	// Database connection
	$conn = new mysqli('localhost','root','','users');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registered_user(Name,Email, Password) values(?, ?, ?)");
		$stmt->bind_param("sss", $Name,$email, $password);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>