$(document).ready(function () {
    $('#codigo_input').mask('000000');
});

function validarCodigo(codigo) {
    if (codigo.length == 6) {

        $.ajax({
            url: '../../requests/verificar_email/post_verificar_email.php',
            type: 'post',
            dataType: 'json',
            data: {
                codigo: codigo
            }, success: function (response) {
                if (response.mensagem === 'Conta verificada!') {
                    window.location.href = '../../pages/main/main.php';
                } else {
                    alert(response.mensagem);
                }
            }, error: function (response) {
                var a = response;
                alert('Deu ruim!');
            }
        })
    }
}

var errorbox = document.querySelector('.error');
var errortext = document.getElementById('error-text');
var sucessobox = document.querySelector('.sucesso');
var sucessotext = document.getElementById('sucesso-txt'); //id não coloca .

var loading = document.querySelector('.step-2');

function reenviarEmail(button) {

    $.ajax({
        url: '../../requests/verificar_email/reenviar_email.php',
        type: 'post',
       dataType: 'json',
       betforeSend:function(){
        loading.style.display = 'flex';
       },
        success: function (response) {
            if (response == 'Um novo código foi enviado ao seu E-mail!') {
                loading.style.display = 'none';
                sucessobox.style.display = 'flex';
                sucessotext.innerHTML = "<i class='bx bx-mail-send'></i> " + response.mensagem;
                button.disabled = true;
                button.style.cursor = 'not-allowed';
                button.style.color = '#ccc';
                setTimeout(function () {
                    button.disabled = false;
                    button.style.cursor = 'pointer';
                    button.style.color = '#26baff';
                }, 60000);

            } else {
                errorbox.style.display = 'flex';
                errortext.innerHTML = "<i class='bx bx-error-circle'></i> " + response.mensagem;
            }
        }

    });


}


