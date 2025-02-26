var errorbox = document.querySelector('.erro'); // Corrigido: usando classe com '.'
var errortext = document.querySelector('#erro-txt'); // Corrigido: usando ID com '#'

function validarEmail(email) {
    var estrutura_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return estrutura_email.test(email);
}

function login() {
    var email = document.getElementById('email').value.trim(); // Removendo espaços em branco
    var senha = document.getElementById('senha').value;

    if (email === "") {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i> Preencha o e-mail!";
        return; // Sai da função se o campo estiver vazio
    }

    if (!validarEmail(email)) {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i> E-mail inválido!";
        return;
    }

    if (senha === "") {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i> Preencha a senha!";
        return; // Sai da função se a senha estiver vazia
    }
    // Se passou por todas as validações, oculta a mensagem de erro
    errorbox.style.display = 'none';

    $.ajax({
        url: '../../requests/login/post_login.php',
        type: 'post',
        dataType: 'json',
        data: {
            email: email,
            senha: senha

        }, success: function (response) {
            console.log("Resposta do servidor:", response.trim()); // Debug no console

            response = response.trim(); // Remove espaços extras

            if (response == 'Login Realizado com sucesso!') {
                window.location.href = '../main/main.php';
            } else if (response == 'E-mail ou senha incorretos') {
                errorbox.style.display = 'flex';
                errortext.innerHTML = "<i class='bx bx-error-circle'></i>E-mail ou senha incorretos";
            } else if (response == 'Não existe nenhum usuário com esse e-mail') {
                errorbox.style.display = 'flex';
                errortext.innerHTML = "<i class='bx bx-error-circle'></i>Não existe nenhum usuário com esse e-mail";
            } else if (response == 'Falha no login') {
                errorbox.style.display = 'flex';
                errortext.innerHTML = "<i class='bx bx-error-circle'></i>Falha ao fazer login! Entre em contato com suporte.";
            }

        }, error: function (response) {
            console.error("Erro na requisição:", response); // Log de erro

            errorbox.style.display = 'flex';
            errortext.innerHTML = "<i class='bx bx-error-circle'></i>Falha ao fazer login! Tente novamente mais tarde.";
        }
    })
}

function mostrarSenha(checkbok) {
    var senha_input = document.getElementById('senha');

    if (checkbok.checked) {
        senha_input.type = 'text';
    }else{
        senha_input.type = 'password';

    }

}