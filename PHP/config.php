<?php

    try {
        $dataBase = new PDO('mysql:host=localhost; dbname=player', 'root', '');
    }
    catch(PDOException $e) {
        die('An error occured while connecting to the database: ' . $e->getMessage());
    }

?>