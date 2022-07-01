var input = require("readline-sync");
var num = readInput();
var number, i, pattern;

var pat = choosePattern();
switch(pat) 
{
    case 1:
        printPattern1(number);
        break;
    case 2:
        printPattern2(number);
        break;
    case 3:
        printPattern3(number);
        break;
    case 4:
        console.log("Exiting...");
        break;
    default:
        console.log("Please enter a valid input.");
        break;
}    

function readInput() 
{ 
    return number = input.questionInt("Enter the number of rows: ");
}

function choosePattern()
{ 
    var Selection = 0;
    while (Selection > 0)
    {
        console.log("1. Print Pattern 1");
        console.log("2. Print Pattern 2");
        console.log("3. Print Pattern 3");
        console.log("4. Exit");
        return Selection = input.questionInt("> ");
    }
}

function printPattern1(n)
{ 
    var space = ""
    for (var i = 0; i < n; i++)
    {
        for (var j = 0; j < n; j++)
        {
            space = space + " ";
        }
    }
    console.log(space);
}

function printPattern2(n)
{ 
    var space = ""
    for (var i = 0; i < n; i++)
    {
        for (var j = 0; j < n; j++)
        {
            space = space + " ";
        }
    }
    console.log(space);
}

function printPattern3(n)
{
    var space = ""
    for (var i = 0; i < n; i++)
    {
        for (var j = 0; j < n; j++)
        {
            space = space + " ";
        }
    }
    console.log(space);
}

number = readInput(i);
switch (choosePattern(pat))
{
    case 1:
        printPattern1(i);
        break;
    case 2:
        printPattern2(i);
        break;
    case 3:
        printPattern3(i);
        break;
    case 4:
        console.log("Shutting Down...");
        break;
    default:
        console.log("Invalid input!");
}