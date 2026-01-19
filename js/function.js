'use strict';
const shirt = [];
const zudioshop = function(clothtype, size, price, chekcwashcare, visitors =1, returns = (visitors ==1) ? true: false, ) { 
    const shirtag = {   // here using enhanced object literals i defininng a propoerties for shirtagg
        clothtype,
         size,
          price,
           chekcwashcare,
           returns ,
           visitors

    }

    console.log(shirtag);
    shirt.push(shirtag);



}
zudioshop('fullHand', 'L',550, 'AllTypeofWash');

console.log(typeof shirt.returns);


const trainname = 'Cheennai Mail exprees';
const passanger = {
    passangerName: 'Vivek G',
    age: 24,
    state: 'Tamilnadu',
    Mobno : 7094025396,
    Gender: 'Male',
    tickets: 'confirm',
    seatNo : 'SL 81'


}

const train = function(trainname1, passangerbb) {
    trainname1  = 'csmt express';
    passangerbb.passangerName = 'Mr.' +  passangerbb.passangerName ;
    passangerbb.age = 26
    console.log(passangerbb.passangerName , typeof (passangerbb.passangerName));
    console.log(passanger.Mobno);
    console.log(passanger.age);


    if  (passangerbb.name == 'Vivek G' && passangerbb.Mobno == 7094025396 && passangerbb.age == 24){
        alert(`Your seat id confirmed \n
            Train Name : ${trainname1}\n 
            Passanger Name : ${passangerbb.passangerName}\n
            Seat No : ${passangerbb.seatNo}\n
            platform: 12A`)
            console.log(`Your seat id confirmed \n
            Train Name : ${trainname1}\n
            Seat No : ${passangerbb.seatNo}\n
            platform: 12A  age : ${passangerbb.age}`)
    }
    else {
        // alert( 'please wait');
        console.log(`Your seat id confirmed \n
        Passanger Name : ${passangerbb.passangerName}\n
        Train Name : ${trainname1}\n
        Seat No : ${passangerbb.seatNo}\n
        platform: 12A age : ${passangerbb.age}`)
    }
}

train(trainname, passanger);
console.log(trainname); // in this result train name will be same as a defined or assignd bause it variable with string 
console.log(passanger.passangerName); // in this result you can  see result of passage name is Mr.Vivek G beacuse it using  train function reassignd heap memory  for example passing argument(value) is an objecttype and resiign properite is an same name of object reference or value so impact will be there

const reage = (age) =>{
    age.age = 31;
    console.log(age.age)
}
reage(passanger)

console.log(passanger); // be careful about reassign an objct proerties it uses an recentely called or assigned heap memory



// ** IN JAVASCRIPT THERE IS NO ARGUMENT PASSING REFERNECE PASSING BY   ONLY VALUES **  


// HIGHER ORDR FUNCTION



// object id nothing but value value are called first order functions  in javascript ther is first function all are value only 

// function callback function

const lowecase1 = function (str){
    return str.replaceAll(' ' , ' * ').toLowerCase().toUpperCase();
}

const upperCase1 = function(str){
    const[fistword, ...others] =  str.split(' ');
    return [fistword.toUpperCase(),, ...others].join('+')
}

const highFunc = (str, fn) => {
    console.log(`str: ${str}`);
    console.log(`'transrmend string' : ${fn(str)}`);
    console.log(`'transrmend string' : ${fn.name}`);
}

highFunc('Javascript is the best programming langauge', upperCase1); // in this function we are calling highfunc()in this parameter as we calling a upperCase()function  it called function calling return function

highFunc('Javascript is the best programming langauge', lowecase1); // function call back functio

const parent = (msg) => {
    let child = (name) =>{
        console.log(`${msg} ${name}`)
    }
    return child;
}

let paerntholder = parent('hey');

paerntholder('vivek');
parent('hey')('sindhu');


const parentArrow = childarrow => child1arrow => console.log(`${childarrow} ${child1arrow}`);

parentArrow('hey')('nd');

const vistrara = {
    airline : 'Vistara',
    code : 'LH',
    bookings: [],
    cancels :[],
    book(flighNum, name){
        console.log(`${name} booked seat on  ${this.airline}  flight ${this.code}${flighNum}`);
        this.bookings.push({flight:`${this.code} ${flighNum} , ${name}`});

    },
    cancel(flighNum, name) {
        console.log(`${name} is canceled a  flight on ${this.airline} ${vistrara.code}${flighNum}`);
        this.cancels.push({flight:`${this.code} ${flighNum} , ${name}`});
    }
   
}

vistrara.book (233, 'Vivek G');
vistrara.cancel(2981298, 'sindhu');
console.log(vistrara);

const indigo = {
    airline : 'INDIGO',
    code : 'LH',
    bookings: [],
    cancels :[],
   
   
}

/// CALL METHOD
const book = vistrara.book;
const cans = vistrara.cancel;

book.call(indigo, 2222, 'soonil');
book.call(vistrara, 289, 'kasi');
cans.call(vistrara,289, 'kasi');
cans.call(indigo,2222, 'soonil');
console.log(indigo);

