<?php
session_start();
// connection details for MySQL database

$cd_host = "127.0.0.1";
$cd_port = 3306;
$cd_socket = "";


$cd_dbname = "";
$cd_user = "";
$cd_password = "";

$mysqli = new mysqli('localhost', 'root', '', 'company') or die(mysqli_error($mysqli));



$name = '';
$address = '';
$salary = '';
$position = '';
$department = '';
$update = false;
$id = 0;

function debug_to_console($data)
{
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}

if (isset($_POST['save'])) {
    $name = $_POST['name'];
    $address = $_POST['address'];
    $salary = $_POST['salary'];
    $position = $_POST['position'];
    $department = $_POST['department'];


    $mysqli->query("INSERT INTO employees (name, address, salary, position, department) VALUES('$name', '$address', '$salary', '$position', '$department')") or die($mysqli->error);
    $_SESSION['message'] = 'Record saved!';
    $_SESSION['msg_type'] = 'success';
    header("location: index.php");
}

if (isset($_GET['delete'])) {
    $id = $_GET['delete'];

    $mysqli->query("DELETE FROM employees WHERE id=$id") or die($mysqli->error);
    $_SESSION['message'] = 'Record deleted!';
    $_SESSION['msg_type'] = 'danger';
    header("location: index.php");
}

if (isset($_GET['edit'])) {
    $id = $_GET['edit'];
    $update = true;

    $result = $mysqli->query("SELECT * FROM employees WHERE id=$id") or die($mysqli->error);


    // This means that the result exists because the length is 1
    $row = $result->fetch_array();
    $name = $row['name'];
    $address = $row['address'];
    $salary = $row['salary'];
    $position = $row['position'];
    $department = $row['department'];
}
if (isset($_POST['update'])) {
    $update = true;
    $id = $_POST['id'];


    $name = $_POST['name'];
    $address = $_POST['address'];
    $salary = $_POST['salary'];
    $position = $_POST['position'];
    $department = $_POST['department'];

    debug_to_console($id, $name, $address, $salary, $position, $department);

    $mysqli->query("UPDATE employees SET name='$name', address='$address', salary='$salary', position='$position', department='$department' WHERE id='$id'") or die($mysqli->error);
    $_SESSION['message'] = "Record updated successfully!";
    $_SESSION['msg_type'] = "warning";
    header("location: index.php");
}
