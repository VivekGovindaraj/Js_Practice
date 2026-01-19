// //  working with arrays
// // Array Methods


// // starts here

const account1 = {
  Owner:"Vivek G",
  movements:[200,500,500,-600,1000,-132],
  interestRate: 1,
  Pin:1111,
  type:'Prememium'

}


const account2 = {
  Owner:"Sindhu G",
  movements:[22200,222,222500,-6020,122000,-1322],
  interestRate: 5,
  Pin:2222,
  type:'standard'

}


const account3 = {
  Owner:"soonil x",
  movements:[200,5020,2500,-6200,12000,-13222],
  interestRate: 9,
  Pin:3333,
  type :'Basic'

}



const account4 = {
  Owner:"Thulasi G",
  movements:[2100,1500,5200,-62200,10020,-1232,3724,2414717,1414274,-3742,-12481,82895,2583275,23275],
  interestRate: 3,
  Pin:4444,
  type: 'Prememium'

};


const accounts = [account1, account2, account3, account4]
// //  *****  SLICE  method    *********


// // slice will return a extracted array without altering original array . eg slice(2) slice sarts from 2 index of th array extract wiil end in end array. 

// // exraction will always from left to right // slice wont mutate original array



// let a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// console.log(a1.slice(1));
// console.log(a1.slice(3,4)); // (3, 4) first denotes startig index number of the array second number describe end inndex  position array it will give one values less

// console.log(a1.slice(-2)) // - means indexing will start from end of an arrays number will starts from -1.  -1  is last element of any array
// console.log(a1.slice(1 , -6)); 
// console.log(a1.slice(-6, -1));  // suppose if both value is a negative. first negative value on reverse of array  end number and  second number is on reverse of array starting number. its straight opposite to positive slice.
//  console.log(a1.slice());  // Empty slice will return full array.
//  console.log([...a1]);  // In empty array using ... spread operator we can extract full array.


//  //   ********** SPLICE **********

// // splice is same as a slice but here we can add or remove elements from original. Impact will be there in original array. but in slice it will extract from original array but it wont alter original array.
// // mutate original array
 

// remove

//  console.log(a1.splice(1));  // In this except startinng index of the array rest of the array will remove
//  console.log(a1); // you can see the result of the above splice.
//   let a2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//   console.log(a2.splice(1,2)) // in this first number is a strating index of the array and second number is upto which index of the array need to delete or remove
//   console.log(a2); // for abbove result b,c will remove rest of the array will be there.


//   console.log(a2.splice(-1)); // same like slice in splice also -1 is last index(element) of the array.
//   console.log(a2);
// console.log(a2.splice(4, -1));
// console.log(a2);
 
//add

// let fruits =['banana', 'Orage', 'Apple', 'Mango']
//  let removf = fruits.splice(2,2,"Lemon", "Kiwi");
// in this 2,2 is 2 index to two elements needs to remove and 3 and 4 "Lemon" and "Kiwi" needs to add that place

// // *******   REVERSE  ********
// let a3 =['a', 'b', 'c', 'd', 4, 6, 'd', 'g'];
// console.log(a3);  // originl array

// console.log(a3.reverse());  // reversing array

// console.log(a3); // immpacted original array


// //   ******* CONCAT **   

// let a4 = a2.concat(a3);
// console.log(a2, ' ' , a3);
// console.log(a4);

// console.log([...a4,...a3]);   // by using a spread operator we can concat an two array

// // ***** AT METHOD ************

// // at method will return a at(number) positioned indexed element.

// let a6= ['a', 'b ', 'c', 'd'];

// console.log(a6.at());
// console.log(a6.at(1));
// console.log(a6.at(3));

// console.log(a6[a6.length-1]); // it will return a last indexth element
// console.log(a6.length)

// console.log(a6.slice(-1));  // by using slice also w can return a last indexth element.

// console.log(a6.at(-1)); // using -1 at at() function we can return a last index oof the array

// console.log(a6.at(-3));

// console.log(`vivek`.at(2));


// // ******  FOR EACH METHOD    for Each()  ******* 

// const transaction = [100, 200, -100, -500, -10000, 1000000, 2829, -41483, 3234];

