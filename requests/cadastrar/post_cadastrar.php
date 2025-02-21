<?php

include('../../config/config.php');

$usuario_id = bin2hex(random_bytes(20));
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$cpf = $_POST['cpf'];
$termos = 1;
$email = $_POST['email'];
$celular = $_POST['celular'];

$dia_nascimento = $_POST['dia_nascimento'];
$mes_nascimento = $_POST['mes_nascimento'];
$ano_nascimento = $_POST['ano_nascimento'];
$data_nascimento = date("y-m-d", mktime($ano_nascimento , $mes_nascimento, $dia_nascimento));
$genero = $_POST['genero'];
$codigo_verificacao = mt_rand(100000, 999999);

$response = '';

/*Senha Criptografia*/
$senha_descrip = $_POST['senha'];
$senha =password_hash($senha_descrip, PASSWORD_DEFAULT);


$sql = mysqli_query($mysqli, "INSERT INTO usuarios(usuario_id, nome, sobrenome, cpf, termos, email, celular, senha, data_Nascimento, genero, codigo_verificacao) VALUES ('$usuario_id', '$nome', '$sobrenome', '$cpf', '$termos', '$email', '$celular', '$senha', '$data_nascimento', '$genero', '$codigo_verificacao')");

if($sql){
    $response = "Deu certo, Castrado!";
}else{
    $response = "Falha";
}

echo json_encode($response, true);

?>