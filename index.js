class person {
    name="safrin";
    age=20;
    greet(){
        return ("Hello, my name is "+this.name+" and I am "+this.age+"years old.");   
    }
}
let person1= new person('safrin',20);
console.log("Name:"+person1.name);
console.log("Age:"+person1.age);
let greeting=person1.greet();
console.log(greeting);


