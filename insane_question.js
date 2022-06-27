function xFunction(i, num)
{
    var tmp = "";
    for (var j = 1; j <= i; j++)
    {
        tmp += num + " ";
        num *= 2;
    }
    console.log(tmp);
}
var i = 1;
while (i <= 6)
{
    xFunction(i, 2);
    i++;
}