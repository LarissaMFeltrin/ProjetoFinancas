<?php

include('../../config/config.php');

$celular = $_POST['celular'];
$response ='';

$sql = mysqli_query($mysqli, "SELECT celular FROM usuarios  WHERE celular= '$celular'");

if($sql->num_rows > 0){
    $response = 'Celular já cadastrado';
}else{
    $response = "";
}

echo $response;
?>