//Data structuring 
const hotel = {
    shopname : 'cheectinadu',
    locationa: 'Vellore , chennai, madurai ',
    categories : ['chetinadu', 'chines', 'tandoori', 'north indian', 'vegan', 'vegetarian'],
    startermenu: ['chicken crisp', 'dragon chicken', 'milagu varuval','Honey corn'],
    maincourse : ['Mutton Briyani', 'chicken briiyani', 'veg briyani', 'egg briyani'],
    order : function (startermenuindex, maincourseindex){
 
       return [this.startermenu[startermenuindex], this.maincourse[maincourseindex]];
    },
    openingHours : {
       Mon : {
          open : 9,
          close :22
       },
       Tue : {
          open : 9,
          close :22
       },
       Wed : {
          open : 8,
          close :21
       },
       Thurs : {
          open : 9,
          close :21
       },
      Fri : {
          open : 10,
          close :21
       },
       sat : {
          open : 8,
          close :24
       },
       Sun : {
          open : 0,
          close :24
       }
    },
 
    orderfunc : function({
       startermenuindex, mainmenuIndex, time, address
    }) {
       console.log(`Order Recived! ${this.startermenu[startermenuindex]} and 
       ${this.maincourse[mainmenuIndex]} to be deleivered at ${address} @ ${time} `)
 
    },

    prepareOmelete( ingredient1, ingredients2, ingredients3) {

        console.log(` Your Omlete is Made up with ${ingredient1} , ${ingredients2} and ${ingredients3}`)
    } // it is  aslo one property it is enaced ibjected function method
 
 };
 

 // DATA STRUCTURING OBJECTS
 function hotelslog({shopname, locationa}){
    console.log(` hotel name is ${shopname} and located @ ${locationa}`)
 }
 hotelslog(hotel);
 hotel.orderfunc({
    time: '10:02 am',
    address: "Rama sruthi buliding,  Near Bikaner Bakery, belapur. secotr-15.",
    startermenuindex : 2,
    mainmenuIndex : 3
 })
 
 
 // const {shopname, locationa} =hotel;
 // console.log(shopname, locationa);/
 
 
 
 // DATA STRUCTURINF ARRAYS
 const abcc = [1, 2,3];
 const aaa = abcc[0];
 const aaab = abcc[1];
 const aaac = abcc[2];
 
 console.log(['a', 'b', 'c']);
 console.log(aaa, aaab, aaac);
 
 const [ xx, xy,xz] = abcc;
 console.log(xx, xy, xz);
 
 
 const [ chetinadu, chinnes] = hotel.categories;
 console.log(chetinadu, chinnes);
 let[ cet1, , tand]= hotel.categories; // in aray if you skip in btwwen with of , it will negelate a element form calling array
 console.log(cet1, tand);
 
 let temp = cet1;
 cet1 = tand;
 tand = temp;
 console.log(cet1, tand);
 
 console.log(hotel.order(2,2));
 
 let [starter, maincouse] =hotel.order(2,2);
 console.log(starter, maincouse);
 
 // nested structure
 
 const nest = [1,2,3,4, [5,6]];
 const [i,,,k]= nest;
 console.log(i,k);
 const [i1, k0, , k1, [ , k2]] =nest;
 console.log(i1, k0, k1, k2);
 
 let [p,q,l, sk =10] =['w', 'ww', 'www'];
   sk = 15;
 console.log(p,q,l,sk);
 
 


 // DATSTRUCTURING OBJECTS
  const {shopname, openingHours, locationa} = hotel;
 
 console.log( shopname, openingHours, locationa);
 
 const {
    shopname : shopnameq,
    openingHours : timeee,
    locationa : locationa1
 } = hotel;
 
 console.log(shopnameq,timeee, locationa1);
 
 const { startermenu : starters = []} =  hotel;
 console.log(starters);
 const {Fri} = openingHours;
 console.log(Fri);
 const {  Fri : {open : o, close : c},} = openingHours;
 console.log(o, c);
  const  {
     Fri :{
       open : aqqq=[],
       close : bqqq= []
     } 
    }  = openingHours
  ;
  console.log(aqqq, bqqq);

