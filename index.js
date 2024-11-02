//Even or Odd
let num=5;
if(num%2==0){
    console.log(num,"is Even");
}
else{
    console.log(num,"is odd");
}

// Largest of three numbers
let n1=10,n2=20,n3=30;
if(n1>n2){
    console.log("The Largest number is",n1);
}else if(n2>n3){
    console.log("The Largest number is",n2);
}else{
    console.log("The Largest number is",n3); 
}

//skip multiples of 3

 let i=1;
 while(i<=20){
    if(i%3==0){
        i++;
        continue;
    }
    console.log(i);
    i++;
 }

// for(let i=1;i<=20;i++){
//     if (i%3==0) {
//         continue;
//     }
//     console.log(i);
// }    

// print multiplication table

let number=4;
for(n=1;n<=10;n++){
    console.log(number,"*",n ,"=",number*n);  
}

//sum of natural numbers..

let limit=20;
let sum=0;
let x=1;
do{
    sum+=x;
    x++;
}while(x<=limit)
    console.log("The sum of natural numbers up to",limit,"is",sum);
    
