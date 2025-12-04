<?php
// Destination Email - CHANGE IF NEEDED
$to = "j.ablaza026@gmail.com";

// Get form fields
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Email subject
$subject = "New Contact Message from $name";

// Format the email body
$body = "You received a new message from the MAXFOREXFUNDS contact form.\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

// Headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Send Email
if (mail($to, $subject, $body, $headers)) {
    header("Location: thank-you.html");
    exit();
} else {
    echo "❌ There was an error sending your message. Please try again.";
}
?>
