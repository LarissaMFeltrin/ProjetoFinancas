var step1 = document.querySelector('.box-cadastrar .step-1');
var step2 = document.querySelector('.box-cadastrar .step-2');
var step3 = document.querySelector('.box-cadastrar .step-3');

var botaoAvancar = document.getElementById('bt-avancar');
var botaoVoltar = document.getElementById('bt-voltar');
var botaoCadastrar = document.getElementById('bt-cadastrar');

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

    if (nome != "") {
        if (sobrenome != "") {
            if (cpf != "" && validarCPF(cpf) === true) {
                if (checkbox.checked) {
                    step1.classList.remove('show');
                    step2.classList.add('show');
                    botaoVoltar.style.visibility = 'visible';
                    errorbox.style.display = 'none';
                    errortext.innerHTML = "";

                } else {
                    //alert('Aceite os termos de uso!');
                    errorbox.style.display = 'flex';
                    errortext.innerHTML = "<i class='bx bx-error-circle'></i>Você precisa aconcordar com os termos e plíticas de privacidade!";
                }

            } else {
                // alert('CPF inválido!');
                errorbox.style.display = 'flex';
                errortext.innerHTML = "<i class='bx bx-error-circle'></i>Preencha o CPF inválido!";
            }
        } else {
            //alert('Preencha o campo sobrenome!');
            errorbox.style.display = 'flex';
            errortext.innerHTML = "<i class='bx bx-error-circle'></i>Preencha o sobrenome!";
        }
    } else {
        //alert('Preencha o campo nome!');
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i>Preencha o nome!";
    }
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

    if (validarEmail(email) === true) {
        if (celular.length == 14 || celular.length == 15) {
            if (validarSenha(senha) === true) {
                if (confirmarSenha === senha) {
                    step2.classList.remove('show');
                    step3.classList.add('show');
                    botaoCadastrar.style.visibility = 'visible';
                    botaoAvancar.style.visibility = 'hidden';
                    errorbox.style.display = 'none';
                    errortext.innerHTML = "";
                } else {
                    //alert('As senhas não coincidem!');
                    errorbox.style.display = 'flex';
                    errortext.innerHTML = "<i class='bx bx-error-circle'></i>As senhas não coincidem!";
                }

            } else {
                //alert('Sua senha precisa conter caracter especial(!@*) letra maiúscula e número!');
                errorbox.style.display = 'flex';
                errortext.innerHTML = "<i class='bx bx-error-circle'></i>A senha deve ter de 8 a 24 caracteres e incluir pelo menos uma letra maiúscula, um número e um caractere especial (!, @, )";
            }

        } else {
            //alert('Celular inválido!');
            errorbox.style.display = 'flex';
            errortext.innerHTML = "<i class='bx bx-error-circle'></i>Celular inválido!";
        }
    } else {
        //alert('E-mail inválido!');
        errorbox.style.display = 'flex';
        errortext.innerHTML = "<i class='bx bx-error-circle'></i>E-mail inválido!";

    }

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

    step3.classList.remove('show');
    errorbox.style.display = 'none';
    errortext.innerHTML = "";
    $('#successAlert').fadeIn().delay(3000).fadeOut();
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

