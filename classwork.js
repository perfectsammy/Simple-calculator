let purchase =70;
let discount = 0;
if (purchase >= 100)
{
    discount=0.1*purchase
    console.log (`Congratulations, you got a discout of $${discount}`)
    console.log(purchase-discount)
}
else if(purchase>=50)
{
    discount=0.05*purchase
    console.log(`Congratulations, you got a discout of $${discount}`)
    console.log(purchase-discount)
}
else{
    console.log("Sorry you are not eligible for any discount")
}
