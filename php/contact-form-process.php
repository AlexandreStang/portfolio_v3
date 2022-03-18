<?php 
$name = $_POST['visitor_name'];
$email = $_POST['visitor_email'];
$message = $_POST['visitor_message'];
$formcontent="De: $name \n Message: $message";
$recipient = "lealexandrestang@gmail.com";
$subject = "Portfolio Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Merci de votre message! Je reviendrai à vous dans les plus brefs délais!";
?>