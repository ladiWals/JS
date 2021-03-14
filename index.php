<?php
$list = scandir(__DIR__);
$htmlList = [];

// Выборка файлов с расширением html
foreach ($list as $item) {
	if (preg_match('/.html/', $item)) {
		$htmlList[] = $item;
	}
}

?>
<!DOCTYPE html>
<html>

<head>
	<title>JavaScript</title>
	<link rel="stylesheet" href="/styles.css">
	<link rel="SHORTCUT ICON" href="/favicon.ico">
</head>

<body>
    <ul>
    	<?php foreach($htmlList as $item) { ?>
	    	<li><a href="/<?=$item?>"><?=str_replace('.html', '', $item)?></a></li>
	    <?php } ?>
    </ul>
</body>

</html>