// Write a Program for Reverse Integer Number

let number = 234;

function IsReverse(n)
{
    let rev=0;
    let rem=0;
    let cNum=number;
    while(cNum!=0)
    {
        rem= cNum%10;             
        rev= (10*rev) + rem; 
        cNum= Math.trunc(cNum/10);
    }
    return rev;

}

console.log(IsReverse(number))