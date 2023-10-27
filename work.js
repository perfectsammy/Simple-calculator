 let purchase_amount= 200;
 let discount = 0;
 if (purchase_amount >= 100)
 {
    discount= 0.2*purchase_amount
    console.log(`Congratulations, you got a discout of $${discount}`)
    console.log(purchase_amount-discount)
 }
 else
 {
   console.log('You are not eligible for any dicount, buy more goods')
 }