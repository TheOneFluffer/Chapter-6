var input = require('readline-sync');
function readYear(str) {
    for (var i = 0; i < 2; i++)
    {
        var yr = input.questionInt("Enter " + str + " year : ");
    }
    return yr;
}

function isLeapYear(year) 
{
    return (year % 4 == 0 && year % 100 != 0 || year % 400 == 0);
}

isLeapYear(readYear);

//Invoke readYear function to take in a string to read the starting year and ending year.
var year1 = input.questionInt("Enter start year: ");
var year2 = input.questionInt("Enter end year: ");
//Validate the ending year cannot be smaller than the starting year
if (year1 < year2)
{
    console.log("End year cannot be smaller than start year!");
}

else
{
    //Use a for loop and to invoke isLeapYear function to check the years from the starting year to the ending year and display the message as shown.
    var totalYear = year2 - year1;
    for (year1; year2 > year1; year1++)
    {

    }
}