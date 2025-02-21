
var step1 = document.querySelector('.box-cadastrar .step-1');
var step2 = document.querySelector('.box-cadastrar .step-2');
var step3 = document.querySelector('.box-cadastrar .step-3');
var step4 = document.querySelector('.box-cadastrar .step-4');
var step5 = document.querySelector('.box-cadastrar .step-5');

var botaoAvancar = document.getElementById('bt-avancar');
var botaoVoltar = document.getElementById('bt-voltar');
var botaoCadastrar = document.getElementById('bt-cadastrar');
var cpfVerificacao;
var emailVerificacao;
var celularVerificacao;

function mascara(i) {
    var valorCPF = i.value;
    if (isNaN(valorCPF[valorCPF.length - 1])) {
        i.value = valorCPF.substring(0, valorCPF.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (valorCPF.length == 3 || valorCPF.length == 7) i.value += ".";
    if (valorCPF.length == 11) i.value += "-";
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length != 11 || !/^\d{11}$/.test(cpf)) {
        return false;
    }
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto == 10 || resto == 11 ? 0 : resto;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto == 10 || resto == 11 ? 0 : resto;
    return parseInt(cpf.charAt(9)) == digito1 && parseInt(cpf.charAt(10)) == digito2;
}

function validarEmail(email) {
    var estrutura_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return estrutura_email.test(email);
}

/*Jquery*/
$(document).ready(function () {
    $('#celular').mask('(00) 00000-0000');
});


/*Validar senha*/
function validarSenha(senha) {
    // var estrutura_senha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,24}$/;
    var estrutura_senha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{5,24}$/;
    return estrutura_senha.test(senha);
}

var errorbox = document.querySelector('.erro');
var errortext = document.querySelector('#erro-txt');

function avancar1() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var cpf = document.getElementById('cpf').value;
    var checkbox = document.getElementById('check-termos');

    if (nome === "") {
        mostrarErro("Preencha o nome!");
        return;
    }

    if (sobrenome === "") {
        mostrarErro("Preencha o sobrenome!");
        return;
    }

    if (cpf === "" || !validarCPF(cpf) || cpfVerificacao !== 'Disponivel') {
        mostrarErro("Preencha um CPF válido!");
        return;
    }

    if (!checkbox.checked) {
        mostrarErro("Você precisa concordar com os termos e políticas de privacidade!");
        return;
    }

    // Se passou por todas as verificações, avança para o próximo passo
    step1.classList.remove('show');
    step2.classList.add('show');
    botaoVoltar.style.visibility = 'visible';
    errorbox.style.display = 'none';
    errortext.innerHTML = "";
}

// Função auxiliar para exibir erros
function mostrarErro(mensagem) {
    errorbox.style.display = 'flex';
    errortext.innerHTML = `<i class='bx bx-error-circle'></i> ${mensagem}`;
}


/*Validar idade dia-mes-ano */
function validarIdade() {
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var ano = document.getElementById('ano').value;

    var dataNascimento = new Date(ano, mes - 1, dia);
    var hoje = new Date();

    var diferencaAnos = hoje.getFullYear() - dataNascimento.getFullYear();
    if (hoje.getMonth() < dataNascimento.getMonth() || (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate())) {
        diferencaAnos--;
    }
    if (diferencaAnos > 18) {
        return true;
    } else {
        return false;
    }
}

function ValidarData(dia, mes, ano) {
    if (ano >= 1900) {
        var data = new Date(ano, mes - 1, dia);

        return data.getFullYear() == ano && data.getMonth() == mes - 1 && data.getDate() == dia;
    } else {
        return false;
    }
}

/*Validar Genero*/
function validarGenero() {
    var genero = document.querySelector('input[name="genero"]:checked');
    if (genero === null) {
        return false;
    } else {
        return true;
    }
}



function avancar2() {
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarsenha').value;

    if (!validarEmail(email)) {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i> E-mail inválido!";
        return;
    }

    if (emailVerificacao !== 'Disponivel') {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i> Cadastre um e-mail que ainda não foi utilizado!";
        return;
    }

    if (!(celular.length === 14 || celular.length === 15) || celularVerificacao !== 'Disponivel') {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i> Celular inválido!";
        return;
    }

    if (!validarSenha(senha)) {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i> A senha deve ter de 8 a 24 caracteres e incluir pelo menos uma letra maiúscula, um número e um caractere especial (!, @, )";
        return;
    }

    if (confirmarSenha !== senha) {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i> As senhas não coincidem!";
        return;
    }

    // Se passou por todas as validações, avança para o próximo passo
    step2.classList.remove('show');
    step3.classList.add('show');
    botaoCadastrar.style.visibility = 'visible';
    botaoAvancar.style.visibility = 'hidden';
    errorbox.style.display = 'none';
    errortext.innerHTML = "";

}


