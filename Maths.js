//a) A random integer between 34 and 55
/*
function RNG(start, end)
{
    end = end + 1;
    var integer = Math.floor(Math.random() * (end - start) + start);
    return integer;
}

console.log(RNG(34, 55));

//b) A random number between 5.5 (inclusive) and 55.5 (exclusive)
function RNJesus(start, end)
{
    var integer = start + (Math.random() * end);

}

console.log(RNJesus(5.5, 55.5))*/
var number;
function RandomPat(start, end)
{
    for (var i = 0; i < start; i++)
    {
        for (var j = 0; j < end; j++)
        {
            var i = Math.floor(Math.random() * 10);
            return i;
        }
    }
    console.log(i)
}

RandomPat(5, 4);