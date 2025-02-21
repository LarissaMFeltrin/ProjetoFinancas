<?php

$dbHost ='127.0.0.1'; /*URL do servidor */
$dbUserName = 'root';
$dbSenha ='';
$dbName ='curso-website';

$mysqli = new mysqli($dbHost, $dbUserName, $dbSenha, $dbName);

if($mysqli->connect_error){
    die("Falha na conexão: " . $mysqli->error);
}


?>