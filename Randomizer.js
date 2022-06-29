function Randomizer(end)
{
    var integer;
    integer = Math.floor(Math.random() * end);
    console.log(integer);
}

Randomizer(69);

function Randomizer2(start, end)
{
    var integer;
    integer = Math.floor(Math.random() * (end - start)) + start;
    console.log(integer);
}

Randomizer2(19, 88);