// for ( const i of transaction){
//   if( i > 0){
//     console.log(`Credited amount : ${i}`);
//   }
//   else {
//     console.log(`Debited amount : ${i}` ,`aboslute amoount: ${Math.abs(i)}`);  
//   }
// }


// transaction.forEach(function(transactionque){
//   if( transactionque > 0){
//     console.log(` for each - Credited amount : ${transactionque }`);
//   }
//   else {
//     console.log(` for each -Debited amount : ${transactionque}` ,` absolute amount : ${Math.abs(transactionque)}`);  
//   }

// });

// // transaction.forEach(function(200){});  in this index elemt we are passing as parameter above function transactionque is the argument parameter we passing each time as indexing elemnt

// // suppose if you index  number also 

// for( const [i, movement] of transaction.entries()){   // if you  want to iterate a array using index elemt use entries() instead of usinf forEach()

//   if( movement > 0){
//     console.log(`transacion ${i} : Credited amount : ${movement }`);
//   }
//   else {
//     console.log(`transacion ${i} : Debited amount : ${movement}` ,` absolute amount : ${Math.abs(movement)}`);  
//   }

// }


// // two ways itearte a array 1. forEach() 2. entries()

// // in entries(index, element) method  or for of looop (index, element)

// // forEach(element, index, array)  FOR EACH S HIGHER ORDER FUNCON IT ALWAYS NEEED CALL BACK FUNCTION

// console.log(`FOR EACH METHOD USING INDEX`)
// transaction.forEach(function(movements, index, array){
  
//   if( movements > 0){
//     console.log(`transacion ${index} : Credited amount : ${movements } - ${array.at(Math.abs(index))}` );
//   }
//   else {
//     console.log(`transacion ${index} : Debited amount : ${movements}` ,` absolute amount : ${Math.abs(movements)}`);  
//   }

// })


// // WHEN TO USE OF FOR EACH AND FOR OF  IF YOU WANT TO BREAK A LOOP USE FOR OF IN FOR EACH METHOD WE CANT BREAK A LOOP IT WILL RUN ENTIRE ARRAY

// // MAP METHOD

// const currencies = new Map([
//   ['INR', 'Indian Rupees'],
//   ['USD', 'UNITED STATES DOLLARS'],
//   ['EUR', 'EURO'],
// ])

// currencies.forEach(function(value, key, map){    // it is also like(value, index, array)
//   console.log(`${key} : ${value} `)
// })

// const currency = new Set(['USD', 'INR', 'EUR', 'YUN']);
//  console.log(currency, typeof currency, typeof currencies);

//  for(const [key, value,array] of currency.entries()){   // in sets key and value are same  
//   console.log(` ${key} : ${value}`)
//  }


//  for(const [key, value,array] of currencies.entries()){ 
//   console.log(` ${key} : ${value}`)
//  }

// currency.forEach(function(key, value){  // in sets key and value are same  
//   console.log(` ${key} : ${value}`)
// })


// // *******  MAP *********

// // Map method Map create an new array based on original array.. it is in used loop method.. its is similar to forEach method difference is it creates an new array  based on original array.
// // Map returns a new array containing a result of applying an operation on all original array elements.


// const account1 = {
//   Owner:"Vivek G",
//   movements:[200,500,500,-600,1000,-132],
//   interestRate: 1,
//   Pin:1111

// }

// const eurotoUSD =  80;

// const movementofUSD = account1.movements.map(function(mov){

//     return mov * eurotoUSD;

// })
// console.log(account1.movements)
// console.log(movementofUSD);





// // Eg. each element in array i want to multiply * 2

// // ******  FILTER   ********

// //  filter returns a new array that contains element passed by a specific condition.


// // const deposits = movements.filter( function(mov){
// // return mov > 0;
// // })

// // console.log(deposits);


// // const deposits1 = account1.movements.filter( function(mov){
// //   return mov > 0;
// //   })
  
// //   console.log(deposits1);
// // const depositssss = [];
// // for(const mov of account1.movements){
// //   mov > 0 ? depositssss.push(mov) : null;
// // } 

// // console.log(depositssss);

