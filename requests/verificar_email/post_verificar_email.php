<?php
include('../../config/config.php');

session_start();
if(isset($_SESSION['id'])){
    $response = '';
    $codigo_verificacao = $_POST['codigo'];
    $usuario_id = $_SESSION['id'];

    $sql = mysqli_query($mysqli, "SELECT codigo_verificacao FROM usuarios WHERE usuario_id = '$usuario_id'");

    if($sql->num_rows > 0){
        $row = $sql->fetch_assoc();
        $codigo_bd = $row['codigo_verificacao'];
        
        if($codigo_verificacao == $codigo_bd){
            $verificar = mysqli_query($mysqli, "UPDATE usuarios SET verificado = 1 WHERE usuario_id = '$usuario_id'");
            if($verificar){
                $response = 'Conta verificada!';
            } else {
                $response = 'Falha ao verificar!';
            }
        } else {
            $response = 'Código incorreto!';
        }
    } else {
        $response = 'Nenhuma informação encontrada!';
    }
    
    // Retorna um JSON válido
    echo json_encode(["mensagem" => $response]);
}
?>