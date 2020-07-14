<?php
//Perform tokenization to prevent csrf
//save external functions in a separate folder
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
        array_push($message, array("flag" => 0, "error" => "Kindly provide your email address"));
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($message, array("flag" => 0, "error" => "Invalid email address"));
    } else {
        array_push($message, ["flag" => 1, "success" => "A link has successfully been sent to your 
            email address. Click on it to verify your subscription"]);
        //db stuff
        //Store email data in a tmp database awaiting verification
    }
    foreach ($message as $message_data) {
        echo json_encode($message_data);
    }
} else {
    //Redirect user to the error page
    die("Access not allowed");
}
