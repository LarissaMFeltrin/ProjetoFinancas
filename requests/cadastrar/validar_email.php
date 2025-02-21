<?php

include('../../config/config.php');

$email = $_POST['email'];
$response = '';


$sql = mysqli_query($mysqli, "SELECT email FROM usuarios  WHERE email = '$email'");

if ($sql->num_rows > 0) {
    $response = 'E-mail já cadastrado';
} else {
    $response = "";
}

echo $response;

?>