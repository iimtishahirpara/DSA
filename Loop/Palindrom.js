// if given number is palindrom than return true, otherwise false
//Palindrom Number = 121
//last digit=n%10
//remove lasst digit= n/10

let number=-121;
function istPalindrom(num)
{
    let rem=0;
    let rev=0;
    let tempNumber=num;
    if(tempNumber<0)
    {
        return false;
    }
    while(tempNumber>0)
    {
        rem= tempNumber%10;             
        rev= (10*rev) + rem; 
        tempNumber= Math.trunc(tempNumber/10);
    }
    if(rev==num)
    {
        return true;
    }
    else
    {
         return false;
    }
}

console.log(istPalindrom(number))