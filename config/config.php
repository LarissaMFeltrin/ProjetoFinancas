<?php

$dbHost ='localhost'; /*URL do servidor */
$dbUserName = 'root';
$dbSenha = '';
$dbName ='curso-website';

$mysqli = new mysqli($dbHost, $dbUserName, $dbSenha, $dbName);

if($mysqli->connect_error){
    die("Falha na conexão: " . $mysqli->connect_error);
}


?>