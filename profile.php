<?php

 //Put your own hosting server HOST name here.
 $HostName = "localhost";

 //Put your own MySQL database name here.
 $DatabaseName = "estsponsor_registration";

 //Put your own MySQL database User Name here.
 $HostUser = "root";

 //Put your own MySQL database Password here.
 $HostPass = "";
//$_SESSION=['$id'];
$id=5;

// Create connection

$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);

if ($conn->connect_error) {

 die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name,email,user,filiere,id FROM utilisateur where id=$id";
//echo $email;

$result = $conn->query($sql);

if($result->num_rows>0){
  while($row[] = $result->fetch_assoc()) {

  $tem = $row;

  $json = json_encode($tem);
}
 }

else {
  echo "No Results Found.";
  }



 echo $json;
$conn->close();
?>