//SPREAD OPERATOR
//  spread  operator (using for the rest of the elements)  
// ... ( 3 dots are  called the spread operator ) we can see on left side = asingnment operator

const ar1 = ['aa', "djjd", "dbsb", 'skjddj', 1,2,3,4,5];
 const newar1 = [ 1,2, ar1[0],...ar1];
 console.log(newar1);
 const [ aa, bb, cc, ...alll]= ar1;
 console.log(aa,bb,cc, alll);

const newmainMneuarr = [...hotel.maincourse, 'veg pulavo', 'Mandi special Briyani'];
console.log(newmainMneuarr);


// NOTE : spread operator is equal to destructuring . this opeartor also helps us to taken a element from array difference is it takes all the element without creating a new variable.
 
// Copy array

const mainMenuCopy = [...hotel.maincourse];
console.log(mainMenuCopy);

// joining 2 arrays by  using spread operator
const menucopy = [...hotel.maincourse, ...hotel.startermenu];
console.log(menucopy);

// Iterables are arrays, strings , maps, and not Objects

const dd00 = 'vivek';
const newdd00 = [...dd00,'','s'];
console.log(newdd00);
console.log(...dd00);
// spread operator wont work inside the template literals

// console.log(`${...dd00} is dd00`); /// you will get unexpected token
// const hoteldummy = {...hotel};
// console.log(hoteldummy);

// oreder omtelete calling here function written in hotel object

// const ingredients = [prompt('Omlete ingrident 1'),prompt('Omlete Ingredient2'),prompt('Omlete Ingrident 3')];
// console.log(ingredients);

const ingredients = ['4gges', 'Onions', 'Topinns as a chesse and Black Peppr Powder']
hotel.prepareOmelete(...ingredients);

// spread opreator for objects
 
const newrest =  {...hotel, foundedIn : 2012, Founder: 'Vivek & Co'}; // using spread operateor creating new hotel same date existing hotel and adding some propoerty
console.log(newrest);

const hotelCopy = {...hotel};
hotelCopy.foundedIn = '2015' // it will affect only in which variable it defined
console.log('hotel :',hotel.foundedIn); // we geting undefined we defined property founded in in hotel we put in NwHotel
console.log('hotelCopy :',hotelCopy.foundedIn);
console.log('New restaraunt :',newrest.foundedIn);

// rest pattern and parameters

// You can see on the right side of the = assignment operator
// SPREAD : LEFT OF =  , REST : RIGHT SIDE OF =


const arr1 = [1,2,3,... [4,5]];
console.log(arr1);

const [a,b, ...others] = [1,2,3,[4,5]];
console.log(a,b,others);

const [Mutton, ,veg , ...otherss ] = [...hotel.maincourse,...hotel.startermenu];
console.log(Mutton,veg, otherss);

//REST operator in OBJECTS

const { sat, ...othersss} = hotel.openingHours;
console.log(othersss);

// REST operator in Functions

const add1 = function(...obj){
    let tot = 0;
    for (let i = 0; i< obj.length; i++)
        tot += obj[i];
        
      
      console.log(tot);
    
   

};

add1(5,9,22,333);
// add1(5,9263,22,333);
// add1(533233,9,22,333223);
console.log(add1(5,9999,9843283,2484732));

const addarray = [23423,2344,1432,2178665674,124,1424];
add1(...addarray);


// && and ||  opeartor   short circuiting

// logical perator use any data type and it will return any data type

// short circuit is like if or opeartor find first truthy  value it will return

console.log(33 ||   'hello');// 33 first tuth value
console.log("hello" || 33); // hllo is the first truth value
console.log(''|| 'Jonas'); // jonas is the truthy value
console.log(true || 0); //true is the is truthy value 0 is false value 
console.log(undefined || null); // null is truthy value comparingly undfined


hotel.play = 'yes'; 
const game = hotel.plays ? hotel.play: 'Game not played';
console.log(game);

const  gamee = hotel.play || 'game not played '; 
console.log(gamee);


// AND operator  it wil return values it once condition gets false 

console.log( 0 && 'vivek');
console.log(327842 &&  'vivek');
console.log( 'hello' && 23 && null && 'jonas');


//  NULLISH COLLASING OPERATOR

