function allMultiple(num1, num2, x) 
{
	var space = "";
	if (num2 >= num1) 
	{
		for (num2; num2 >= num1; num1 += x) 
		{
			space = num1 + " ";
			process.stdout.write(space);
		}
	}
}

allMultiple(10, 35, 5);