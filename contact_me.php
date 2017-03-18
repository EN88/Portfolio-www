<?php

if( empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
$to = 'e.noszczynski@gmail.com'; 
$email_subject = "EdgarNoszczynski.pl - Wiadomosc:";
$email_body = "Nowa wiadomość ze strony portfolio Gallery\n\nNick:$name\nEmail: $email_address\nWiadomosc:\n\n$message";
$headers = "From: Moje_portfolio\n"; 
	
mail($to,$email_subject,$email_body,$headers);
			
?>