// Nullish values are all null and undefined(NOT 0 or '')

 const gg = hotel.play || 'worng';
 console.log(gg);
 const ggg = hotel.plays ?? 'worng'; // first value get undefined or null then only next value will execute
console.log(ggg);


// LOGICAL ASSIGNMENT OPERATOR 
const rest1 = {
   name : "vivek",
   numberofGuests : null
}
const rest2 = {
   name : 'hhhh',
   owner : 'paul levisuq'
}


rest1.numberofGuests = rest1.numberofGuests || 80; // turly value will return
rest2.numberofGuests = rest2.numberofGuests ||40;
console.log(rest1);
console.log(rest2);

rest1.numberofGuests ||= 10;
rest2.numberofGuests ||= 80;
console.log(rest1);
console.log(rest2);

rest1.numberofGuests ??=10;
rest2.numberofGuests ??= 110; // nullish or  undefined
console.log(rest1);
console.log(rest2);

rest1.owner &&= '?';
rest2.owner &&= '?';
console.log(rest1, rest2);
console.log(rest1);



// challenge 1

const game1 = {
   team1 : 'Bayern Munich',
   team : 'Borrussia Dortmund',
   players : [
      ['Neur', 'pavard', 'Martinez', 'alaba', 'davies',
      'kimmich', 'gorettz','coman', 'muller', 'gnarby',
      'lewan'],
      ['burki', 'shculz', 'hummelz', 'akanji', 'weigl',
         'witsel', 'hazard', 'brant', 'sancho','gotz'
      ]

   ],
   score: '4:0',
   scored: ['lewan', 'gnarby','lewan','hummelz'],
   date : 'Nov 9th 2037',
   odds : {
      team1: 1.33,
      x: 3.25,
      team2 : 6.5
   },
   printGoals : function (...playersss) {
      for(let i=0; i<playersss.length; i++){

         let sum = 0;
         sum+=playersss.length;
      console.log(` Player Name : ${playersss[i]}  and Number of Goals ${sum}` );
      }
   }

}

const [player1, player2] = game1.players;
console.log("player 1 :", player1, 'player 2 :', player2);
const [ gk,...fieldplayers]= player1;
console.log( 'Goal Keeper team1:',gk, "Field Players team1s:", fieldplayers);
const allplayer= [...game1.players[0], ...game1.players[1]];
console.log('All player :',allplayer);

const player1final = [...player1, 'thiago','coutinho', 'perisic'];
console.log('team 1 final players :',player1final);
 const { team1 , x:draw, team2} = game1.odds; // x variable we remane using colon
 console.log("Team1 :",team1,"Draw :",draw,"Team 2 :", team2);

 game1.printGoals(...game1.scored);

 team1 > team2 && console.log('teame 1 more likely to win');
 team1 < team2 && console.log('team2 is more likely to win');

// FOR OF LOOP

const oderitem = [...hotel.startermenu, ...hotel.maincourse];

for (const item of oderitem) console.log(item);
for (const item of oderitem.entries()){
   // console.log(item);
   console.log(`${item[0] +1} : ${item[1]}`);
}

for(const[i, el] of oderitem.entries()){
   console.log(` Item No - ${i +1} :  ${el}`);
}


// enhanced object literals
const checkoutime = {
   mon:{enter: "10:30", exit:'7:00'},
   tue:{enter: "10:35", exit:'7:10'},
  wed:{enter: "10:40", exit:'7:15'},
   thurs:{enter: "10:20", exit:'7:10'},
  fri:{enter: "10:30", exit:'7:00'},
   sat:{enter: "10:30", exit:'7:00'},
   sun:{enter: "11:00", exit:'9:00'},
}

const moss = ['jsbfjh', 'qwjhwq']

const objj = {
   name: 'vivek',
   moss,// it is object matching property name exactly same outside we defined
   checkoutime1:checkoutime,// this is normally we defined property name someting value assign using respective ibject variable
   checkoutime // this is es6 feature enhanced onject literal we can only proprty exact name  of otside defined  object name
}
console.log(objj);


//  OPTIONAL CHAINING


