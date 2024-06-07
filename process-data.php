<?php

include "./mailer/send_data.php";

if (isset($_POST["Anzahl-Personen"])) {

    if (sendInformation($_POST)) {
        header("location:./catering.php?success");
    } else {
        header("location:./catering.php?error");
    }
}

if (isset($_POST["Anzahl-Personen-2"])) {

    $newData["Anzahl-Personen"] = $_POST["Anzahl-Personen-2"];
    $newData["Email-Adresse"] = $_POST["Email-Adresse-4"];
    $newData["Name"] = $_POST["Name-2"];
    $newData["Event-Ort"] = $_POST["Event-Ort-2"];

    if (sendInformation($newData)) {
        header("location:./catering.php?success");
    } else {
        header("location:./catering.php?error");
    }
}