// APPLY METHD

let c1 = [22, 'Marco'];
book.apply(indigo, c1);
cans.apply(indigo, c1);

book.call(indigo, ...c1); // by using array we passing a value

// BIND METOD

let flightbooofindigo = book.bind(indigo);
let flightbooofvistara = book.bind(vistrara);
flightbooofindigo(920, 'francis')
// flightbooofindigo(vistrara)(232,'tee')//

let flightcancelindigo = cans.bind(indigo); // in this we are binding a value cans variable vans variable holds function vistara.canecle function we by bind we retuning a value and stor it in flightCancel again we calling a flignt cancel
flightcancelindigo(289, 'vivek g');


//  bind method with event listeners
vistrara.planescount= 3000;
vistrara.buyplanes = function(){
    console.log(this)
    console.log(this.planescount++);

}

document.querySelector('.vistara-btn').addEventListener('click', vistrara.buyplanes.bind(vistrara));
document.querySelector('.vistara-book-btn').addEventListener('click', vistrara.book.bind(vistrara,2222, 'ssks'));
// document.querySelector('.indigo-book-btn').addEventListener('click', .call(indigo,22,'kjds'));

//  challenge 


const poll = {
    question:'what is your favourite programming language ?',
    option : ['0: Javascript', '1: Python', '2: Rust', '3: C++'],


    answer: new Array(4).fill(0),
    registerNewAnswer(){
        // const favouriteLanguage = prompt(`Your Favourit language ? \n 0: Javascript \n 1: Python \n 2: Rust \n 3: C++ \n 'write option number'`);
        const answerpoll = Number(prompt(`${this.question}\n ${this.option.join('\n') }\n write option number`));
        console.log(this.answerpoll);
        typeof answerpoll === 'number' && answerpoll < this.answer.length  && this.answer[answerpoll]++;
        console.log(this.answer);

        this.dispalyreuslt();
        this.dispalyreuslt('string')
        
    },
     dispalyreuslt (type= 'array'){
        if(type === 'array'){
            console.log(this.answerpoll)
        }
        else if(type === 'string'){
            console.log(`poll resut are : ${this.answer .join(', ')}`)
        }
     }
   
   
};
// console.log(registerNewAnswer);




document.querySelector('.answerpoll-btn').addEventListener('click', poll.registerNewAnswer.bind(poll));
// poll.registerNewAnswer('')


// Immediately invoking fuction expression
const  var1 = function(){
    console.log(`ajkajk`);
}
var1();



(function(){
    console.log(`hjw`)
}) ();  // in this if you write a fuction inside a paranthesis with any function name it will run it is called immediately invoking function but gain you have call one paraenthsis they only it will execute.
  
(() => {
    console.log(`sban`);
})();


// ****************** closures   *************

// clouseres makes a function remember all the variables that exist at the functions birth place

const incre = function(){
    let inc = 0;
    return function(){
        inc++                   /* ---------->  closure   because  it still posiible to accesss so it will heap memeory*/
        console.log(`${inc} increment `)
    }
}

incre();
incre();
incre();
const dinc = incre();   /// a variable contains execution part part that means functions in result we can acces a variablre using that execution
dinc();
dinc();
dinc();
dinc(); 

// a closure is the closed-over variable environment of the execution context in which a function was created , even after that execution context is gone.

// a closure gives a function access to all the variables of its parent function , even after that parent function has returned. The function keeps a reference to its outer scope which parent the scope chain throught time.

// a closure make sure that function doesnt loose connection to varaible that existed at the functions birth place.
//a closure is like backpack that function carries around wherever it goes. this backpack has all the variable that were present in the encironment where the functin was created.


// closure example

let ss = 0 ;
const sss= function(){

    let ass = 12;
    console.log(`ss before re assign : ${ss, typeof ss} `)
    ss = function(){
        console.log(ass * 86);
    }
    console.log(`ss after re assign : ${ss, typeof ss} `)
3
}

 const bss = function(){

    let css = 233;
    // ss();
     ss = function (){
        console.log(css * 22);
     }
 }
sss();
console.log(ss);
ss();

bss();
ss();
const onboarding = function(nofperson, wait ){

    let groupsplit = Math.round( nofperson / 3) ;
   
    setTimeout(function(){
        console.log(` wea re going to onboard all ${nofperson} passangers`);
        console.log(` we are splite a ${groupsplit} persons as a one group`)
    }, wait *1000);

    console.log(`onboarding will starts in ${wait} seconds or mins`);
};

onboarding(4231, 3);


// challenge 2

(function(){
    const header = document.querySelector('h1');
    header.style.color= 'red';
}) ();

(function(){
    const header = document.querySelector('h1');
    header.style.color= 'red';
    const bodyclick = function(){
   
        const body = document.querySelector('body')
       body.addEventListener('click', function(){
            header.style.color= 'blue';
            console.log('check h1 it turns into blue');
        })
    }
    bodyclick();
}) ();