// const withdrwalss = account1.movements.filter(function(movement){
//    return movement < 0 ;});
//    console.log(withdrwalss);

//    for(const mov of account2.movements){
//       mov < 0 ? depositssss.push(mov) :" ";
//    }

// console.log(depositssss);



// //  *****   REDUCE ******

// // Reduce boils('reduce') all array elements down to one single array

// // in recude meethod an agument will wrk as variable it hold the value.


// // const balacce = account1.movements.reduce(function(acc,val,i,array){ // here acc is accumlator arguments will store the value like alreeady added value 
// //   console.log(`iteration ${acc} + ${acc}`)
// // return acc + val;
// // },112);
// // console.log(balacce);

// // let bb = 0;
// // for(const [i,mov] of account2.movements.entries()){// if you want index also use entries
// //   bb = bb + mov;
// //   console.log( `i${i} , ${mov}`)
// // }
// // console.log(bb);

// // ***********        FIND METHOD          ***********

// // find method  it gives an call back function .. it will return either true or false....like filter it wont return a array..it return first element in the array it satisfies the specifc condition.

// // const firstWithdrwawl =  movements.find( mov => mov < 0); 

// // console.log(firstWithdrwawl)


// // ********   Find Index method **************

// // it will return index number number of finding element


// // *********   findLast() *****


// console.log(movements);
// const lastwithdrwal = movements.findLast( function(movements){
//   if(movements < 0) return movements
// })
// console.log(lastwithdrwal);

// // ***** findIndex()


// // ******** findLastindex()


// //******** Includes *******

// // console.log(account1.movements.includes(1400));

// // it will true or false based on the condition, here checks the equality// here like present or not

// // ****   some *******

// // *****   some

// // it will also return true or false based on the condition

// // const depo = account1.movements.some(movements => movements > 500);
// // console.log(depo);



// // ************ every ***********


// // in every metod passing array should have pass the particular condition and it will return true or false

// // console.log(account1.movements.every(movements => movements > 0));

// // ******** flat()    ********

// // flat method innested array we can get as a single array

// // let arrnes = ['a','b', 'c', [1,2,3,4,5], 'aa', 'bb', ['dd']];
// // console.log(arrnes.flat());



// //******** flatMap ()  ********/

// // it is a combination of flat and map method combination method

// let toto1 = accounts.flatMap(accounts => accounts.movements).reduce((acc,mov) => acc+= mov, 0)
// console.log(toto1);



// // ************ Sorting arrays ********
// // the sort() method is used to sort the elements of an array. By default, it converts elements to strings and sorts them alphabetically, which often isn't what you want for numbers.

// // with strings
// const ow = ['aa', 'cc', 'ff','bb', 'kk'];

// console.log(ow.sort());


// // ************* array  grouping ***********

// // object group by 

// // by using array grouping we can gourp an array  by their property // for example we can have multipl bank accounts it has muliple types of account we group account by acoount type
// let aaaa = [11, 22,-22, -288, 289892, -127128]
// const groupedMovements = Object.groupBy(aaaa,  aaaa => aaaa > 0? 'deposit' :'withdrawl');
// console.log(groupedMovements);



// let checkactivity = Object.groupBy(accounts, accounts => {

//     let movcount = accounts.movements.length;

//     if(movcount >= 8) return 'Very Active';
//     if(movcount >= 4) return  'Active';
//     if(movcount >= 1) return 'Moderate';
//     return 'Inactive';
// });

// console.log(checkactivity);


// let acs = Object.groupBy(accounts, accounts => accounts.type)
// console.log(acs);

// // way of creating arrays

// let aass = [22,23,22,44,,67,8];

// let asd = new Array(1,2,4,7, 5,3322);
// console.log(aass,asd);


// // empty arrays
// let y = new Array(5);

// console.log(y);
// console.log( y.map( () => 5));



// // *********** fill arrays **********

// // by using fill arrays method we can fill element at speicifed index

// y.fill(1,4);
// console.log(y);// here y is an empty arrays in this array at index 4  , 1 will be filled // keep it inn mind here index starts at 0.

// y.fill(8, 2,3);

// console.log(y); // in this at index 2,3 . number 8 will be filled.

