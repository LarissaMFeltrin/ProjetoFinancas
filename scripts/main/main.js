
carregarDados();

function carregarDados() {
    $.ajax({
        url: '../../requests/main/post_main.php',
        type: 'post',
        dataType: 'json',
        success: function (response) {
            console.log(response);

            $('#boasvindas').html('Bem-Vindo ' + response.nome + ' ' + response.sobrenome + ',');
            $('#email').html(response.email);
        }

    });
}


function alterarNome(){
    var nome_input = document.getElementById('nome_input').value;

    $.ajax({
        url: '../../requests/main/alterar_nome.php',
        type: 'post',
        dataType: 'json',
        data:{
            nome:nome_input

        }, success:function(response){
            if(response == 'Nome alterado com sucesso!'){
                carregarDados();
            }
            
        }
    });
}