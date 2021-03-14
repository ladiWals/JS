<?php

// Беру контент по url, полученному из POST-запроса
if(isset($_GET['url'])) {
	header('Content-type: text/xml');
	echo file_get_contents('http://' . SanitizeString($_GET['url']));
}

// Обезвреживает полученные данные из POST
function SanitizeString($var)
{
	$var = strip_tags($var);
	$var = htmlentities($var);
	$var = stripslashes($var);
	return $var;
}