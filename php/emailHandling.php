<?php
$recipient = "shellshieldsolutions@gmail.com";
$sender = $_POST['sender'];
$address = $_POST['address'];
$message = $_POST['message'];
mail($recipient, "Message from $sender via Shell Shield Solutions website", $message)
?>