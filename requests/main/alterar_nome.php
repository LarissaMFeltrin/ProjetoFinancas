<?php

include('../../config/config.php');

session_start();
if (isset($_SESSION['id'])) {
    $usuario_id = $_SESSION['id'];
    $response = '';
    $nome = $_POST['nome'];

    $sqlUpdate = mysqli_query($mysqli, "UPDATE usuarios SET nome = '$nome' WHERE usuario_id = '$usuario_id'");
    if($sqlUpdate){
        $response = 'Nome alterado com sucesso!';
    }else{
        $response = 'Falha na alteração';
    }
}

//echo json_encode($response, true);
echo json_encode(["mensagem" =>$response]);



?>