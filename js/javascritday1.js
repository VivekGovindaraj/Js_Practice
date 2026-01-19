'use strict';
let a = "yes";
// if ( a === "yes") alert('kjwehjwwbehwbdhbdhbdwjhbwdhbdhw');


console.log( 1 + 2222 + 3222222222222);
console.log("sindhu");
console.log(233333);
console.log(2222221111111111111111);
console.log(" god is great");



let aa = " vivek";
let b = "govindaraj";
console.log( aa + " loves"  + b);
 
var soonil = 'abcccc';
var soonil = "ewghg";
// soonil = "gvehgghgvdwd";
 console.log(soonil);
 let asa = 5;
 asa = 10;
//  let asa = 16;
 console.log(asa);
  const PI = 3.14;
//  const PI = 8383;
  console.log(PI, asa);


  const luke = 28832;
   const lukes =  39822389 + 2189128;
   const lukes1 = luke + lukes - 3278423;


   console.log( luke + lukes + lukes * lukes , lukes, lukes1);


   const  john = "im";
   const john1 = "ui";
   const john2 = "developer";

   console.log( "Vivek " + john+ " " + john1 + " " + john2);
let x = 10 + 1;
//  x += 1;
x++;
x--;
 console.log(++x);
 console.log("White Devil");


 let abc = 100;
 let cde = abc - 50;
 let def = cde + 10;

 console.log( abc, cde, def, abc + cde,
     cde + def, abc % cde >= 1,
      cde + def, abc > cde, cde > def, cde > abc );

let ghi = abc > cde ;
// let ief = ghi.val();
// console.log(ief);

if(abc > cde) {
    console.log("true is true");

}
else {
    console.log("false  menas false"); 
}

let si, vi;
si= vi= 10 - 1 + 10 ;
console.log(si,vi);

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

// markHeight= 1.88; 
// markWeight = 95;
// johnHeight = 85;
// johnWeight= 1.76;

let BMI1 ;
 BMI1 = markWeight / markHeight ** 2;
 console.log( "Mark BMI IS  "+ BMI1 );

 let BMI2 ;
 BMI2 = johnWeight /johnHeight ** 2;
 console.log("John BMI is " + BMI2);

 if ( BMI1 > BMI2){
    console.log("Mark has more BMI than JOhn and markBMI is" + BMI1)
 }
 else {
    console.log("John has more BMI than mark and johnBMI is" + BMI2)

 }

 let diffMarks = BMI1 - BMI2;
 let diffJohn = BMI2 - BMI1;
 let valCHECK111 = BMI1 > BMI2;


 let markRes = `Mark's BMI ${BMI1} is more than Jonh's BMI ${BMI2} and difference value is ${diffMarks}`;
 let johnRes = `John's BMI ${BMI2} is more than Marks's BMI ${BMI1} and difference value is ${diffJohn}`;
 if (valCHECK111){
    console.log(markRes),
    console.log(johnRes);
 } 
 else {
    console.log(johnRes);}
    
 let markHigherBMI = BMI1 > BMI2;
 console.log(markHigherBMI);


 let nam = "vivek";
 let year = 2024;
 let birthYear = 2001;

 const res = `My Name is ${nam} \n\ and \n\ my age is ${ year - birthYear} and im currently working in SBI GITC Belapur.`
 console.log(res);
//  console.log(~svdghvewhg);

console.log(` Mar`)



let cons = '8373873';
console.log(cons);
console.log(typeof(cons));
console.log(Number (cons));
console.log (typeof(Number (cons)));
let cons1 = 'jhssahd';
console.log(cons1);
console.log(typeof cons1);
console.log(Number (cons1));
console.log(typeof (NaN));
// console.log(typeof number(cons));

console.log(`Im a` + Number('23') + `old`);
 console.log('100' - '11'- '11');

// let hhh = prompt('enter a number');
// console.log(hhh);
//  if ( hhh === 10) {
//    console.log(typeof hhh);
   // if (hhh === 10) {
   //    console.log(" enter number is equl and tye also equal");
   // }
   
