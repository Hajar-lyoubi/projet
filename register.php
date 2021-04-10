<?php

 //Put your own hosting server HOST name here.
 $HostName = "localhost";

 //Put your own MySQL database name here.
 $DatabaseName = "estsponsor_registration";

 //Put your own MySQL database User Name here.
 $HostUser = "root";

 //Put your own MySQL database Password here.
 $HostPass = "";

 // Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 // Getting the received JSON into $Received_JSON variable.
 $Received_JSON = file_get_contents('php://input');

 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($Received_JSON,true);

 // Populate User name from JSON $obj array and store into $user_name variable.
 $name = $obj['name'];

 // Populate User email from JSON $obj array and store into $user_email variable.
 $email = $obj['email'];

 // Populate Password from JSON $obj array and store into $user_password variable.
 $password = $obj['password'];
 $confirm_password = $obj['confirm_password'];
 $number = $obj['number'];
 $user = $obj['user'];
 $filiere = $obj['filiere'];

 //Checking User entered Email is already exist or not in MySQL database using SQL query.
 $CheckSQL = "SELECT * FROM utilisateur WHERE email='$email'";

 // Executing SQL Query.
 $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));

if(isset($check)){

 $Duplicate_email = 'Email Already Exist, Please Try Again With Different Email.';

 // Converting the message into JSON format.
 $Duplicate_email_Json = json_encode($Duplicate_email);

 // Echo, Printing the message on screen.
 echo $Duplicate_email_Json ;

 }
 else{

 // Creating SQL query and insert the record into MySQL database table if email dose not exist in database.
 $Sql_Query = "insert into utilisateur (name,email,password,confirm_password,number,user,filiere) values ('$name','$email','$password','$confirm_password','$number','$user','$filiere')";


 if(mysqli_query($con,$Sql_Query)){

 // Show the success message.
 $MSG = 'User Registered Successfully' ;

 // Converting the message into JSON format.
 $json = json_encode($MSG);

 // Echo, Print the message on screen.
 echo $json ;

 }
 else{

 echo 'Try Again';

 }
 }
 mysqli_close($con);
?>