// //****************  Array.from      *************


// let pp = Array.from({ length:7 } , () =>1);
// console.log(`pp`,pp);


// // ********  reverse methods andd toReversed()

// // toReversed() is method to reverse a array in this method the oiginal wont get affected it will remains thhe samrr, but .reverse) it will affct the original array.

  
// console.log(account1.movements);
// let reversedMov = account1.movements.reverse();
// console.log(reversedMov);
// console.log(account1.movements);
// reversedMov = account1.movements.slice().reverse();
// console.log(reversedMov);
// console.log(account1.movements);
// console.log(account1.movements);
// let rs = account1.movements.toReversed(); // to reversd is method to reverse a array in this method the oiginal wont get affected it will remains thhe samrr, but .reverse) it will affct the original array.
// console.log(account1.movements);  
// console.log(rs);


// // toSorted() (sort)and , to spliced (splice)

// // same like reverse() , sort() and splice() also affect the original array bu sing the toSorted() and to Splice() it wont affect the original array it will give an new result.

// // ****** with() ******

// // by using with() method we can update an indexed element value of the array with affect original array ..it will new array

// let movsss =[1,3,354,654544,665465563465,6455]
// console.log(movsss);
// movs[3] = 0;
// console.log(movsss);







// which array method is used to use

// *****  to mutate original array ******

// 1)**Add to original

// .push() end
// .unshift() (start)

// 2) **remove from original

// .pop() end

// shift() start

// .splice() any

// ** 3) others

// .reverse()
// .sort()
//.fill()   
// above metioned all array method will affect the original array

// these methods mostly to be avoided

// ******* A new based original array *******

//  1)Most straight forward method is map() method

// .map()  is looped over all array elment and gives an new array. it will give same length original array

//  2) . filter    is used to filtering using using condition.


//  3) taking portion of original

// .slice()  

//  4) with one item replaced

// with()

// 5) flattend

// .flat()
// .flatMap()


// 6)reversed

// toReversed()

// 7)sorted

// toSorted()

// 8)with deleted item

// .toSpilced()

// 9)joining two arrays

// .concat()

// ******   An array  index ******

// 1) Based on value

// .indexOf()

// 2) Basd on test condition

// .findIndex()
// .findLastIndex()

// *******  An array element **

// 1) Based on test condition

// .find()
// .findLast()

// 2) Based on position 

// at()


// ******  Know if array includes  // this method will return boolean values

// 1) Based on value

// .includes()

// 2) Based on test condition

// .some()

// .every()

//  *******  A new String ****

// join()

// ******* To transform to value

// .reduce()                // Boils down array to single value of any type : number, string, bollean, or even new array or object // ith has accumalation


//  ***** To just loop Array  ***


// forEach()     // it doesnt create a new array, just loop over it.



// More Array tools and techinque

// *** 1)Grouping an array by categories

// Object.groupBy()

// ***  2)Creating an array from scratch

//Array.from()

// ** 3)creatig a new array from stratch with n empty position ( use togter with .fill method)

// new Array(n)

// ** 4)joining 2 or more arrays
 //  [...arr1, ...arr2]

// ** 5)creating a new arraycontaing unique values from arr

// [ ... new Set(arr)]

// ** 6) crating a new array conating unique elements that are present in both arr1 and arr2

// [...new Set (arr).intersection(new Set(arr2))]


// Array method practices
//1.
const bankDepositssum = accounts.map( acc => acc.movements ).flat().filter( function(mov){ return mov > 0 }).reduce( (acc, mov) => acc+=mov,0 );
const bankDepositssum1 = accounts.flatMap( acc => acc.movements).reduce( 
    (sum, cur) =>
         { sum[ cur > 0 ? 'totaldep': 0 ] += cur; return sum}, {totaldep :0}
)

// map() is used for to retun all tranaction it doesny affect original array, retun an new array
// flat() is used merge all the array // in addition flatMap() above using function
// filter() is used to get postive number
// reduce () is used to get tottal all the array

console.log(bankDepositssum);
console.log('reduce total :',bankDepositssum);


// 2.