function cadastrar() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var senha = document.getElementById('senha').value;
    var dia = parseInt(document.getElementById('dia')?.value);
    var mes = parseInt(document.getElementById('mes')?.value);
    var ano = parseInt(document.getElementById('ano')?.value);
    var genero = document.querySelector('input[name="genero"]:checked').value;

    $.ajax({
        url: '../../requests/cadastrar/post_cadastrar.php',
        type: 'post',
        dataType: 'json',
        data: {
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            email: email,
            celular: celular,
            senha: senha,
            dia_nascimento: dia,
            mes_nascimento: mes,
            ano_nascimento: ano,
            genero: genero
        },
        beforeSend: function () {
            step3.classList.remove('show');
            step4.classList.add('show');
            botaoCadastrar.style.visibility = 'hidden';
            botaoAvancar.style.visibility = 'hidden';
            botaoVoltar.style.visibility = 'hidden';
        },
        success: function (response) {
            step4.classList.remove('show');
            step5.classList.add('show');
        },
        error: function (xhr, status, error) { // Correção aqui
            console.error("Erro na requisição AJAX:", status, error);
        }
    });

}

function concluir() {
    var dia = parseInt(document.getElementById('dia')?.value);
    var mes = parseInt(document.getElementById('mes')?.value);
    var ano = parseInt(document.getElementById('ano')?.value);

    if (!dia) {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i>Preencha a data de nascimento!";
        return;
    }

    if (!mes) {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i>Preencha o mês de nascimento!";
        return;
    }

    if (!ano) {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i>Preencha o ano de nascimento!";
        return;
    }

    if (!ValidarData(dia, mes, ano)) {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i>Data de nascimento inválida!";
        return;
    }

    if (!validarIdade()) {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i>Você precisa ter mais de 18 anos para se cadastrar!";
        return;
    }

    if (!validarGenero()) {
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i>Selecione um gênero!";
        return;
    }

    errorbox.style.display = 'none';
    errortext.innerHTML = "";
    cadastrar();
    //$('#successAlert').fadeIn().delay(3000).fadeOut();
}


function voltra1() {
    step2.classList.remove('show');
    step1.classList.add('show');
    botaoVoltar.style.visibility = 'hidden';
    botaoAvancar.style.visibility = 'visible';
}

function voltar2() {
    step3.classList.remove('show');
    step2.classList.add('show');
    botaoCadastrar.style.visibility = 'hidden';
    botaoAvancar.style.visibility = 'visible';
}


botaoAvancar.addEventListener('click', function () {
    if (step1.classList.contains('show')) {
        avancar1();
    } else if (step2.classList.contains('show')) {
        avancar2();
    }
});

botaoVoltar.addEventListener('click', function () {
    if (step2.classList.contains('show')) {
        voltra1();
    } else if (step3.classList.contains('show')) {
        voltar2();
    }
});

botaoCadastrar.addEventListener('click', function () {
    concluir();
});



function verificarExistenciaCPF(cpf) {

    $.ajax({
        url: '../../requests/cadastrar/validar_cpf.php',
        type: 'post',
        data: {
            cpf: cpf
        }, success: function (response) {
            if (response != "") {
                errorbox.style.display = 'flex';
                errortext.innerHTML = "<i class='bx bx-error-circle'></i>CPF já utilizado!";
                cpfVerificacao = 'Já utiliazdo!';

            } else {
                errorbox.style.display = 'none';
                cpfVerificacao = 'Disponivel';
            }
        }
    })
}


function verificarExistenciaEmail(email) {
    $.ajax({
        url: '../../requests/cadastrar/validar_email.php',
        type: 'post',
        data: {
            email: email
        }, success: function (response) {
            console.log('email ', response);

            if (response != "") {
                errorbox.style.display = 'flex';
                errortext.innerHTML = "<i class='bx bx-error-circle'></i>E-mail já utilizado!";
                emailVerificacao = 'Já utiliazdo!';

            } else {
                errorbox.style.display = 'none';
                emailVerificacao = 'Disponivel';
            }
        }
    })
}

function verificarExistenciaCelular(celular) {
    console.log('celular ', celular);
    $.ajax({
        url: '../../requests/cadastrar/validar_celular.php',
        type: 'post',
        data: {
            celular: celular
        }, success: function (response) {
            if (response != "") {
                errorbox.style.display = 'flex';
                errortext.innerHTML = "<i class='bx bx-error-circle'></i>Celular já utilizado!";
                celularVerificacao = 'Já utilizado!';
            } else {
                errorbox.style.display = 'none';
                celularVerificacao = 'Disponivel';
            }
        }
    })
} 
