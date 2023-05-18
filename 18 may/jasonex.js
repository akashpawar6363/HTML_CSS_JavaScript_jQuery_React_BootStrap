let obj = {num1: 100, data: "Swaraj Kakade is Naughty"};

console.log("obj.num1=", obj.num1);
console.log("obj=", obj);

let str = JSON.stringify(obj);
console.log("str=",str);
console.log("str.num1=", str.num1);

let p = JSON.parse(str);
console.log("p.num1",p.num1);