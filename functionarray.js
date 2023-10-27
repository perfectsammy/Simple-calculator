function findSecondLowestAndGreatest(array)
{
    if (array.length < 2 )
    {
        return " array should have atleast 2 numbers"
    }
    array.sort(function(a,b)
    {
        return a - b
    });
    var secondLowestNumber = array[1];
    var secondGreatestNumber = array[array.length-2];
    return {
        secondLowestNumber: secondLowestNumber,
        secondGreatestNumber: secondGreatestNumber
    }
}
let numbers = [2,6,14,7,9]
let result =  findSecondLowestAndGreatest(numbers)
console.log(result)
