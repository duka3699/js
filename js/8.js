var voronCount = prompt("Введите число"); 
switch (voronCount) /*проверка переменной*/
{
	case "1" : /*если введенно это значение*/
		alert("На ветке сидит 1 ворона"); /*выводиться на экран это*/
	break; /*останавливается чтобы не вывелись остальные значения*/
	case "2":
	case "3":
	case "4":
		console.log(voronCount);
		alert("На ветке сидит "+ voronCount + " вороны");
	break;
	case "5" :
	case "6" :
	case "7" :
	case "8" :
	case "9" :
	case "10" :
		console.log(voronCount);
		alert("На ветке сидит "+ voronCount + " ворон");
	break;
	default:
			alert("Вы ввели значение, отличное от 1 или 10");
}