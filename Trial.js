/*
function cal_Value(v, w) {
    switch (v) {
        case 1: w += v;

        case 2: w -= v;
            break;
    }
    console.log('Value of w is ' + w);
}

cal_Value(1, 2);

var input = require('readline-sync');
var num1 = input.questionInt("Please enter 1st integer: ");
var num2 = input.questionInt("Please enter 2nd integer: ");
var First = "";
var Second = "";

function getInput(s)
{
    First = num1 + " ";
    Second = num2 + " ";
    callback(First, Second);
}

function findMax(First, Second)
{
    if (First == Second)
    {
        console.log("The 2 numbers are equal");
    }

    else if (Second > First)
    {
        console.log("2nd number is bigger");
    }

    else if (Second < First)
    {
        console.log("1st number is bigger");
    }
}

getInput(findMax);*/

var num1 = 10
var num2 = 35;
var x = 5;
var space = "";
for (num1; num1 <= num2; num1 += x)
{
    space = num1 + " ";
    process.stdout.write(space);
}

function allMultiple(num1, num2, x)
{
    for (num1; num1 <= num2; num1 += x)
    {
        space = num1 + " ";
        process.stdout.write(space);
    }
}

allMultiple(10, 35, 5);