<?php

$host = "localhost";
$dbname   = "sabor_de_carne";
$username = "root";
$password = "123456";


$con = mysql_pconnect($host, $dbname, $username,$password) or trigger_error(mysql_error(),E_USER_ERROR);

?>