if(hotel.openingHours && hotel.openingHours.Mon)
   console.log(hotel.openingHours.Mon.open)

 // with OPTIONAL CHAINING
 // nullish collapse opertor

 console.log('Monday hotel open time :',hotel.openingHours.Mon?.open); // ? USING THIS OPERATOR WE CAN ACCEES PROPERTIES IF HOTEL OPENINING HOURS EXISTS MEANS ONLY WE IT WILL GOT OPEN PROPERTY ACCESS
 console.log(hotel.openingHours.tue?.open); // if not exist we will get undefines instead not defined error

 const day1 = ['mon','tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];


 for( const day of day1) {
         const dummy = hotel.openingHours[day]?.open ??'we  closed today';
         console.log(`on ${day} we open @ ${dummy}`);
         
 }

 //methods
 console.log(hotel.order?.(2,1) ?? 'order not exist') // in this method in order func we are checking oreder(2,1) EXIST OR NOT

// arrays

const dadd = [{name: 'hhh', age : 36, designation : 'CEO'}];

console.log(dadd[0]?.name?? 'name and age not exist');

// properties

const prop = Object.keys(openingHours);
console.log(prop);

let opendays = `w are oprn @ ${prop.length}`

for(const day of prop) {
    opendays += `${day}`;
}
console.log(opendays);

// entries 

const ntry = Object.values(openingHours);
console.log(ntry);
// entire object

const etry1 = Object.entries(openingHours);
console.log(etry1);

for (const [key, {open, close}] of etry1){
    console.log( ` day is ${key} .we open @ ${open} and  close @${close} `);
}


const varaities = Object.entries(hotel.openingHours?.Sassssusn ?? 'sunday closed');
console.log(varaities);

for( const [key , open] of varaities){
   if(hotel.openingHours?.sun){
      console.log(`${key} shope is will open @ ${open} and closes @ ${close}`);
   }
   else {
      console.log(hotel.openingHours?.sun  ??' sunday we are closed' );
   }
   
}


// challenge 2

const game2 = {
   team1 : 'Bayern Munich',
   team2 : 'Borrussia Dortmund',
   players : [
      ['Neur', 'pavard', 'Martinez', 'alaba', 'davies',
      'kimmich', 'gorettz','coman', 'muller', 'gnarby',
      'lewan'],
      ['burki', 'shculz', 'hummelz', 'akanji', 'weigl',
         'witsel', 'hazard', 'brant', 'sancho','gotz'
      ]

   ],
   score: '4:0',
   scored: ['lewan', 'gnarby','lewan','hummelz'],
   date : 'Nov 9th 2037',
   odds : {
      team1: 1.33,
      x: 3.25,
      team2 : 6.5
   },
   printGoals : function (...playersss) {
      for(let i=0; i<playersss.length; i++){

         let sum = 0;
         sum+=playersss.length;
      console.log(` Player Name : ${playersss[i]}  and Number of Goals ${sum}` );
      }
   }

}

console.log(game2.scored);

 const scoreee = [...game2.scored]
 console.log(scoreee);

 //1
for(const [i, element] of game2.scored.entries()) {
   console.log(`Goal ${i+1} : ${element}`);

}

// 2
const calacod = {...game2.odds}
console.log(calacod)

const oddcalc = [{...game2.odds}]
console.log(oddcalc);

let oddds = Object.values(game2.odds);
let summ = 0;

for(const odd of Object.values(game2.odds)){ // By using Object.values() we can get te values of object
   summ+= odd;
   
   average = summ / Object.values(game2.odds).length;
}
console.log(average);

// 3.
 
for (const [team, value]of Object.entries(game2.odds)){
   const teamstr = team == 'x' ? 'draw' : `Victory ${game2[team]}`;
   console.log(`odd of  ${teamstr} ${value}`);
}


//SETS

// sets wont allow duplicte value

//SETS METHODS 

// .size
// .has();
// .add();
// .delete();
// .clear();
// .intersection();  // by using using we can intersect two array and we common values between two array.
// .difference() ;
// .symmetricDifference();

const orderset = new Set(['aaa', 'bbb', 'ccc', 'ddd', 'eeee', 'aaa', 'bbb', 'ccc', 'fff']);
console.log(orderset);
//Suppose in array ay duplicate value s present means while run or call time it will return it one time only.
// sets also iterable like array

console.log(new Set('vivek'));  // see in this string two v are prsent , but we defined using set so it wont return duplicate value.

console.log(orderset.size);
console.log(orderset.has('aaaa'));
console.log(orderset.has('aaa'));

console.log(orderset.add('sindhu +vivek'));
console.log(orderset);
orderset.delete('sindhu +vivek');
console.log(orderset);
// if we try access a element using index it wont work like arry
console.log(orderset[1]); // it will return undefined 

const orde11 = new Set(['aa', 'bb']);
orde11.clear();
console.log(orde11);

// sets also iterable like array

for (const od of orderset) console.log(od);



const duarr = ['hgv', 'jhq', 'wqjj', 'hgv', 'wqjj', 'jhq', 'sjj'];

let du1arr = new Set(duarr);
console.log(du1arr);
du1arr  = [...new Set(duarr)];
console.log(du1arr);
console.log(new Set(duarr).size);

// SET OPERATIONS

const staterveg1 = new Set(['rice', 'sambar', 'rasam', 'appalam', 'poriiya', 'mutton chuka', 'chicken chuka', 'paya']);
const staterNonveg1 = new Set (['briyani', 'kushka', 'rice', 'chicken gravy', 'muttonn gravy', 'chicken chuka', 'mutton chuka', 'paya']);

const sameitemof = staterveg1.intersection(staterNonveg1);
console.log(sameitemof);
console.log(typeof sameitemof);

const sameitemofarr = [...sameitemof];
console.log(sameitemofarr);


// we can convert array as set and we can convert set as array in this conversion method we can omit the duplicate  values in array
 const sameitemofunion = staterveg1.union(staterNonveg1);
 console.log(sameitemofunion);

 const hotlmenu = new Set([...staterveg1, ...staterNonveg1]);
 console.log(hotlmenu);


 let sameitemofdiff = staterveg1.difference(staterNonveg1);
 console.log(sameitemofdiff); //  differenc eof method will return unmatchd or unequal value of both array

 sameitemofdiff = staterveg1.symmetricDifference(staterNonveg1);
 console.log(sameitemofdiff); 

 console.log(staterveg1.isDisjointFrom(staterNonveg1)); // it will return a boolean value


// MAPS 

// Map stores values like like objects like key , values

const rest11 = new Map();

rest11.set('Name', 'Sinsviv'); //  byusing a .set() of we can add key and values 
rest11.set(1, 'Vellore Tamilnadu');
rest11.set('locate', 'close to chennai');

console.log(rest11);
rest11.set('cato', ['Butter Naan', 'Butter chicken']);
rest11.set('open', 11);
rest11.set('close', 10);
rest11.set(true, 'we are open @ 11 am');
rest11.set(false, 'we are close @ 10pm');

console.log(rest11.get('cato'));
console.log(rest11.get(1));
console.log(rest11.get(true));
console.log(rest11.get(false));

const time11 = 9;
console.log(rest11.get( time11 > rest11.get('open') &&  time11 < rest11.get('close')));  // In this result if we get a value true it will prit rest11. true's value else it will print false's value.
console.log(rest11.has(1));
rest11.delete('locate');
console.log(rest11.get('locate'));
console.log(rest11.has('locate'));
rest11.set('location', 'Melmoil Vellore near KV KUPPAM');
console.log( rest11.has('location'),`yes it loacted @`,rest11.get('location'));


const map133 = new Map([['ask a question', 'which is best programming language to learn...?'],
   [1,'c'],[2, 'java'], [3,'Javascript'], [4, 'angular']]);
console.log(map133); 

// convert object to map

console.log(Object.entries(openingHours));

for(const [key, value] of map133){
   if(typeof key === 'number' ) 
   console.log(`YOOUR EXEPCTED IS  ${key} - ${value}` );
}

// const user1 = Number(j('Input your text'));
// console.log(user1);
// const user2 = prompt('text your input')

// console.log(rest11.get(rest11.get('location') === user1));
// console.log( (user2 == 'location')? rest11.get('location') :'0');

// challenge 3


const gameEvents = new Map([
   [17, 'Goal'],
   [36, 'Substitution'],
   [47, 'Goal'],
   [61, 'Substitution'],
   [64, 'Yellow Card'],
   [69, 'Red Card'],
   [70, 'Substitution'],
   [80, 'Goal'],
   [92, 'Yellow Card']
]);

console.log(gameEvents);

//1

const events =  new Set([...gameEvents]);
console.log(events);

const event1 = new Set(gameEvents.values());
console.log(`event happend :`,event1);

// 2
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);

