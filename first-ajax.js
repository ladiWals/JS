params = "url = news.com"

// Создаю объект XMLHttpRequest
request = new asuncRequest()

request.open("POST", "first-ajax.php", true)
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
request.setRequestHeader("Content-length", params.length)
request.setRequestHeader("Connection", "close")

request.onreadystatechange = function()
{
	if(this.readyState == 4)
	{
		if(this.status == 200)
		{
			if(this.responseText != null)
			{
				document.getElementById('info').innerHTML = this.responseText
			}
			else alert("Ошибка обмена данными: данные не получены")
		}
		else alert("Ошибка обмена данными: " + this.statusText)
	}
}

request.send(params)

// Создаёт объект XMLHttpRequest (кросс-браузерно)
function asuncRequest()
{
	try
	{
		var request = new XMLHttpRequest()
	}
	catch(e1)
	{
		try
		{
			request = new ActiveXObject("Msxml2.XMLHTTP")
		}
		catch(e2)
		{
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