function findHighestAndLowest(value)
{
    if (value.length < 2 )
    {
        return " array should have atleast 2 numbers"
    }
    value.sort(function(a,b)
    {
        return a - b
    })
    var lowestNumber = value[0];
    var greatestNumber = value[value.length-1];
    var difference = [greatestNumber-lowestNumber]
    return {
        lowestNumber: lowestNumber,
        greatestNumber: greatestNumber,
        difference:difference
    }

}
let numbers = [5,7,9,2,4,18];
let result = findHighestAndLowest(numbers)
console.log(result)