//3

console.log(`  An event happend  @ every ${90 / gameEvents.size}`);

const timess = [...gameEvents.keys()].pop();
console.log(`  An event happend  @ every ${timess / gameEvents.size}`);


// 4

for( const [key , values] of gameEvents){
   if(key <= 45)
   console.log(`[First half] event @ ${key}th Minute ${values} event happend`)
   else if(key >= 45){
      console.log(`[Second half] event @ ${key}th Minute ${values} event happend`)
   }

   
}


for (const [min, event] of gameEvents){
   let whichhalf = (min <= 45) ? 'FIRST' : 'SECOND';
    console.log(`[${whichhalf} HALF] ${min} : ${event}`)

   
}



// Working with strings
 const  rand= 'Hey bunny, I miss yu so much';
 console.log(rand[15]);
 console.log(rand[9]);
 console.log(rand[22]);
//  console.log(rand[11]);
 console.log(rand[12]);

 console.log(rand.length);

 // indexOf() an  lastIndexOf()
 console.log(rand.indexOf('s')); // it will return suppose if a string or character preseent at firstletter last indx of return second or last characer if searching charcer are samr
 console.log(rand.lastIndexOf('f'));  // true menas it will return index false mans it will return -1
  
// slice method
console.log(rand.slice(4));  // if we mentioned a single number that is starting posiiton of the string and upto end it will extract withou  altering a original string
console.log(rand.slice(0, 9));//  if we metioned a two number with comma frst number is starting position of the string and second is end position of the string it will stop execution before reaching secong number


