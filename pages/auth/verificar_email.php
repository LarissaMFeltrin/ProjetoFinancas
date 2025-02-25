<?php
/*
include('../../config/config.php');

session_start();
if (isset($_SESSION['id'])) {
    header("Location:../../pages/auth/login.php");
}



*/
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar</title>

    <link rel="stylesheet" type="text/css" href="../../styles/models/global.css">
    <link rel="stylesheet" type="text/css" href="../../styles/models/buttons.css">
    <link rel="stylesheet" type="text/css" href="../../styles/models/errors.css">
    <link rel="stylesheet" type="text/css" href="../../styles/models/animation.css">
    <link rel="stylesheet" type="text/css" href="../../styles/verificar_email/verificar_email.css">


    <!--GoogleFontes-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lobster&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <!--Box Icons-->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <!--Jquery-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"
        integrity="sha512-pHVGpX7F/27yZ0ISY+VVjyULApbDlD0/X0rgGbTqCE7WFW5MezNTWG/dnhtbBuICzsd0WQPgpE4REBLv+UqChw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</head>

<body>
    <div class="content">

        <div class="box-verificar_email">

            <div class="step step-1 show">
                <h1>Verificar e-mail</h1>
                <p>Insira a baixo o código de verificação que você recebeu em seu e-mail.</p>
                <input type="text" id="codigo_input" onkeyup="validarCodigo(this.value);">
                <p>Não recebeu o código? <button onclick="reenviarEmail(this);">Clique aqui para reenviar</button>
                </p>
            </div>

            <div class="step step-2 ">
                <i class='bx bx-loader-alt'></i>
            </div>

            <div class="error">
                <p id="error-text"></p>
            </div>

            <div class="sucesso">
                <p id="sucesso-txt"></p>
            </div>

        </div>
    </div>


    <script src="../../scripts/verificar_email/verificar_email.js"></script>

</body>

</html>