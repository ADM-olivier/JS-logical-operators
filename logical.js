let userLoggin = false;
let userPaid = true;
let userAdmin = true;
const buyButton =userPaid || userAdmin &&  userLoggin;
console.log(buyButton);


// 
// 
// give customer loyalSale if his 3 info matches requirments
let userScore = true;
let userHistory = true;
let userPay = false;
const loyalSale = (userScore || userPay) && userHistory;
console.log(loyalSale);
// as we see is matches requirments as: his Score and Pay ar totally TRUE, one of them should be TRUE and score is TRUE, and hisb History is also true/
// 
    userScore = 8;
    userHistory = 7;
    userPay = 8;
    const getSale = userPay+userHistory+userScore;
    const loyalitySale = getSale >= 23;
console.log(loyalitySale);
// as we see customers score in each graph was enough to get sale on our holiday offerings
// 
// now we see if you 3rd custmoer is lucky enough
    userScore = false;
    userHistory = true;
    userPay = false;
    let LoyalSale = (userScore && userPay) || !userHistory;
console.log(LoyalSale);
// as we see it didn't match,, as TRUE in History wasn't vital eventhough he had true, two false in SCORE and PAY consequence was tht our customer can't get our Sle on holiday offerings.

// 
// turn boolean into number
// in java turn boolean into number true=1 false=0, so it turned 'true' into-'1', which means 1==1, its true
let x = 1
let y = 'true'
console.log(x===y)

// turn number into Boolean
//in java turn number into boolean any number from 1 to anyother equals='true' ANY N=TRUE, ONLY 

x=11
y=-11
console.log(!y==x)

console.log('hello world')

console.log(!-4)
console.log('hi')



// turn boolean into numeber, as we see 'TRUE=1', 'FALSE =0', therefore two true=2, it equals=2
let list = false
let admin = true
let loggin = true
const BuyButton = admin&&!list&&loggin
const showbutton = true 
console.log(showbutton >= BuyButton) 


console.log('hello')



//turn boolean into number using and&& or|| operators,
console.log(10 && true)
//as we see 10 equals=true, when we turin N into boolean, therefore expression =10.
//but what happens when 10 is secong operand and true first one, again 10=true. son expression is (true&&true),
//


//true as first operand
console.log(true&&10)
// but &&and operator uses 10 as a true, but is it shows as a 10 number, because in &&opeartor if second operand isn't boolean type, 
//it will translate and use as a boolean, but it show his original type, in this case NUMBER10
//
//


//if we use false instead of true
console.log(false && 10)
//we covered  shortcircuit in expression, which means in &&andoperator, if one of them if false it equals false,
//especially if first operand is false, it didn;t care second one, directly shows false, so this expression equals false
//


//0 and true
console.log(0&&true)
//it equals 0, as we jnoe short circuit, cause 0 is turned as false, and when first operand in false we face short circuit./
// expression is used as false, but cause 0 is Number type, is didn't shows turned value, it shows original, so 0
//


//0 as second operand
console.log(true &&0)
//we didn't face short circuit, but cause 0=false in boolean, our expression is(true&&false)-which we kk=now =false, 
//expression is used as false, but cause 0 is Number type it didn;t shows us truned value, but original one.=0


//use false as second operand.
console.log(10&& false)
//no short circuit, cause fu=irst one is 10, which equals true, so first one is true, we need to know what is second operand 
//therefore short circuit didn't happen but overall second is false, therefore is equals false, as it was where second operand equled true.
//
//


//use N in both operand
console.log(15&&10)
//as we see both operand is Number type, but as wee java turns them into boolean, where false=0, but any other number +/- equals true.
//it translate both operand into boolean, but as we know if in &&operator, there isn;t boolean type,
//it uses them as a boolean, but show us as original type.in this case number type, and 10 is second operand it shows us second one, so 10 is expression/
//


//use 0 as one of them, bcs 0 equals false
console.log(0 && 10)
//we know what happens in short circuit, here 0 turns into false, and as long in short circuit in &&operator, if one operand is false,
//it didn't care another one, it shows us false,/ but because we have Number type info,
//it turns and uses them as boolean, but shows us original. here its (false&&true), first is false, we didnt care second.
//but it show 0.
//


//0 as second operand
console.log(10&&0)
// we have two Number type info, which turns into booean (true&&false), short circuit didn;t happened as false wasn't first operand/
//but second one./still true and false equals false, because of that it show false, but cause we have two Number tyoe info./
//and 0equals false, and expression equals false, it shows false. 
//
//
//here end && operator exxamples
//
//
//
///turn boolean into Number using ||OR operand.
console.log(10 || true)
//it show us 10, as its first operand, in &&and operator it showed us second operand, if second operand wasn't boolean type.
//but in or|| operator as we see is shows first operand/
//but as we know it shows us original, but uses as boolean, turin N into boolean/
//


//true as first operand
console.log(true || 10)
//and expression equals true, as we said in or|| operator it shows us first operand.
//||in or|| operator shortcircuit happens when first operand in true, unlike in &&and operator needs false as first operand./
//so as we see first one is true 
//but as we know it shows us original, but uses as boolean, turin N into boolean/(uses-true||true)
//
//


//false in or|| opertor
console.log(10 || false)
//expression show us 10, as Or|| operator shows first operand, but uses as boolean, turn 10 into true, and true or false= true
//it uses this expressioon as true, cause true is final value, but shows us 10
//
//


//false as first operand in ||or
console.log(false || 10)
//still expression equlas 10cause, it turns 10 into true, therefore (false || true)=true, it uses this expression as true./
//but as long when Number is used as boolean, it only uses not shows us, so this expression is used as true, but showd as 10


//0 and true in or|| operator
console.log(0||true)
//as we know 0=false in boolean, in or||  (fale||true) = true. therefore we get final value true.
//


//both Number type info.
//10 and 15
console.log(10||15)
// as we see expression equals 10, but both value are turned into boolean, as (true||true)= true. expression is used as true but
//its Number tyoe info, so it won't show us turned value but original, and in or|| it shows first operand,, in this cale 10
//
//


//0 as one of the operand
console.log(0 || 10)
//Number values are turned into boolean(false || true)=true as one of them are true, therefore expressioon equls true
//expression equals true, it is used as true, but as long 10 equals true, it shows us 10, cause we have Numer type, and it didn't shows us truned value, but original 
//
//


//10 as first operand
console.log(10||0)
//we know in what case happens short circuit in or|| operator, when first operand is true, and 10 into boolean= 10, so we have short circuit./
//as long we have short circuit it didnt matter second value, even if its false, cause in or|| operator if one value is true, its true./
//expression is used as true, but we know why it show us 10, original type.



//more than 2 value expressions
let useradmin = true
let userpay = false
let userloggin = false
const ShowButtonsale =  (!userpay && !userloggin) && 25
console.log(ShowButtonsale)






let maxo = 1;
let nika =24;
let luka = 6;
let lela = 28
let ilo = 13

console.log(luka && maxo) || (lela || nika  && ilo);
console.log(nika && ilo ) + luka
console.log(nika && luka)
console.log(lela || nika  && ilo)||(luka && maxo);













