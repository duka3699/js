var a = prompt("Введите число 11", "0");      /*var выводит значение*/
if (a != 11){              /*этот блок требует вывести значение 11*/
	alert("Неверно")       /*alert будет работать в том случае, если будет введенно значение любое кроме 11*/
}
else{	
	document.write("Введенное значение верно.");          /*document.write будет работать в том случае, если мы ввидем значение 11*/
}