//  }
// else {
//    console.log(typeof hhh);
// }

let arab = true;
let emirates = false;
let dubai = true;

console.log( arab || emirates);
console.log( arab && emirates);
console.log( !arab || emirates);

if ( arab  && !emirates && dubai
){
   console.log('eligible for emirates visa');
}
else {
   console.log("not liligible for visa");
}


let dolphins = (97 + 108 + 89) / 3;
let koalas = (88 + 91 + 110) / 3;

dolphins = (97 + 112 +101) /3;
koalas = 109 + 95+ 123 / 3;
let dolphins1 = (97 + 112 + 101) / 3;
let koalas1 = (109 + 95 + 106) /  3;

console.log(dolphins);
console.log(koalas);

if ( dolphins > koalas) {

   console.log( 'winner is dolphis');

}else if( dolphins == koalas){
   console.log("match is draw");
}
else if ( dolphins < koalas){
   console.log("winner is koalas");
}

console.log("bonus 1");


if ( dolphins > koalas && dolphins >= 100) {

   console.log( 'winner is dolphis');

}else if( dolphins == koalas ){
   console.log("match is draw");
}
else if ( koalas > dolphins &&  koalas >= 100 ){
   console.log("winner is koalas");
}

console.log("bonus 2");

console.log(dolphins);
console.log(koalas1);

if ( dolphins1 == koalas1 && dolphins1 >= 100 && koalas1 >= 100){
   console.log("match is draw");

}
else{
   console.log("no winners");
}

let day = "Monday";
day  ="Wednesday";

let day1 = "wedneDsday"
switch(day){
   case 'Monday':
      console.log("chest workout");
      break;
   case 'Tuesday' :
      console.log("Shoudler workout");
      break;

   case "Wednesday":
      if(day1 == "wednesday"){
         console.log("Bench press");
      }else {console.log(" BODY TEST");

      }
     
      break;
   case "thursaday":
      console.log("Leg day");
      break;
   case "friday":
      console.log("Abs workout");
      break;
   case "saturday":
      console.log("Arms workout");
      break;
   case "sunday":
      console.log("Take rest");
      break;
   default :
    console.log("Please check the day");

}

let agss = 18;
 agss > 17.99  && agss == 18 ? console.log("Iam not teenager") : 
 console.log("im an minor");

 let dddb = agss >= 18 ? 'wine' : "Water";
 console.log(dddb);


let billvalue = 430;
let tip = billvalue > 50 &&  billvalue <= 300 ? console.log("Tip is 15 %") : console.log("Tip is 20%");

let tipamount = billvalue > 50 &&  billvalue <= 300 ? billvalue *  0.15 : billvalue * 0.20;
console.log( tip , tipamount);
 let totalValue = billvalue + tipamount;
console.log(`"BILL VALUE = ${billvalue} \n\ Tip =  ${tipamount} \n\ Toatal Value = ${totalValue} "`);

let hasdriverlicense = false;
const passtest = true;

if (passtest) hasdriverlicense = true;
if(hasdriverlicense) console.log('can drive');

function logger (){
   console.log("Say my Name...");
}

logger();

function fruitplace(orange, apple){
   console.log(orange, apple);
   const juice = `juice with ${orange} and ${apple} will be good. `;
   return juice;
}

fruitplace(5, 8);
console.log(fruitplace(5, 8));
console.log(fruitplace(11, 22));


function hukum(gun, axe){
   // console.log(gun, axe);
   if (gun == 5 && axe == 10){
      console.log(`Nann than LEO ..LEO dass...rata ratata ....`)
   }
   else{
      console.log(`Naan Leo ila Parthiban`)
   }
   const jailer = `Neethan leo nu othuko `;
   return jailer;

}

hukum(5, 11);
console.log(hukum(5,11));

// function expression
function agecalc(biyear){
   
   const ages = 2024 - biyear;
   return ages;

}

agecalc(1997);
console.log(agecalc(2001));


// function declartion
const ages1 = function agecal(years){
   return 2024 - years;
}
agecalc(2012);

