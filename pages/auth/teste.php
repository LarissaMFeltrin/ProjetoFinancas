<?php
include('../../config/config.php');

if(isset($_POST['nome']) && !empty($_POST['nome'])){
    $nome = $_POST['nome'];

    $sql = mysqli_query($mysqli, "INSERT INTO teste(nome) VALUES('$nome')");
    
    if($sql){
        echo 'Nome cadastrado!';
    }else{
        echo 'Erro ao cadastrar nome';
    }
}


?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>teste</title>
</head>

<body>
    <form action="teste.php" method="post">
        <input type="text" name="nome">
        <button type="submit">Enviar</button>
    </form>
</body>

</html>