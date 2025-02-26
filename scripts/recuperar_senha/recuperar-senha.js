var button = document.querySelector('.default-button'); // Seleciona o botão
var loading = document.querySelector('.step-2'); // Ícone de carregamento
var step1 = document.querySelector('.step-1'); // Primeira etapa
var sucessobox = document.querySelector('.sucesso');
var sucessotext = document.getElementById('sucesso-txt');
var errorbox = document.querySelector('.error');
var errortext = document.getElementById('error-text');

function validarEmail(email) {
    var estrutura_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return estrutura_email.test(email);
}

function enviarEmailRecuperacao() {
    var email = document.getElementById('email').value;
    // Esconder botão e mostrar o carregamento
    button.style.display = 'none';
    loading.style.display = 'flex';

    if (email != "" && validarEmail(email) === true) {
        $.ajax({
            url: '../../requests/recuperar_senha/post_recuperar_senha.php',
            type: 'post',
            dataType: 'json',
            data: { email: email },
            success: function (response) {
                loading.style.display = 'none'; // Ocultar carregamento

                if (response == 'E-mail enviado!') {
                    sucessobox.style.display = 'flex';
                    sucessotext.innerHTML = "<i class='bx bx-mail-send'></i> " + response.mensagem;
                } else {
                    errorbox.style.display = 'flex';
                    errortext.innerHTML = "<i class='bx bx-error-circle'></i> " + response.mensagem;
                    button.style.display = 'block'; // Reexibir botão se houver erro
                }
            },
            error: function (erro) {
                console.log(erro);
                loading.style.display = 'none';
                errorbox.style.display = 'flex';
                errortext.innerHTML = "<i class='bx bx-error-circle'></i> Erro ao processar a requisição.";
                button.style.display = 'block'; // Reexibir botão se houver erro
            }
        });
    } else {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i>E-mail inválido!";
    }
}


/*Alterar senha */


function validarSenha(senha) {
    // var estrutura_senha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,24}$/;
    var estrutura_senha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{5,24}$/;
    return estrutura_senha.test(senha);
}

function alterarSenha(button) {
    var get_code = document.getElementById('get_code').value;
    var senha = document.getElementById('senha').value;
    var confirmarsenha = document.getElementById('confirmarSenha').value;

    var senha_input = document.getElementById('senha');
    var confirmarsenha_input = document.getElementById('confirmarSenha');
    var txt = document.querySelector('.step-1 p');


    if (validarSenha(senha) === true) {
        if (confirmarsenha === senha) {
            $.ajax({
                url: '../../requests/recuperar_senha/post_alterar_senha.php',
                type: 'post',
                dataType: 'json',
                data: {
                    code: get_code,
                    senha: senha
                },
                success: function (response) {
                    if (response.mensagem === 'Senha alterada') {  // Corrigido para acessar `response.mensagem`
                        sucessobox.style.display = 'flex';
                        sucessotext.innerHTML = "<i class='bx bx-mail-send'></i> " + response.mensagem;

                        senha_input.style.display = 'none';
                        confirmarsenha_input.style.display = 'none';
                        button.style.display = 'none';
                        txt.innerHTML = 'Você será redirecionado para o login...';

                        setTimeout(function () {
                            window.location.href = 'login.php';
                        }, 2000);
                    } else {
                        errorbox.style.display = 'flex';
                        errortext.innerHTML = "<i class='bx bx-error-circle'></i> " + response.mensagem;
                    }
                },
                error: function (erro) {
                    console.log(erro);
                    if (loading) {
                        loading.style.display = 'none';
                    }
                    errorbox.style.display = 'flex';
                    errortext.innerHTML = "<i class='bx bx-error-circle'></i> Erro ao processar a requisição.";
                }
            });
        } else {
            errorbox.style.display = 'flex';
            errortext.innerHTML = "<i class='bx bx-error-circle'></i> As senhas não coincidem."; // Correção da palavra
        }
    } else {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i> A senha deve ter de 8 a 24 caracteres e incluir pelo menos uma letra maiúscula, um número e um caractere especial (!, @, etc.).";
    }
}


function mostrarSenha(checkbok) {
    var senha_input = document.getElementById('senha');

    if (checkbok.checked) {
        senha_input.type = 'text';
    }else{
        senha_input.type = 'password';

    }

}