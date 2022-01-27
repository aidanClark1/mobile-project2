
<?php

// connection details for MySQL database

$cd_host = "127.0.0.1";
$cd_port = 3306;
$cd_socket = "";

// database name, username and password

$cd_dbname = "companydirectory";
$cd_user = "root";
$cd_password = "";

$conn = mysqli_connect($cd_host, $cd_user, $cd_password, $cd_dbname) or die('Could not connect to MySql: ' . mysqli_connect_error());

// set encoding
mysqli_set_charset($conn, 'utf8');

?>
