// *
// **
// ***
// ****
// *****

let n=4

for(let i=0;i<=n;i++)
{
    let row="";
    for(let j=0;j<=i;j++)
    {
          row=row+"*";
    }
    console.log(row);
}

// *****
// ****
// ***
// **
// *
let num=4

for(let i=num;i>=0;i--)
{
    let row="";
    for(let j=0;j<=i;j++)
    {
          row=row+"*";
    }
    console.log(row);
}


//     *
//    **
//   ***
//  ****
// *****

let no=5
//main loop for row
for(let i=0;i<no;i++)
{
    
    let row="";
    //Loop for space
    for(let j=0;j<no-(i+1);j++)
    {
        row=row+" ";
    } 
    //Loop for print star
    for(let k=0;k<=i;k++)
    {
         row=row+"*";
    }
  
    console.log(row);

}