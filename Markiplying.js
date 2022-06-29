/*Question 6: Multiplication table program
function printTable()
{
    for (var i = 1; i <= 12; i++)
    {
        var total;
        total = i * 5;
        console.log(total);
    }
}

printTable();*/

//Question 7: Prize Money
/*var input = require('readline-sync');

function printPrize(Prize)
{
    console.log("Your prize money is: $" + Prize);
}

function getInput(callback)
{
    var Rank = input.questionInt("Please key in your rank here: ");
    callback(Rank);
}

getInput(printPrize);*/

//Question 8: Display bigger number
var input = require('readline-sync');

function getInput(callback)
{
    var num1 = input.questionInt("Please enter 1st integer: ");
    var num2 = input.questionInt("Please enter 2nd integer: ");
    callback(num1, num2);
}

function findMax(num1, num2)
{
    if (num1 == num2)
    {
        console.log("The 2 numbers are equal");
    }

    else if (num2 > num1)
    {
        console.log("2nd number is bigger");
    }

    else if (num2 < num1)
    {
        console.log("1st number is bigger");
    }
}

getInput(findMax);