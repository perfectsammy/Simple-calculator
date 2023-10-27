
function letters(a,b)
{
    function bay(x){
        return x * x
    }
    return Math.sqrt(bay(a) + bay(b))
}
let c = letters(3,7)
console.log(c)
