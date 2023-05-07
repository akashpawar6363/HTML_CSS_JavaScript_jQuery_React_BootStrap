function doMaths(choice)
{
    function doSquare(x)
    {
        return x*x
    }
    function doCube(a,b)
    {
        let p = Math.pow(a,b)
        return p
    }
    if (choice==1)
        return doSquare
    else if(choice===2)
        return doCube
}

let v = doMaths(1)
let s = v(13)
console.log(s)

let a = doMaths(2)
let b = a(2,3)
console.log(b)