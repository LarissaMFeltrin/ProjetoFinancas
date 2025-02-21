<?php

include('../../config/config.php');

$cpf = $_POST['cpf'];
$response = '';

$sql = mysqli_query($mysqli, "SELECT cpf FROM usuarios WHERE cpf = '$cpf'");

if($sql->num_rows > 0){
    $response = 'CPF já utilizado';
}else{
    $response = "";
}

echo $response;

?>