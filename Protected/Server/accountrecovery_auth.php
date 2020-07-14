<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $message = [];
    function sanitize($data)
    {
        $data = htmlspecialchars($data);
        $data = htmlentities($data, ENT_QUOTES, "utf-8");
        $data = strip_tags($data);
        $data = trim($data);
        $data = stripslashes($data);
        return $data;
    }
    $email = sanitize($_POST["email"]);

    if (empty($email)) {
        array_push($message, array("flag" => 0, "error" => "Enter your email address"));
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($message, array("flag" => 0, "error" => "Invalid email address"));
    } else {
        array_push($message, ["flag" => 1, "success" => "Password recovery attempt successful. A link has successfully been sent to your 
            email address. Follow the prompt to reset your password and access your account. Link expires in 5 minutes"]);
        //db stuff
        //Store email data in a tmp database awaiting verification
        //Send link via email to user set expiry period for link
        //md5()
    }
    foreach ($message as $message_data) {
        echo json_encode($message_data);
    }
} else {
    die("Unauthorized access");
}