let numofDeposit1000 =  accounts.flatMap( acc => acc.movements).filter( mov => mov >=1000).length;
// using reduce()
let numdepo1000 = accounts.flatMap( acc => acc.movements).reduce( (count, mov) => ( mov >= 1000) ? count+1 : count, 0);
console.log(numofDeposit1000);

console.log(numdepo1000);
// prefix  ++ operator
let rr = 10;
console.log(++rr);
console.log(rr++);
console.log(rr);

// 3.


let sums = accounts.flatMap( acc => acc.movements).reduce( (sums, curr) => {
    curr >0 ? (sums.deposits += curr) : (sums.withdrawl += curr) ;
    return sums;
},{ deposits : 0, withdrawl : 0});

console.log(sums);
let sums1 = accounts.flatMap( acc => acc.movements).reduce( (sums, curr) => {
    sums[ curr > 0 ? 'deposits' : 'withdrawl'] += curr;
    return sums;
},{ deposits : 0, withdrawl : 0});
console.log(sums1);


// 4.

// this is an nice title -> This Is An Nice Title

let titlecase = function(title){

    let exception = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'is'];

    let tc = title.toLowerCase().split(' ').map( word => exception.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
    return tc

    
}
console.log(titlecase('this is an nice title'));





// challenge 5

// Test Data
// 1.
const dogs = [
  { weights:22, currFood:250, owners:['Alice', 'Bob']},
    { weights:8, currFood:200, owners:['Matida']},
  { weights:13, currFood:275, owners:['Sarah','John','Leo']},
    { weights:18, currFood:244, owners:['Joe']},
      { weights:32, currFood:340, owners:['Michael']},
];

 dogs.forEach( dog => dog.recFood = Math.floor(dog.weights ** 0.75 * 28 )); // Mtah.floor() will return full valuu
console.log(dogs);

// By using forEach() method we simply lop over an array here in dogs array i creating an new property as a recFood and in that property i just adding each dogs food 

//  2. finding sarah dog recfood weight much or lite

let sarahdog = dogs.find( dog => dog.owners.includes('Sarah'));

console.log(sarahdog,);
// find is use to find single value and first value its matches
console.log(`Sarah dogs food wight is ${ sarahdog.currFood > sarahdog.recFood ? 'too Much' : 'Lite'}`)


// 3. find all the ownners who dogs are recfood weight is more and lite

let ownertm = dogs.filter( dog => dog.currFood > dog.recFood ).flatMap( dog => dog.owners);
let ownertl = dogs.filter( dog => dog.currFood < dog.recFood ).flatMap( dog => dog.owners);
// filter() i sused to find multiple value and all the values passes by a specific condition
console.log(ownertm);
console.log(ownertl);

// 4.
console.log(`${ownertm.join(' ')}'s dogs are eating too much`)
console.log(`${ownertl.join(' ')}'s dogs are eating too low`)

// 5.
console.log( dogs.some( dog => dog.currFood === dog.recFood ));
console.log( dogs.filter( dog => dog.currFood === dog.recFood ).flatMap(  dog => dog.owners) );

// some() is used to find value atleast one dog curfood has recfood for this we some method find dogs arrau has some curfood = recFood
// filter to find value and map() is used to fid retrive value


// 6.

console.log( dogs.every( dog => dog.currFood > dog.recFood * 1.1 && dog.currFood > dog.recFood * 0.9 ));

// 7.
 console.log( dogs.filter(dog => dog.currFood > dog.recFood * 1.1 && dog.currFood > dog.recFood * 0.9).length)
 //8.


 const dogsGroupByPortion = Object.groupBy( dogs, dog => {
  if(  dog.currFood > dog.recFood){
    return 'Too Much'
  }
  else if(  dog.currFood < dog.recFood){
      return 'Lite'

  }
   else if(  dog.currFood === dog.recFood){
      return 'coorect'

  }
 })

 console.log(dogsGroupByPortion);


 //  9.

 const dogsGroupedByowners = Object.groupBy ( dogs , dog => 

   `${dog.owners.length} -ownerss` );
 console.log(dogsGroupedByowners);

 // 10.


 const dogSort = dogs.toSorted( (a, b) => a.recFood - b.recFood , 1);

 console.log(dogSort);






























