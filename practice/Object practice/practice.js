// 1. **Create a simple object using `{}` syntax** with two properties and print them.
let task1 = {
    id:1,
    name:"vivek g"
}

console.log( "task1",task1);


// task 2    **Use a constructor function** to create a `Person` object with `name` and `age` properties.

function Person(name,age){
    this.name = name,
    this.age = age
}

let task2 = new Person('Vivek G', 24)
console.log("task2",task2);

// task 3 . **Log `this` inside a regular function** and explain what you see in Node vs browser.


function task3(){
    console.log("task3", this)
}

task3();

// task 4  **Log `this` inside a method** inside an object and observe the output.


let task4 = {
    task41 :function(){
        console.log(this)
    }
}
console.log(task4)


// task 5    **Compare primitive and object types**: `String`, `Number`, and `Boolean` (using `typeof`).


let string1 = "vivek G"

let string2 = new String('Vivek G');

console.log(string1, typeof string1);
console.log(string2, typeof string2);


let number1 = 5;
let number2 = new Number(5);
console.log(number1, typeof number1);
console.log(number2, typeof number2);


let Boolean1 = true;
let Boolean2 = new Boolean(true);

console.log(Boolean1, typeof Boolean1);
console.log(Boolean2, typeof Boolean2
);


// task 6   **Use the `new` keyword** to create an object from a constructor function.

function Bike(model, year){
    this.model = model,
    this.year = year
}

let task6 = new Bike('KTM', 2021);
console.log("task6",task6);


// task 7  . **Create a method using the prototype** of the constructor function.


Bike.prototype.runs = function(){
    console.log(`${this.model} is ${this.year}`)
}

let task7 = new Bike('Royal enfield', 2222);

task7.runs();

// task 8  **Override a prototype method** and see how it affects different instances.



task7.runs =function(){
    console.log('woom woom')
}

task7.runs();


// task 9   **Create an array using literal and constructor syntax**, and print type and length.


let  task9 = [33,44,55,6,7,8]
let task99 = new  Array(33,44,55,6,77,889);

console.log("task9", task9, typeof task9 , task9.length)
console.log("task99", task99, typeof task99, task99.length)

// task 10   **Use `typeof` and `instanceof`** to check data types and constructors.


let task10 = "hi";

console.log("task10", task10, typeof task10);

console.log(task10 instanceof String)


let task1010 = new String('Hi');

console.log(task1010, typeof task1010 );
console.log(task1010 instanceof Object);



// Intermideate task

// task 11  Create two `Person` objects** and compare their prototype using `Object.getPrototypeOf`.

function Person1(name, age) {
    this.name = name,
    this.age = age
  
}

let task11 = new Person1 ('Vivek', 24)
let task111 = new Person1 ('Soonil', 26);

console.log(Object.getPrototypeOf(task11))
console.log(Object.getPrototypeOf(task111));

// task 12  **Use `.call()` and `.apply()`** to invoke a function with different `this` contexts.


function Person12(name, age){
    this.name = name,
    this.age = age
   
}

Person12.prototype.fullname = function(){
      console.log(`${this.name} and age is ${this.age}`)
}

let person1 = new Person12('vivek', 24);
let person2 = new Person12('Sindhu', 24);

console.log(person1.fullname.call(person2));
console.log(person1.fullname.call(person1));


const tsk12 = {
    fullname : function(){
       console.log(`${this.name} and age is ${this.age}`)  
    }
}

let person11 =  {
    name: "vivek",
    age: 24
}

console.log(tsk12.fullname.call(person11))
// console.log(Person12.fullname.call(person2));