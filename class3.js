function printPattern()
{
    let number = 1;
    for (let i = 1; i <=5; i++)
    {
        if(number %2 ==0)
        {
            console.log(number + ",");
        }
        else
        {
            console.log(number + "\n");
        }
    }
    return;
}