// here ages1 variable is used for to hold the function
// so it doesnt store the resukt it just holds a 
// function like value like a=b like  a== function
// for funtion result we have to use varible or function which we passing a arugument

console.log(agecalc(2012), ages1(2001));
console.log(typeof ages1);

// arrow function
const calcage3 = birthYear1 => 2024 - birthYear1;
calcage3(2009);

let cage = calcage3(2009);
console.log(cage);


const retirementCalc = (birthYar, nam) => {
   const age111 = 2024 - birthYar;
   const retirement1 = 65 ;
   const retirementagess = retirement1 - age111;
   const retirementage1 = ` ${nam} current age is ${age111}, 
   and your company retirement age is ${retirement1},
    so you have left of ${retirementagess} for your retirement...`
    return retirementage1;
}

console.log(retirementCalc(2001, "Vivek"));

const ageeee = birthyar =>  2024- birthyar;
console.log(ageeee(2001));

const agecalc111 = (birthyar, name) => {
   const date1 = new Date();
   const  agee = date1.getFullYear() ;
   const yourage = agee - birthyar;
   const retage = 65;
   const toyourretag = retage - yourage;
   const yourtext =  ` ${name} curent age is ${yourage} and your company is retirment age is ${retage } so you have ${toyourretag} to your retirment..`;
   return yourtext;

}

console.log(agecalc111(2001, 'soonil'));


function carstemp(cars1) {
   return cars1 * 4;
}

function carGarage(cars, vechicle) {
  const cars11 = carstemp(cars);
   const vechicle11 = carstemp(vechicle);
    const carscollection = `Vivek having ${cars11}  Lambo and ${ vechicle11} ferrari.`;
    return carscollection;
}


console.log(carGarage(5, 11));

function agcalc (age){
   const ff = new Date();
   const yoursage = ff.getFullYear(); 
   const resultage = yoursage - age;
   return resultage; 
}

console.log(agcalc(2001));
const rets = function returncalc() {
   const companyret = 65;
   return companyret;
}

console.log(rets(),  typeof rets());

function retagecalc(ageq, nameq) {
   const agcalcs = agcalc(ageq);
   
   const companyret = rets();


 

   const resultcalc1 = companyret - agcalc(ageq);
   
   
   if (resultcalc1 > 0) {
     
      console.log(`${nameq} is still ${resultcalc1} years left to retire `)
      return resultcalc1;
   } else{
     
      console.log(`${nameq} You are already retird`)
      return -1;
   }


   

}


console.log(retagecalc(2001, 'Vivek G'));


// const calcAverage1 = calcAverage =>  {
   
//    const avgDol1 = (44 + 23 + 71) / 3;
//    const avgKoalas1 = (65 + 54 + 49) / 3;
//    return avgDol1;
//    return avgKoalas1;
// }

// console.log(calcAverage1());

// function checkWinner(avgDolphins, avgKoalas) {

//    if ( avgDolphins >=  2 *  avgKoalas){
//       console.log (`Dolphins wins ( ${avgDolphins} vs ${avgKoalas})`)
//    }
//    elseif ( avgKoalas >= 2 * avgDolphins) {
//       console.log (`Koalas wins ( ${avgKoalas} vs ${avgDolphins})`)

//    } 
   

// }

// console.log(checkWinner(42,26));


const calcAverage = (a,b,c) => (a,b,c) / 3;
let AvgDolphins = calcAverage(4422222, 22222223, 7122222);
let avgKoalas = calcAverage(645, 554, 49);

console.log(AvgDolphins, avgKoalas);


const  CheckWinner = function(AvgDolphins , avgKoalas){
   if (AvgDolphins >= 2 * avgKoalas) {
      console.log (` Dolpins Wins ${AvgDolphins} vs ${avgKoalas}`);
   }
   else if ( avgKoalas >= 2 * AvgDolphins)
      {

         console.log (` Koalas Wins ${avgKoalas} vs ${AvgDolphins}`)
   }
   else {
      console.log (` match draws`)
   }
}

