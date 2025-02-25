<?php
include('../../config/config.php');

$email = $mysqli->real_escape_string($_POST['email']);
$senha = $mysqli->real_escape_string($_POST['senha']);

$response = '';

$sql = mysqli_query($mysqli, "SELECT * FROM usuarios WHERE email = '$email' LIMIT 1 ");

if($sql->num_rows == 1){
    $user = $sql->fetch_assoc();
    
    if(password_verify($senha,$user['senha'])){
        session_start();
        $_SESSION['id'] = $user['usuario_id'];
        $_SESSION['nome'] = $user['nome'];
        $_SESSION['sobrenome'] = $user['sobrenome'];
        $_SESSION['email'] = $user['email'];
        $_SESSION['celular'] = $user['celular'];
        $_SESSION['data_Nascimento'] = $user['data_Nascimento'];
        $_SESSION['genero'] = $user['genero'];
        $_SESSION['codigo_verificacao'] = $user['codigo_verificacao'];

        $response = 'Login Realizado com sucesso!';
        
    }else{
        $response = 'E-mail ou senha incorretos';
    }
}else if($sql->num_rows == 0){
    $response = 'Não existe nenhum usuário com esse e-mail';
}else{
    $response = 'Falha no login';
}

echo json_encode($response, true);

?>