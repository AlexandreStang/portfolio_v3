<?php 
$name = $_POST['visitor_name'];
$email = $_POST['visitor_email'];
$message = $_POST['visitor_message'];
$formcontent="De: $name \n Message: $message";
$recipient = "alexandre.stang.web@gmail.com";
$subject = "Portfolio Form";
$mailheader = "From: $email \r\n";
$confirm = "Merci de votre message! Je reviendrai à vous dans les plus brefs délais!";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<script>alert('$confirm');
    window.location.href = 'http://alexandrestang.com/';
    </script>"
?>