console.log(CheckWinner(AvgDolphins, avgKoalas));

const latham = ['abc', 'cbe', 'efg'];
console.log(latham, latham[0]);

const latham1 = new Array("abc", "def", "ghi");
console.log(typeof latham1[1]);

console.log(typeof latham1 )
console.log(latham1.length);
console.log(latham1[latham1.length-1]);

latham[0] = 'vivek';
console.log(latham);
 const fnamee = "viv";
 const lname = "ek";
  const a11 = [fnamee, lname,latham,latham1];
  console.log(a11);
console.log(a11[0] + a11[1]);


const popoye = [ 'abc', 'cde'];
console.log(popoye);
let  newpopye = popoye.push('goat');
console.log( popoye);

popoye.unshift('goa');
console.log(popoye);
const popoye1 = popoye.pop();
console.log(popoye);

const popoye2 = popoye.shift();
 console.log(popoye);
popoye.push('ggg','hhhh');
console.log(popoye);
console.log(popoye.indexOf('hhhh'));
console.log(popoye.indexOf('hahhh'));

console.log(popoye.includes('ggg'));


function calcTip(tipbills){
   if (tipbills>= 50 && tipbills == 300){
      const tipamount = tipbills * 0.15;
      console.log( `tip is ${tipamount}`);
      return tipamount;
   } 
   else {
      const tipamount =  tipbills * 0.20;
      console.log( `tip is ${tipamount}`);
      return tipamount;
   }
} 

console.log(calcTip(300));



const tipbills = [125, 555, 44];
console.log(`New bill :` ,calcTip(tipbills[1]));

console.log(calcTip(tipbills[0]));
// const tipbill1 = calcTip(tipbills[0]);
// const tipbill2 = calcTip(tipbills[1]);
// const tipbill3 = calcTip(tipbills[2]);

const tips = ['Tip Amount of Each Bill :',calcTip(tipbills[0]), calcTip(tipbills[1]), calcTip(tipbills[2])];
console.log(tips);


const totalAmount = ['Total Amount of Each Bill :', tipbills[0] + calcTip(tipbills[0]),tipbills[1] + calcTip(tipbills[1]), tipbills[2] + calcTip(tipbills[2]),];

console.log(totalAmount);
console.log(tips);


//OBJECTS

const firstObj = {
   fname : "vivek",
   lname : "g",
   age : 23,
   friends :['aaa', 'bbb', 'Michael']

};
console.log(typeof firstObj);
console.log( firstObj);
console.log( firstObj.friends[0]);
console.log(firstObj.fname);
console.log(firstObj['friends']);
console.log(firstObj.friends.length);

const keyName = 'name';

console.log(firstObj['f' + keyName]);
console.log(firstObj['lk' + keyName]);

// const resssss = prompt('if yu want to find a value of FirstObjs choose this any object fame,lnam,age,age,friend');

// console.log(firstObj[resssss]);

const ress = `${firstObj.fname} has ${firstObj.friends.length} and his best best friend is called ${firstObj.friends[2]}`;
console.log(ress);

const jonas = {
   firstName  :'vivek',
   lastName : 'Govindaraj',
   birthYear : 1991,
   job : 'Web developer',

   calcFunc : function(birthYear){
      const date = new Date();
      const d = date.getFullYear();
      return d - birthYear;
   },
   calcFunc11 : function(){
      const date = new Date();
      const d = date.getFullYear();
      return d - this.birthYear;
   },
   calcage: function(){
      // const date = new Date();
      // const d = date.getFullYear();
      jonas.age = 2024 - this.birthYear;

      return jonas.age;
   },
   license:true,

   // finalSummary : function() ? ''` ${jonas.firstName} is a ${jonas.calcFunc11} old ${jonas.job},  and ${(jonas.license)? 'he has

};

console.log(jonas.firstName);
console.log(jonas.lastName);

console.log(jonas.birthYear);
console.log(jonas.calcFunc(birthYear));
console.log(jonas.calcFunc(birthYear));