console.log(rand.slice(10, 20));
console.log(rand.slice(0, rand.lastIndexOf(' ')));

console.log(rand.slice(-4)); // suppose if mentiond number is negative means it will start to extract from ending
console.log(rand.slice(5, -10)); // if esond valu is negative means extraction starts from reverse
console.log(rand.slice(-22, -5));


function seatchecker(seat) {
   let seats = seat.slice(-1);

   if(seats === 'A' || seats === 'F') {
      console.log('Fucker if you want window , pay 500 rupees ')
   } else{console.log(' You seat will wrsot seat dont come here after')}

   

}

seatchecker('11E');
seatchecker('12A');
seatchecker('12F');

console.log(new String ('Vivek'));
// toUpperCase() and toLoweCase()
const rand2 = 'Knock knock';
console.log(rand2.toLowerCase());
console.log(rand2.toUpperCase());
let hh = 'jAAna';
console.log(hh.toUpperCase());
let jj = hh.toLowerCase();
hh = jj[0].toUpperCase() + jj.slice(1);
console.log(hh)

let ruke = 'shabdjaIUUSUIS@GJHSAJ.COM \n';
let rukec1 = ruke.toLowerCase();

//trim();

let lukecrt = rukec1.trim();  // trim() method will remove unmated starting of the stringg and ending of the string and some \n like this letter also it will remove

console.log(lukecrt);
let sind = 'SindHU.GIDDALURU@gMail.com                   '
console.log(sind.toLowerCase().trim());

// replace();

let euroo = '10000E'
console.log(euroo.replace('E', '$')) // In replace() of inside of ('which charcter needs to replace', 'what character to place instead of removed character'))

let eme = 'e e e e e'
console.log(eme.replace(' ', '').replaceAll('e', 'a')); // replace() it will replac first matched thing onnly if you want to convert over ful string use replacAll()

let macha = 'All the passengers , please have a kind  attention, please steup away from yellow border near to train path';

console.log(macha. replace('border', 'line').replace('path', 'track'));


// Booleans                                   it will  retuen boolean result like true or flase

