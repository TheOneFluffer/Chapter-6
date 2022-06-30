function randomLoop(column, row)
{
    var gap = "";
    for (var i = 0; i < column; i++)
    {
        for (var j = 0; j < row; j++)
        {
            var Rand = Math.floor(Math.random() * 10);
            gap = gap + Rand + " ";
        }
        gap = gap + "\n";
    }
    console.log(gap);
}

randomLoop(5, 4);