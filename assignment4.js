function isOdd(number)
{
    if (number%3==0)
    {
    divide = number/3
    console.log(`this is divisible by 3, your answer is ${divide}`)
    }
    else
    {
        console.log("this is not divisible by 3")
    }
}
console.log(isOdd(15))
console.log(isOdd(5))