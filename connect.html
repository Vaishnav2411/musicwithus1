<?php
	$NAME = $_POST['NAME'];
	$Email = $_POST['Email'];
	$Query = $_POST['Query'];
    $Suggestions = $_POST['Suggestions'];


	// Database connection
	$server = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mydata';
	$conn = new mysqli($server,$username,$password,$dbname);
	// $conn = new mysqli('localhost','root','','mydata');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into contact(NAME,  Email, Query, Suggestions) values(?, ?, ?, ?)");
		$stmt->bind_param("ssss", $NAME, $Email, $Query, $Suggestions);
		$execval = $stmt->execute();
		// echo $execval;
		echo "Thanks For Your Valuable Response!...";
		$stmt->close();
		$conn->close();
	}
?>