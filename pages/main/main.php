<?php
include('../../config/config.php');

session_start();
if(isset($_SESSION['id'])){

    include('../../requests/verificar_email/post_validar_verificao.php');
   
}else{
    header("Location:../../pages/auth/login.php");
}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


</head>

<body>
    <h1>Você está logado!!!!</h1>

    <button id="logout_bt">Logout</button>

    <script>
    var logout_bt = document.getElementById('logout_bt');

    logout_bt.addEventListener('click', function() {
        window.location.href = '../auth/logout.php'
    });
    </script>
</body>

</html>