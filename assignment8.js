function isPalindrome(str)
{ let reversedString = str.split('').reverse().join('');
return str == reversedString;  
}
let money = 'phones';
let isMoneyPalindrome = isPalindrome(money);
if(isMoneyPalindrome)
{
    console.log('${money} true');
}
else
{
    console.log('${money} false')
}