console.log(jonas.calcFunc11());
console.log(jonas.calcage());
console.log(jonas.age);
console.log(jonas.license);
// console.log(jonas.finalSummary);

console.log(`${jonas.firstName} is a ${jonas.age} old ${jonas.job},  and ${(jonas.license)? 'he has license' : 'he has no license' }`);
// console.log(jonas.finalSummary)


//loop

// for loop will keeps running upto to when condition becomes true
for( let rep = 0; rep <= 22; rep++){
   console.log(`push up rep ${rep}`);
}

const vivarray = [ 'abc', 8217, 1724.28148, 'db', 'java', ['abc','cde','def'], true, { fname : "vivek",lname :"g"}];
console.log(vivarray);                   
console.log(typeof ( vivarray[7]));
let types11= []
console.log(typeof types11)

for (let i=0; i < vivarray.length; i++){
   console.log(vivarray[i], typeof vivarray[i]);
   // types[i] = typeof vivarray[i];
   types11.push(typeof vivarray[i]);

}

console.log(types11);
 
const year11 = [ 2001, 2022, 1991, 1221];
const agecaa = [];

for (let i=0 ; i < year11.length ; i++){
   agecaa.push(2037 -year11[i]);
}

console.log(agecaa);

const h1 = [ 1991,1992,1993,1994,1995];
const h2 = [];
for (let i=0; i < h1.length; i++){
   let d = new Date();
   let d1 = d.getFullYear();
   h2.push( d1 - h1[i]);
}

console.log(h2);
//continue and break statement

const abcd = ["abc", "cde",23,"def",['abc', 'cde'], true];
for (let i=0; i < abcd.length; i++){
   if (typeof abcd[i] !== "string") continue;
   console.log(abcd[i],typeof abcd[i]);
}
console.log(abcd,typeof abcd);


for(let i = abcd.length-1; i>= 0; i--){
   console.log(i,abcd[i]);
}

for(let i= abcd.length-1; i >= 0; i--){
   console.log(abcd[i], i);
}

for(let excercise= 1; excercise <= 3; excercise++){
   console.log(`excercise  : ${excercise}`);
   for (let rep=1 ; rep<=5; rep++){
      console.log(`excercise ${excercise} and rep count :${rep}`);
   }
}

let randomNumDice = Math.trunc(Math.random() * 6) +1 ;

// while(randomNumDice !== 1){
// console.log(`your rolled dice number is : ${randomNumDice}`);
// }

const tipGiven = [22, 295, 176, 440, 37, 105, 10, 1100, 85, 52];
const tipss = [];
const totals = [];

const tipcalc1111 =  (tipGiven) => {
   if ( tipGiven >= 50 && tipGiven == 300 ) {
      const tipsCalc = tipGiven * 0.15;
     
      return  tipsCalc;
     
   }
   else{
      const tipsCalc = tipGiven * 0.20;
      
      return  tipsCalc;
     
   }
}

for (let i=0; i <tipGiven.length; i++){

   const tipcalc1111 =  (tipGiven) => {
      if ( tipGiven >= 50 && tipGiven == 300 ) {
         const tipsCalc = tipGiven * 0.15;
        
         return  tipsCalc;
        
      }
      else{
         const tipsCalc = tipGiven * 0.20;
         
         return  tipsCalc;
        
      }
   }
   

   const finaltip = tipcalc1111(tipGiven[i]);
 
   
   tipss.push(finaltip);

   totals.push(finaltip + tipGiven[i]);

}
// console.log(tipcalc());
console.log(tipss);
console.log(totals);


// for(let i=0; i <tipGiven.length; i++){
//    let sumA = tipGiven[i] + 1;
//    let avgofsum = sumA / (tipGiven.length);
//    console.log(avgofsum);
// }

const calcavg = function(arr){
   let sum = 0;
   for (let i=0; i < arr.length; i++){
      sum += arr[i];

   }
   return sum / arr.length;

}

calcavg(2, 3, 6);
console.log(calcavg([2, 3, 6]));

// function generateOTP() { 
  
