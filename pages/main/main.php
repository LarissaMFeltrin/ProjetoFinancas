<?php
include('../../config/config.php');

session_start();
if (isset($_SESSION['id'])) {

    include('../../requests/verificar_email/post_validar_verificao.php');
} else {
    header("Location:../../pages/auth/login.php");
}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!--Jquery-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</head>

<body>
    <h1>Você está logado!!!!</h1>
    <p id="boasvindas">Bem-vindo, </p>
    <p id="email"></p>
    <button id="logout_bt">Logout</button>

    <input type="text" id="nome_input">
    <button onclick="alterarNome();">Alterar</button>
    <script>
    var logout_bt = document.getElementById('logout_bt');

    logout_bt.addEventListener('click', function() {
        window.location.href = '../auth/logout.php'
    });
    </script>
    <script src="../../scripts/main/main.js"></script>
</body>

</html>