//Find Second Largest Number in Array

//Num[i]!= LargeNum --> if largest value are same 2 times like 90

const Num=[89,89,22,50,78,80,90,90];

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
        else if(SecondLarg < Num[i]  && Num[i]!= LargeNum)
        {
            SecondLarg= Num[i];
        }
    }
    return SecondLarg;
}

console.log(SecondLargest(Num));