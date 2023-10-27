function reverseString(valueString)
{
    return valueString.split("").reverse().join("")
}
let realString = "What's popping nigga"
let reversedString = reverseString(realString)
console.log(reversedString)