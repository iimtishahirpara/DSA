// Write a function that returns the count of digits in a number

function CountDigits(n)
{
    //if number=0 then write 1
    if(n == 0)
    {
        return 1;
    }

    let count=0;
    while(n!=0)
    {
        n = Math.trunc(n/10);
        count++;
    }
    return count;
}

let number=34556;

let run=CountDigits(number);
console.log(run);