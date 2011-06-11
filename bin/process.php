<?php
if ((isset($_POST['name'])) && (strlen(trim($_POST['name'])) > 0)) {
	$name = stripslashes(strip_tags($_POST['name']));
} else {$name = 'No name entered';}
if ((isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0)) {
	$email = stripslashes(strip_tags($_POST['email']));
} else {$email = 'No email entered';}
if ((isset($_POST['comment'])) && (strlen(trim($_POST['comment'])) > 0)) {
	$comment = stripslashes(strip_tags($_POST['comment']));
} else {$comment = 'No phone entered';}
ob_start();
?>
<html>
<head>
</head>
<body>

<h1>Site Submission</h1>
<p><strong>Name &ndash;</strong> <?=$name;?></p>
<p><strong>Email Address &ndash;</strong> <?=$email;?></p>
<p><strong>Comment &ndash;</strong> <?=$comment;?></p>

<br/><br/>
<pre>This is an automated message</pre>

</body>
</html>
<?
$body = ob_get_contents();

require("phpmailer.php");

$mail = new PHPMailer();

$mail->From     =  $email;
$mail->FromName =  $name;
$mail->AddAddress("davidschwartz12@gmail.com","David Schwartz");

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject  =  "Site Form Submission";
$mail->Body     =  $body;
$mail->AltBody  =  "This is the text-only body";

if(!$mail->Send()) {
	$recipient = 'your_email@example.com';
	$subject = 'Contact form failed';
	$content = $body;	
  mail($recipient, $subject, $content, "From: mail@yourdomain.com\r\nReply-To: $email\r\nX-Mailer: DT_formmail");
  exit;
}
?>
