const fruit =["apple","banana","orange","mango","coconut"]
{
    console.log(fruit)
    console.log (fruit[0])
    console.log (fruit[1])
    console.log (fruit[2])
    console.log (fruit[3])
    console.log (fruit[4])
    length=fruit.length;
    console.log(length)
    console.log(fruit[fruit.length-1])
    console.log(fruit[fruit.length-2])
    console.log(fruit[fruit.length-3])
    console.log(fruit[fruit.length-4])
    console.log(fruit[fruit.length-5])
    for(var item of fruit)
    {
        console.log(item)
    }
}

let score = [5,10,15,20,25,30,35,40,45,50]
score.forEach(function(item)
{
    console.log(item);
})