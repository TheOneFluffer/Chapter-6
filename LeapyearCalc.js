var input = require('readline-sync');
var startyr, endyr, year;

function readYear(str)
{
    var yr = input.questionInt("Enter " + str + " year : ");
    return yr;
}

function isLeapYear(year)
{
    return (year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
}

startyr =  readYear("start");
endyr = readYear("end");
if (startyr > endyr)
{
    console.log("End year cannot be smaller than start year!");
}

else
{
    for (var i = startyr; i <= endyr; i++)
    {
        var leapyr = isLeapYear(i);
        if (leapyr == true)
        {
            console.log(i + " is a leap year");
        }
        else
        {
            console.log(i + " is not a leap year");
        }

    }
}