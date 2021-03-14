params = "url=github.com/ladiWals"

// Создаю объект XMLHttpRequest
request = new asuncRequest()

// Инициализация HTTP-запроса в асинхронном режиме
request.open("POST", "first-ajax.php", true)

// Устанавливаю, что значения параметров будут переданы в виде кортежа
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

// Установка функции для вызова при изменении статуса готовности
request.onreadystatechange = function()
{

	// Если вызов завершён
	if(this.readyState == 4)
	{

		// Если статус вызова успешный
		if(this.status == 200)
		{

			// Если от сервера получен хоть какой-то текст
			if(this.responseText != null)
			{
				document.getElementById('info').innerHTML = this.responseText
			}
			else alert("Ошибка обмена данными: данные не получены")
		}
		else alert("Ошибка обмена данными: " + this.statusText)
	}
}

// Отправка запроса на сервер
request.send(params)

// Создаёт объект XMLHttpRequest (кросс-браузерно)
function asuncRequest()
{

	// Для браузеров, не относящихся к семейству IE
	try
	{
		var request = new XMLHttpRequest()
	}
	catch(e1)
	{
		// Для IE 6+
		try
		{
			request = new ActiveXObject("Msxml2.XMLHTTP")
		}
		catch(e2)
		{
			// Для IE 5
			try
			{
				request = new ActiveXObject("Microsoft.XMLHTTP")
			}
			catch(e3)
			{
				request = false
			}
		}
	}
	return request
}