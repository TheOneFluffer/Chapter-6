//Question 4: Write and execute a function called 'higher' that takes in 2 numbers and return the higher number.
function higher(num1, num2)
{
    if (num1 >= num2)
    {
        console.log("Number " + num1 + " is bigger than " + num2);
    }

    else
    {
        console.log("Number " + num2 + " is bigger than " + num1);
    }
}

higher(10, 20);

//Question 5: Write a function called 'moreThan10' that takes in an array as a parameter and return all the numbers greater than 10 in a new array.

/*function moreThan10(numArray)
{
    if (numArray > 10)
    {
        console.log(Math.max(numArray));
    }
}

var numArray = [10, 5, 3, 7, 12, 15];
moreThan10(numArray);*/