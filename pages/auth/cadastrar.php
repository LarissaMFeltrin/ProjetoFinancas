<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar</title>

    <link rel="stylesheet" type="text/css" href="../../styles/models/global.css">
    <link rel="stylesheet" type="text/css" href="../../styles/models/buttons.css">
    <link rel="stylesheet" type="text/css" href="../../styles/models/errors.css">
    <link rel="stylesheet" type="text/css" href="../../styles/cadastrar/cadastrar.css">
    <link rel="stylesheet" type="text/css" href="../../styles/models/animation.css">

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

        <div class="box-cadastro box-cadastrar">
            <div class="erro">
                <p id="erro-txt"></p>
            </div>

            <!--<div id="successAlert" class="alert-success">
                <span>Cadastro concluído com sucesso!</span>
            </div>-->

            <div class="step step-1 show">
                <input type="text" placeholder="Insira seu Nome" id="nome" maxlength="20">
                <input type="text" placeholder="Insira seu Sobrenome" id="sobrenome" maxlength="60">
                <input type="text" placeholder="Insira seu CPF" id="cpf" oninput="mascara(this)"
                    onkeyup="verificarExistenciaCPF(this.value)">

                <!--Sempre colocar CPF como text pois as vezes o sistema pode desconsiderar o que começa com zero a esquerda-->
                <div class="termos-uso">
                    <input type="checkbox" id="check-termos">
                    <label for="check-termos">Eu concordo com os <a href="#">termos de uso</a> e <a href="#">políticas
                            de privacidade</a>.</label>
                </div>
            </div>

            <div class="step step-2  ">
                <input type="email" placeholder="Insira seu Email" id="email"
                    onkeyup="verificarExistenciaEmail(this.value)">
                <input type="text" placeholder="Insira seu Celular" id="celular"
                    onkeyup="verificarExistenciaCelular(this.value)">
                <input type="password" placeholder="Senha" id="senha">
                <input type="password" placeholder="Confirmar Senha" id="confirmarsenha">
            </div>

            <div class="step step-3 ">
                <label for="">Insira sua data de nascimento</label>
                <div class="group-data-nascimento">
                    <input type="number" placeholder="Dia" id="dia">
                    <input type="number" placeholder="Mês" id="mes">
                    <input type="number" placeholder="Ano" id="ano">
                </div>

                <label for="">Selecione seu gênero</label>
                <!--Quando usa o "radio" o usuário só a opção de selecionar somente um.-->
                <div class="group-gender">
                    <label for="feminino-radio" id="feminino-label"><i class='bx bx-female-sign'></i></label>
                    <input type="radio" id="feminino-radio" name="genero" value="feminino" hidden>

                    <label for="masculino-radio" id="masculino-label"><i class='bx bx-male-sign'></i></label>
                    <input type="radio" id="masculino-radio" name="genero" value="masculino" hidden>

                    <label for="outros-radio" id="outros-label"><i class='bx bx-radio-circle'></i></label>
                    <input type="radio" id="outros-radio" name="genero" valur="outros" hidden>
                </div>
            </div>

            <div class="step step-4 ">
                <i class='bx bx-loader-alt'></i>
            </div>

            <div class="step step-5 ">
                <h1>Cadastro Concluido!</h1>
                <p>Seu Cadastro foi realizado com sucesso.</p>
                <a href="login.php">Clique para fazer login</a>
            </div>

            <div class="buttons-group">
                <button id="bt-voltar"><i class='bx bx-chevron-left-circle'></i></button>
                <button id="bt-cadastrar"><i class='bx bx-check-circle'></i></button>
                <button id="bt-avancar"><i class='bx bx-chevron-right-circle'></i></button>
            </div>
        </div>
    </div>


    <script src="../../scripts/cadastrar/cadastrar.js"></script>
    <script src="../../scripts/cadastrar/gender-select.js"></script>

</body>

</html>