//    // Declare a digits variable  
//    // which stores all digits  
//    let digits =  
// '0123333'; 
//    let OTP = ''; 
//    let len = digits.length ;
//    for (let i = 0; i < 6; i++) { 
//        OTP += digits[Math.floor(Math.random() * len)]; 
//    } 
//    return OTP; 
// } 
 
// console.log("OTP of 6 digits: ") 
// console.log(generateOTP());


function GenerateCaptcha() {

   let digits = '123456778';
   let len = digits.length;
   let Captcha = '';
   for (let i=0; i< 6 ; i++){

      Captcha += digits[Math.floor(Math.random()* len)];
   }
   return Captcha;
}
const OTPFUNC = GenerateCaptcha();
console.log(`Your captcha is :`, OTPFUNC);

const  temparr =[17, 15, 14, 9 , 5, 'error' , 3, 2, -1 , -10];
function CalcTempAmplitude(temps) {
   let max = temps[0];
   console.log(max);
   let min = temps[0];
   console.log(min);

   for( let i=0; i < temps.length ; i++) {
      const tempc = temps[i];
      if (typeof tempc !== 'number') continue;
      if ( tempc > max) max = tempc;
      if (tempc < min) min = tempc;

   }
   return max - min;
   
  

}

const finalrss = CalcTempAmplitude(temparr);
console.log(finalrss);


const forecastTemp = [17, 21, 23];

const PrintForeCast = function(forecastTemp1){

   // let temps1 = forecastTemp[0];
   // let temps2 = forecastTemp[0];
   // let temps3 = forecastTemp[0];
   let empt1 = '';

   for(let i=0 ; i < forecastTemp1.length ; i++){

      empt1 = empt1 + `${forecastTemp1[i]} 'c ${i +1} days..` ;

   }
   console.log(empt1);
 

   
}
PrintForeCast(forecastTemp);
console.log(PrintForeCast(forecastTemp));

const workHours =  [7.5, 8, 6.5, 0, 8.5, 4 , 0]

function dailyProgrss(workHours) {

   let totalworkHour = 0;

  

   let daywithMoreHourWorked = ` No of days worked :${workHours[0]}` ;
   const numberofDaysWorked = workHours.length;
 
   const isfullTimee =` this worker is  ${ (totalworkHour >= 35) ? 'full timme employee' : 'Par time employee' }`
   // for(let j=0 ; j , workHours.length ; j++ ){
     
   // }
   
   for(let i=0; i< workHours.length; i++) {
      totalworkHour += workHours[i];

      let maxHour = workHours[i];
      if(maxHour > daywithMoreHourWorked) daywithMoreHourWorked = workHours.indexOf(workHours[i]);
   }
   let averageDailyHour = (totalworkHour) / (workHours.length );

   return {totalworkHour,
     averageDailyHour,
     daywithMoreHourWorked,
    numberofDaysWorked,
   isfullTimee};

   //  console.log(`${totalworkHour}`)
   // let mostHouurwrked = "";

  


}

dailyProgrss(workHours);
console.log(dailyProgrss(workHours))
// dailyProgrss(totalworkHour);

// console.log(`${totalworkHour}`);

// console.log(totalworkHour);

// document.querySelector('.h1content');
// 'use strict';
console.log(document.querySelector('.c1').textContent);

document.querySelector('.c1').textContent = 'Yore messagess are hacked !!!!';
console.log(document.querySelector('.c2').value) ;
document.querySelector('.c2').value = '12222';
console.log(document.querySelector('.c2').textContent = document.querySelector('.c2').value = '12222');

// console.log(document.querySelector('i1').value = '1234');
document.querySelector('.b1').addEventListener('click',
    function(){
      console.log(document.querySelector('.i1').value);

})

document.querySelector('.s1').addEventListener('change', 
   function(){
      console.log(document.querySelector('.c1').textContent = document.querySelector('.s1').value);
   }
)

