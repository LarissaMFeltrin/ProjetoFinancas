<?php
include('../../config/config.php');

session_start();
if (isset($_SESSION['id'])) {
    $usuario_id = $_SESSION['id'];
    $response = '';

    $sql = mysqli_query($mysqli, "SELECT * FROM usuarios WHERE usuario_id = '$usuario_id'");

    if ($sql->num_rows > 0) {
        $row = $sql->fetch_assoc();
        $nome = $row['nome'];
        $sobrenome = $row['sobrenome'];
        $email = $row['email'];

        $data = array(
            'nome' => $nome,
            'sobrenome' => $sobrenome,
            'email' => $email
        );

        header('Content-type: application/json');
        $response = json_encode($data);
    }
    echo $response;
}


?>