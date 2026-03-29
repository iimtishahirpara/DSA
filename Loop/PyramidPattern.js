//    *
//   ***
//  *****
// *******
//*********

let num=5;

for(let i=1;i<=num;i++)
{
    let row="";
    for(let j=1;j<=num - i;j++)
    {
        row=row+" ";
    }     
    for(let k=1;k<=i*2 - 1;k++)
    {
        row=row+"*";
       
    }    
    console.log(row);
}
 

