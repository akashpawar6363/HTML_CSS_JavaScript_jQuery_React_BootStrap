const prompt=require("prompt-sync")({sigint:true})

let x,y,result;
x= prompt("Enter x: ");
y= prompt("Enter y: ");
console.log("1.Add  2.Substract  3.Multi  4.Div");
let choice = prompt("Enter the choice: ");

switch(choice)
{
    case '1':
        result=parseInt(x)+parseInt(y);
        console.log("Addition is = ", result);
        break;
    case '2':
        result=parseInt(x)-parseInt(y);
        console.log("Substraction is = ", result);
        break;
    case '3':
        result=parseInt(x)*parseInt(y);
        console.log("multiplication is = ", result);
        break;
    case '4':
        result=parseInt(x)%parseInt(y);
        console.log("Division is = ", result);
        break;
    default:
        console.log("Invalid input");
}