'use strict';
// console.log(birthYearkkk);
function newcalcage(birthYearkkk) {
   let jj = birthYearkkk;
   const d = new Date();
   console.log(birthYearkkk)
   const year111 = d.getFullYear();
    const  age1111 = year111 - birthYearkkk;
   
    
   function printage(){
      const output1 = `${fname} is ${age1111} old. Born in ${birthYearkkk}`;
      console.log(output1);
     
      let output = `${fname} is ${age1111} old. Born in ${birthYearkkk}`;
      console.log(output);
      if(birthYearkkk >= 1999 && birthYearkkk<= 2001) {
          const fname = 'Vivek'
         let gen = `GenZ`;
         let genz = `${fname} is ${age1111} old. Born in ${birthYearkkk} and You are a ${gen}`;
         console.log(genz);
         
         function add(a,b) {
            output = 'newoutpt';
            return a+b;
            
            
         }
         console.log(add(3,9));
         console.log(output);
      }
      // console.log(genz);
      // console.log(add(3,9));
    }
    printage();
   //  console.log(add(3,9));
  

   return age1111;
}
const fname = 'vivv';
// console.log(birthYearkkk); 

newcalcage(2001);


// console.log(newcalcage(2001));
// console.log(jj);
 console.log(kk);
//  console.log(ll);
var kk = 'john';
let ll = 'kamal';
const uu = 'rajini';

console.log(kk);
// console.log(ll);

console.log(ddeclaration(5,4)); //  function declaration will work on before initialization because we are ot defining using varaiales so it will work
// console.log(ddefinition(5,4));
// console.log(darrow(5,4));
function ddeclaration(a,  b) {
   return a + b;

}

const ddefinition = function(a,b){
   return a + b;
}
const darrow = (a, b) => {
 return a + b;
}

// this keyword
console.log(this);

function  notf(){
   console.log(this, `This undefined is showing beacuse of this keyword nly will look local scope`);

}
notf();

console.log(this);
const huuuu = () => {
   let ss = 'ss';
   console.log(ss, this, `in arrow function this keyword will local scope plus lexical scope. soo it access oustide of its parent function`);
}
huuuu();

const jij = {
   name : 'Vivek',
   standard : 'Working Profession',
   domain : 'IT Industry',
   bio : function() {
      console.log(`${this.name} is a ${this.standard} guy . and he works in ${this.domain}`)
      
      console.log(this);
      return this.name +  this.standard + this.domain;
   }


}

console.log(jij.bio());
console.log(typeof jij.bio);


const jonas1 = {
   firstname : 'Jonas',
   year : 2001,
   birthyear : function() {
      console.log ( 2025 - this.year);
   }
}
console.log(jonas1.birthyear());

const jiten = {
   year : 1999,
}
jiten.bithyear = jonas1.birthyear;
jiten.bithyear();
// console.log(jiten.birthyear());


const drhuv = {
   firstName : 'dhruv',
   firstMovie :'Aditya Varma',
   lastMovie : 'mahan',
   age : 30,
   father : 'vikram'

} 

console.log(drhuv);

const drhvuNew = drhuv;
drhvuNew.lastMovie = 'Loading....yet to be released';
console.log(drhuv);
 console.log(drhuv.lastMovie);

 function drhvuNew1(newName, newValue) {
   newName.firstName = newValue;
   drhuv.age = 32;
   drhuv.family = ['vikram', 'vikram wife' ,' dhruv'];

 }

 const dhruvNew2 = drhvuNew1(drhvuNew, 'Dhruv Vikram');

 console.log(drhuv);

 const dhruvNew3 = {...drhuv} ///... these 3 dots called spread oprator

 dhruvNew3.age = 31;
 console.log(drhuv);
 console.log(dhruvNew3);

 const arrde = ['sjs', 'shsh','wjwjw']
 console.log(arrde);
 arrde.pop();
 arrde.push('hhh');
 console.log(arrde);
let arrdelength = arrde.length;

for(let i= 0; i <= arrdelength-1; i++) {
   arrde.pop();

}
console.log(arrde, `<---< using above function we can empty an arry`);


dhruvNew3.family = ['vikram', 'vikram wife' ,' dhruv'];

