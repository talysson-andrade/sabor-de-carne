<?php

$host = "localhost";
$dbname   = "sabor_de_carne";
$username = "root";
$password = "123456";

if(isset($_POST['submit']))
{
include once(config.php)

$name = $_POST['nome_cliente'];
$email = $_POST['email_cliente'];
$telefone = $_POST['telefone'];
$data_da_reserva = $_POST['data_da_reserva'];
$hora_da_reserva= $_POST['hora_da_reserva'];
$observacoes= $_POST['obervacoes']; 

//query de insert 

$result mysqli_query($conexao,"INSERT INTO reservas(nome_cliente,email_cliente,telefone,data_da_reserva,hora_da_reserva,observacoes)
                               VALUES($name,$email,$telefone,$data_da_reserva,$hora_da_reserva,$observacoes)");

}

?>