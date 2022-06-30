var input = require('readline-sync');
var space = "";
function Add(start, end)
{
    var total = a + b;
    return total;
}

function BreakEven(number)
{
    return(number % 2 == 0 || number % 2 != 1);
}

var start = input.questionInt("Type in the first number: ");
var end = input.questionInt("Type in the second number: ");

if (end <= start)
{
    console.log("Second number cannot be smaller than first number!");
}

else
{
    for (var i = start; i <= end; i++)
    {
        var number = BreakEven(i);
        if (number == true)
        {
            console.log("The even numbers are: " + i);
        }
    }
}
