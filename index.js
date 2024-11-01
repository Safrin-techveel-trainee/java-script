let a=20;
let b=4;

console.log("Addition:",a+b);
console.log("Subtraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Division:",a/b);
console.log("Modulus:",a%b);


let c=5;

console.log("c+=3:",c+=3);
console.log("c-=2:",c-=2);
console.log("c*=4:",c*=4);
console.log("c/=2:",c/=2);
console.log("c%=5:",c%=5);

//Array
let arr=[1,2,3,4];
arr.push(5)
console.log("Push:",arr);
arr.pop()
console.log("Pop:",arr);
arr.shift()
console.log("Shift:",arr);
arr.unshift(1)
console.log("Unshift:",arr);

//string
let str="Hello,JavaScript!";
let substring="JavaScript";

console.log("Uppercase:",str.toUpperCase());
console.log("Lowercase:",str.toLowerCase());
console.log("Includes substring:",str.includes(substring));

let str1="JavaScript is awesome!";
let char="a";
let start=4;
let end=10;

console.log("First occurrence of 'a':",str1.charAt(1));
console.log("Substring from index 4 to 10:",str1.slice(start,end));

//ternary
let x=10;
console.log(x<0?"negative":"positive");

let y=0;
console.log(y==0?"zero":"valid values");

let z=50;
let v=(z<=10)?"small":(z<=100)?"medium":"large";
console.log(v);


//Add,Sub,Multiply,Division

let operation="Add";    //Add
let num1=30;
let num2=10;
let num=num1+num2;
console.log("The result is:",num);

let operat="Sub";  //sub
let n=num1-num2;
console.log("The result is:",n)

let operate="Multiply";  //multiply
let g=num1*num2;
console.log("The result is:",g)

let opera="Divide";    //divide
let h=num1/num2;
console.log("The result is:",h)