let dds = 'Sindhu';
console.log(dds.includes('i'));
// console.log(dds.has('i'));
let ai = 'GEMINI, CHATGPT, DEPSEEKER, CO-PILOT'
console.log(ai.includes('GEMINI'));
console.log(ai.startsWith('G'));

console.log(ai.endsWith('T'));

// split method

let split1 = `a+bautiful+view`;

console.log(split1.split('+'));
console.log('SINDHU GIDDALURU'.split(' '));

const [firstName, lastName]= 'Vivek+Govindaraj'.split('+');

console.log(firstName, lastName);

// join method
let nameee = ['Mr', firstName, lastName].join(' ').toUpperCase();
console.log(nameee.toLowerCase());


function Captialization (name) {
   let na = name.split(' ');
   const nameup = [];
    for ( const n of na) {
      //   nameup.push( n[0].toUpperCase() + n.slice(1));
       nameup.push( n.replace(n[0], n[0].toUpperCase()));
      
    }
    console.log(nameup)
   
}

Captialization('vivek govindaraj');
Captialization('soonil kumar');

// padding

let sins = 'sajkbjhs';
console.log(sins.padStart(25, '+'));  // it will result with 25 character of overall charater count
console.log(sins.padEnd(53, '*'))

// mask techique

function maskcard(numm){
   let str = numm +  '';
   let  last4digit = str.slice(-4);
   console.log( last4digit.padStart(str.length, '*'));
   // return last4digit.padStart(last4digit.slice(9), '*');
   
}
maskcard('123783333333');


// repeat

let prpose = ' i love you \n';

console.log(prpose.repeat(10));
 


// challenge

//underscore_Case
//  first_name
//Some_Variable
// calculate_AGE
//delayed_depature

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function(){
   const text = document.querySelector('textarea').value;
   console.log('input values from textara',text);  

   let rows = text.split('\n');
   console.log(rows);

   for( const [i, r] of rows.entries()){
      const [firstName, lastName] = r.toLowerCase().trim().split('_');
      const output = `${firstName}${lastName.replace(lastName[0], lastName[0].toUpperCase(''))}`;
      const paddedoutput = output.padEnd('20', ' ');
      console.log(`${output.padEnd('20')}${'*'.repeat(i+1)}`);
   }

})



 


































//FOR EACH METHOD  (it  will work like a for loop)

// const statments = [200, 450, -400, 3000, -650, -140, 70 , -140, 1300]

// // for(let moveme of statments){
// //    if (moveme > 0) {
// //       console.log(`Your deosited ${moveme}`);
// //    }else {
// //       console.log(`Your withdrawn ${moveme}`);
// //    }
// // }


// statments.forEach(function(movement) {
//    if (movement > 0){
//       console.log(`your deeposited : ${movement}`);
//    } else {
//       console.log(`You withdrawn : ${movement}`);
//    }

// });
// console.log('----------')
// // forEach () explain--> 0: function(200)....n : function(1300) it will execute upt specified length
// // forEach () we cant able to break in between function
// // in fuction call paarameter mentioning like function(elements, index, array) like that we have mention
// // elements represents which elementwe have to pass as argument 
// // index will indicate indexing  and array will represent arrays 

// statments.forEach(function(vall, i, arrs){
//    if (vall > 0 ) {
//       console.log(  ` your index is ${i} and element of value is ${vall} and arr is  ${arrs}`);

//    }
//    else{
//       console.log(  ` your index is ${i} and element of value is ${vall} and arr is  ${arrs}`);
//    }
// });

// // Map            using for forEach() 

// const currencies = new Map([['USD', 'United States Dollar'], // in Map it will acces vaalue using key : value it wont duplicate key : value
//                             ['EURa', 'Eurso'],
//                            ['INR', 'INDIAN RUPEES'],
//                            ['INR', 'INDIAN RUPEES'],
//                            ['EUR', 'Euro1']]);

// currencies .forEach(function(values1 ,key , map){
//    console.log(`${key}: ${values1}`);
// })

// //SET      // it we declar same value it return one time only it wont allow duplicate


// const curenxy = new Set (['USD','GDP','EURO', 'YUN', 'INR', ['FU', 'FU'], ['SAS', 'SUS']]);

// curenxy.forEach(function(value, key, set) {
//    console.log(`${key} : ${value}`);
// })





