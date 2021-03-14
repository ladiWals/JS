<?php

// Заношу всё содрежимое директории в массив
$list = scandir(__DIR__);

// Список директорий, которые буду игнорировать (не являются подпроектами)
$ignore = [
	'.', 
	'..',
	'.git'
];	
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
		<?php 
		foreach ($list as $item) {
			if (!in_array($item, $ignore) && is_dir($item)) {
			?>
			<li><a href="/<?=$item . '/' . $item . '.html'?>"><?=$item?></a></li>
		<?php } }?>
	</ul>
</body>

</html>