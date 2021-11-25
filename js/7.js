var value = "2";
switch (value) { /*проверка переменной*/
	case "1":
	case "2":
	case "3":
	document.write("Hello"); /*переменная равна 2, значит выводиться это значение*/
	break;
	case "4":
	case "5":
	document.write("World");
	default:
	document.write("Error");
}