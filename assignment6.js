let numbers = [11,12,5,7,3]
console.log("Second lowest and highest number in the array:");
function getSecondLowestAndHighest(numbers){
    let lowest = numbers[1];
    let highest = numbers[2];
    for (let i = 1; i<numbers.length; i++){
        if (numbers[i] < lowest)
        {
            lowest = numbers[i];
        }
        else if (numbers[i] > highest)
        {
            highest = numbers[i]
        } 
         return lowest,highest;
    }
    
}
console.log(highest,lowest)


