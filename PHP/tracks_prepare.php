<?php
require_once('PHP/config.php');

$stmt = $dataBase->prepare("SELECT * FROM tracks");
$stmt->execute();

// Fetch all data from query result
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);


$_SESSION['tracks'] = $data;

// Close database connection
$dataBase = null;

?>