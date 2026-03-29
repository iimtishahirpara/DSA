//Find Second Largest Number in Array

const Num=[20,22,50,78,80,90];

function SecondLargest(Num)
{
    let LargeNum= -Infinity;
    let SecondLarg= Infinity;

    for(let i=0;i<=Num.length;i++)
    {
        if(Num[i]>LargeNum)
        {
            SecondLarg=LargeNum;
            LargeNum= Num[i];
        }
    }
    return SecondLarg;
}

console.log(SecondLargest(Num));