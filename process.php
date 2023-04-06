<?php
if (isset($_POST["email"])) {

  //email info
  $admin_email = "richard@theshymonkey.com";
  $name = $_POST["name"];
  $lastname = $_POST["lastname"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  //send email
  mail($admin_email, "Solicitud de información", $name . "-" . $lastname . "-" . $message, "From:" . $email);

  header("Location: https://theshymonkey.com/info.html");
}