console.log(drhuv);
console.log(dhruvNew3);
console.log(dhruvNew2);
console.log(drhuv);
 const dhruvNew4 = structuredClone(drhuv);

 console.log('dhruv4',dhruvNew4);

//  //Data structuring 
// const hotel = {
//    shopname : 'cheectinadu',
//    locationa: 'Vellore , chennai, madurai ',
//    categories : ['chetinadu', 'chines', 'tandoori', 'north indian', 'vegan', 'vegetarian'],
//    startermenu: ['chicken crisp', 'dragon chicken', 'milagu varuval','Honey corn'],
//    maincourse : ['Mutton Briyani', 'chicken briiyani', 'veg briyani', 'egg briyani'],
//    order : function (startermenuindex, maincourseindex){

//       return [this.startermenu[startermenuindex], this.maincourse[maincourseindex]];
//    },
//    openingHours : {
//       Mon : {
//          open : 9,
//          close :22
//       },
//       Tue : {
//          open : 9,
//          close :22
//       },
//       Wed : {
//          open : 8,
//          close :21
//       },
//       Thurs : {
//          open : 9,
//          close :21
//       },
//      Fri : {
//          open : 10,
//          close :21
//       },
//       sat : {
//          open : 8,
//          close :24
//       },
//       Sun : {
//          open : 0,
//          close :24
//       }
//    },

//    orderfunc : function({
//       startermenuindex, mainmenuIndex, time, address
//    }) {
//       console.log(`Order Recived! ${this.startermenu[startermenuindex]} and 
//       ${this.maincourse[mainmenuIndex]} to be deleivered at ${address} @ ${time} `)

//    }

// };

// function hotelslog({shopname, locationa}){
//    console.log(` hotel name is ${shopname} and located @ ${locationa}`)
// }
// hotelslog(hotel);
// hotel.orderfunc({
//    time: '10:02 am',
//    address: "Rama sruthi buliding,  Near Bikaner Bakery, belapur. secotr-15.",
//    startermenuindex : 2,
//    mainmenuIndex : 3
// })


// // const {shopname, locationa} =hotel;
// // console.log(shopname, locationa);/




// const abcc = [1, 2,3];
// const aaa = abcc[0];
// const aaab = abcc[1];
// const aaac = abcc[2];

// console.log(['a', 'b', 'c']);
// console.log(aaa, aaab, aaac);

// const [ xx, xy,xz] = abcc;
// console.log(xx, xy, xz);


// const [ chetinadu, chinnes] = hotel.categories;
// console.log(chetinadu, chinnes);
// let[ cet1, , tand]= hotel.categories; // in aray if you skip in btwwen with of , it will negelate a element form calling array
// console.log(cet1, tand);

// let temp = cet1;
// cet1 = tand;
// tand = temp;
// console.log(cet1, tand);

// console.log(hotel.order(2,2));

// let [starter, maincouse] =hotel.order(2,2);
// console.log(starter, maincouse);

// // nested structure

// const nest = [1,2,3,4, [5,6]];
// const [i,,,k]= nest;
// console.log(i,k);
// const [i1, k0, , k1, [ , k2]] =nest;
// console.log(i1, k0, k1, k2);

// let [p,q,l, sk =10] =['w', 'ww', 'www'];
//   sk = 15;
// console.log(p,q,l,sk);


//  const {shopname, openingHours, locationa} = hotel;

// console.log( shopname, openingHours, locationa);

// const {
//    shopname : shopnameq,
//    openingHours : timeee,
//    locationa : locationa1
// } = hotel;

// console.log(shopnameq,timeee, locationa1);

// const { startermenu : starters = []} =  hotel;
// console.log(starters);
// const {Fri} = openingHours;
// console.log(Fri);
// const {  Fri : {open : o, close : c},} = openingHours;
// console.log(o, c);
//  const  {
//     Fri :{
//       open : aqqq=[],
//       close : bqqq= []
//     } 
//    }  = openingHours
//  ;
//  console.log(aqqq, bqqq);



