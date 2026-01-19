'use strict';
console.log( `Numbers , Dates , Initials and Timers`);

// Converting and Checking Numbers
   
console.log( 23 === 23.0);

// Base 10 - 0  to 9.  1/10 = 0.1
// Binary Base 2-0 1
console.log( 0.1 + 0.2);
console.log( 0.1 + 0.2 === 0.3);  // why here false means javascript default understand any number with floating poit nnumber beacus eof that it returns false.


// Conversion

console.log(Number(25), typeof Number(25));
console.log(25, typeof 25);
console.log(+ '25' , typeof + '25');
console.log(25 + 'a' , typeof 25 + 'a');

// Parsing
console.log( Number.parseInt('30px',  289289));
console.log(Number.parseInt('jdshj32', 12));

console.log(Number.parseFloat('3232pa',  212));
console.log(Number.parseFloat('2.4rem', 2121));

console.log(Number.isNaN(20));
console.log(Number.isNaN('20s'));
console.log(Number.isNaN(+ '20k'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+('20%^')))
console.log(Number.isFinite(23/0));


console.log(Number.isInteger(23));
console.log(Number.isInteger('23'));
console.log(Number.isInteger(23/0));


//*****************    MATH AND ROUNDING     *************

console.log(Math.sqrt(25));  // Math.sqrt()

console.log( 25  ** (1/2)); // this is equal to math.sqrt() both and this will give the same result.

console.log(Math.max(2121,243422,2344243,4234234,423432));
// Math.max() will return the max size or biggst number.

console.log(Math.max(22,21312,42323,32235,32523, '233dk', 44)); // if the input argument contains string it will return as a Nan.
console.log(Math.max(21213,123132,'212', 21321)); //  if the string contains alphabets means it will return a Nan.. if the string contains numbers means javascript automatically cnverts string to number.

console.log(Math.min(2132178321,1273271,123321,1233,23,2));  // Math.min() it will  return a lowest argumenst value as result.

console.log(Math.PI * Number.parseFloat('10px') ** 212);


// Math.random()  it will retun a random number between 0 to 0.9
console.log(Math.random());

console.log(Math.floor(Math.random() * 111));  // by using math.floor() we will get full value
console.log(Math.trunc(Math.random() * 6) + 1);

let randomnum = (Max,min) => Math.floor(Math.random() * (Max -min  +1));
randomnum(20,10);
randomnum(0,3);
console.log(randomnum(20,10));
console.log(randomnum(5,1));

// rounding Integers
console.log(Math.trunc(22.86)); // by using math.trunc() we round a number

console.log(Math.round(92.2502023)); // In math.round() if value is less than.5 it will 92 as round valu()
console.log(Math.round(92.4)); // in math.round() if more or equal than ..5 it will 93 

console.log(Math.ceil(23.01)); // it always return the rounded value 23.01 means it will return 24
console.log(Math.ceil(23.71));


console.log(Math.floor(24.2));
console.log(Math.floor('23.55'));

console.log(Math.trunc(-23.4421));
console.log(Math.round(-88.9))
console.log(Math.floor(-223.323))

// rounding  decimals

console.log(27.2.toFixed(0)); // tofixed() is used to round deciamal like how many digit we want to round
console.log(27.2.toFixed(6));
console.log(270.0.toFixed(6));


// The remainder Operator

console.log( 5 % 2);
console.log( 5 / 2);
console.log( 8 % 2);
console.log( 8 / 3);

// Numeric sperator

let hh = 3828932_2_2838;
console.log(hh); // In javascript if you write a number with underscore means also that will return  a without underscore

//  WOrking with BIGINT

// Bigint is a primitive data type

console.log( 2 ** 53-1);
console.log( 2 ** 53 + 1);
console.log( Number.MAX_SAFE_INTEGER);

// 2 ** 52 is safe number to display properly above that it wont display properly

console.log(873272347834483743843728784327843);
console.log(BigInt(2472384378237432784738324423784234));

// operations

console.log( 10000n + 10000000n);
console.log(38274328743274863278436372648732648723n  * 892948282n);

const w =  32932093293290n // it is an Big int number
const d = 2112; // it  is an normal integer
//  console.log( w *d); //  multiply bigint with normal intger will throw error like Cannot  BIGINT and other types use explicit conversions
 console.log( w * BigInt(d)); // this is possible multilying bigint with bigint

//  console.log(Math.sqrt(8n)); // this possible with big int


 // exception
 console.log( 20n > 15); // it is possible with BIGINT
 console.log( 982 == 9n); // it is also  possible

 console.log( typeof 20n);
 console.log(( 20n ==  '20'));

 console.log( w + 'jjsajkdj');


 // Divisions

 console.log( 10n / 3n);  //  this is possible it will retunn result
 console.log( 10 / 3);

// Dates and Times

// Create a date()

let nn =  new Date();
console.log(nn);

console.log(new Date('Wed May 14 2025 22:50:46'));
console.log(new Date('December 21, 2021'));
console.log(new Date('October 10 ,2000'));
console.log(new Date('jan 7, 2001'));

console.log( new Date(2020, 1 , 19, 14,15,16)); //  yyyy mm dd hh mm ss ms
console.log( new Date(2020, 1 , 31, 14,15,16)); // in this feb has 28 we write 31 and any additional number it will add adtional to next month

console.log( new Date(0));
console.log(new Date( 3 * 24 * 60 * 60 * 1000));


// working with dates

//By using below get() method we get Year , Month, Date , Day, Hour, Minutes, Seconds, Milliseconds


let ddd = new Date(2022, 11, 10, 11,11,11);
console.log(ddd);
console.log(ddd.getFullYear());
console.log(ddd.getMonth());
console.log(ddd.getDate());
console.log(ddd.getDay());
console.log(ddd.getHours());
console.log(ddd.getMinutes());
console.log(ddd.getSeconds());
console.log(ddd.getMilliseconds());
console.log(ddd.toISOString());

console.log(ddd.getTime());
console.log(new Date( ddd.getTime()));
console.log(new Date(Date.now()));






















