	`
	 <?php

// Беру контент по url, полученному из POST-запроса
if(isset($_POST['url'])) {
	echo file_get_contents('https://' . SanitizeString($_POST['url']));
}

// Обезвреживает полученные данные из POST
function SanitizeString($var)
{
	$var = strip_tags($var);
	$var = htmlentities($var);
	$var = stripslashes($var);
	return $var;
}