<?php
require_once("vendor/autoload.php");

use GuzzleHttp\Client;

$emojis = json_decode(file_get_contents("emojis.json"));
$guzzle = new Client();
foreach($emojis as $emoji) {
	$newName = substr($emoji->name, 1, -1);
	$guzzle->get($emoji->url, ["sink" => "$newName.png"]);
}
