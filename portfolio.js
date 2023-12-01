var time = new Date();
	console.log(time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear());

	var dataAtual=time.getDate() + "/" + (time.getMonth()+1) + "/" + time.getFullYear();

	document.getElementById("demo").innerHTML = dataAtual;