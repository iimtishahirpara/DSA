// 1
// 12
// 123
// 1234
// 12345

let n=5

for(let i=1;i<=n;i++)
{
    let row="";
    for(let j=1;j<=i;j++)
    {
          row=row+j;
    }
    console.log(row);
}

// 12345
// 1234
// 123
// 12
// 1

let num=4

for(let i=num;i>=1;i--)
{
    let row="";
    for(let j=1;j<=i;j++)
    {
          row=row+j;
    }
    console.log(row);
}


// 1
// 01
// 010
// 1010
// 10101

let no=5
let trigger="1";

for(let i=1;i<=no;i++)
{
    let row="";
    for(let j=1;j<=i;j++)
    {
          row=row+trigger;
          if(trigger=="1")
          {
             trigger="0";
          }
          else
          {
            trigger="1";
          }   
    }
    console.log(row);
}
