let arr = [12,22,33,44,13,53,224,53,43,221]

// function callbk(x)
// {
//     console.log("here", x)
// }
// arr.forEach(callbk)

// arr.forEach((ele)=>console.log(ele))

// let sqr = arr.map((x)=>x*x)
// console.log(sqr)

// console.log(arr.map((x)=>x/10))

let arr2 = ["Akash","Nil","Ashwin","Omkar","Karan","Desai","vyankya"]

console.log(arr2.map((x)=>x.substring(0,2).toUpperCase()))
console.log(arr2.map((x)=>x.substring(0,1).toUpperCase().concat(x.substring(1).toLowerCase())))

let oddnum = arr.filter((x)=>{return x%2!=0})
console.log(oddnum)

console.log(arr2.filter((x)=>{return x.length<5}))