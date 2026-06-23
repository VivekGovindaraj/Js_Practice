// starts here

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

// Elements

const labelWelcome = document.querySelector('.welcomemsg');
const labeDate = document.querySelector('.date');
const labelBalance = document.querySelector('.totalbalance');
// summary 
const labelSumvalueIn = document.querySelector('.summaryvaluein');
const labelSumvalueOut = document.querySelector('.summaryvalueout');
const labelInterest = document.querySelector('.summaryinterest');


// timer 
const labelTimer = document.querySelector('.timer');

// dashboard 
const dashboard = document.querySelector('.dashboard');

// movements
const movementsContainer = document.querySelector('.movements');

// Button
const loginBtn = document.querySelector('.loginbtn');
const transferBtn = document.querySelector('.transferbtn');
const loanrequestBtn = document.querySelector('.requestbtn');
const closeAcBtn = document.querySelector('.okbtn');

const sortBtn = document.querySelector('.btnsort');

// user inputs login, tranfer to, amount, pin etc.

const userlogin = document.querySelector('.userlogin');
const loginpin = document.querySelector('.userpin');
const transferto = document.querySelector('.forminputto');
const transferamount = document.querySelector('.forminputtransferamount');
const loanamount = document.querySelector('.forminputloanamout');
let closeuserid = document.querySelector('.forminputcloseruserid')
let  closeuserpin = document.querySelector('.forminputcloseruserpin');


let dateasofnow = new Date()
let datee = `${dateasofnow.getDate()}` + `/` + `${dateasofnow.getMonth() + 1}` + `/` + `${dateasofnow.getFullYear()}`;

labeDate.textContent = datee;


const displayMovements = function(movements) {

    movementsContainer.innerHTML=''
    movements.forEach(function(movement, i){
        
        
        const movementtype = (movement > 0) ? 'deposit' : 'withdrawl';
        const datetoday = new Date();
          const  datetodays= `${datetoday.getDate()}/${datetoday.getMonth() + 1}/${datetoday.getFullYear()} - ${datetoday.getHours() }:${datetoday.getMinutes()}`

        const html = `<div class="movementsrow">
                        <div class="movementtype movementtype${movementtype}">${i+1} ${movementtype}</div>
                        <div>
                        <span class="movementdate">${datetodays}</span>
                       
                        </div>
                        <div>
                         <span class="movementvalue"> $${movement}</span>
                        </div>
                     </div>`
        console.log(html);

        movementsContainer.insertAdjacentHTML('afterbegin', html)

    });

}

// displayMovements(account1.movements);


// User Name    creating username using map

const UserName = function(user){

    const username1 = user.toLowerCase().split(' ').map( 
    function(name){
        return name[0]
    }).join('').toUpperCase();
    return username1;
};

console.log(UserName(account1.Owner));


// const CreateUserName = function(accs){
//     accs.forEach(function(accts){
//         accts.username = accts.Owner.toLowerCase().split(' ').map(function(usrnm){
//             return usrnm[0];
//         }).join('');
//     })

// }

// CreateUserName(accounts);
// console.log(accounts);
// console.log(account1);

const createusername = function(account){
    account.forEach(function(accs){
        accs.userName = accs.Owner.toLowerCase().split(' ').map(function(usnr){
                                                                     return usnr[0];
                                                                         }).join('');

    });
}

createusername(accounts);

console.log(accounts);


// Total Balance calclation                 using rduce
const currentBalance = function(movements){
    
    const balance1 = movements.reduce(function(acc, value, i , array){
        console.log(`${i}, ${value}`)
        return acc += value;
    })
    // console.log(balance1)
    // return balance1;
    labelBalance.innerHTML = (` ₹ ${balance1} `);
}
// currentBalance(account1.movements);

// In and out calaclation
const  calclationSummary = function(movements){

    // Debit calclation
    const incoming = movements.filter( function(mov){
        return mov > 0
    }).reduce(function(acc,  movements){
        return acc + movements;
    })

    labelSumvalueIn.innerHTML = `${incoming} $`  // Incoming calculation
    

    // Withdrwal calculation

    const outgoing = movements.filter( function(mov) {
        return mov < 0
    }).reduce(function(acc, movement){
        return acc + movement
    })
    
    labelSumvalueOut.innerHTML = `${Math.abs(outgoing)} $`;  // here math.absolute will give postive integer

    // Intrest calculation

    const interest = movements.filter(function(movement){
        return movement > 0
    }).map(function(movement){
        return ( (movement * 1.2)/ 100);
    }).reduce(function(acc, movement){   // acc is used to store added value if you have visit reduce array method for better clarity
        return acc+  movement
    })
    
    labelInterest.innerHTML = `${interest}$`



    return incoming, outgoing, interest;
}
// calclationSummary(account1.movements);


// Event starts

// Create login ID and find login ID

let currentAccount;
let timer;

// Fake login



let updateUI = function(acc){          /// here we update ui update for tranacti  balance summary updating for each tranaction so i declared variable outside herw i just re assingned.
        // Display Movements
    userlogin.value = '';
loginpin.value = '';

        
        const displayMovements = function(movements, sorted) {


            movementsContainer.innerHTML='';
            
            let movss = sorted?movements.slice().sort((a,b) => a-b) : movements; 
            console.log(`Sorted arrays :`,movss);
            movss.forEach(function(movement, i){
               
                
                const movementtype = (movement > 0) ? 'deposit' : 'withdrawl';
                let datetoday = new Date();
                  let  datetodays= `${datetoday.getDate()}/${datetoday.getMonth() +1}/${datetoday.getFullYear()} - ${datetoday.getHours() }:${datetoday.getMinutes()}`
        
                const html = `<div class="movementsrow">
                                <div class="movementtype movementtype${movementtype}">${i+1} ${movementtype}</div>
                                <div>
                                <span class="movementdate">${datetodays}</span>
                               
                                </div>
                                <div>
                                 <span class="movementvalue"> ₹ ${movement.toFixed(2)}</span>
                                </div>
                             </div>`
                console.log(html);
        
                movementsContainer.insertAdjacentHTML('afterbegin', html)
        
            });
        
        }
        
        displayMovements(currentAccount.movements);

        

        // Display Balance




 

         // Total Balance calclation                 using rduce
         const currentBalance = function(curAcc){
                
            const balance1 = curAcc.movements.reduce(function(acc, value, i , array){
                console.log(`${i}, ${value}`)
                return acc += value;
            })
            // console.log(balance1)
            // return balance1;

            currentAccount.balance = balance1; // here we crating a newobject to accounts 
            labelBalance.innerHTML = (` $ ${balance1} `);
        }
        currentBalance(currentAccount);


        // Display Summary



           

        // In and out calaclation
        const  calclationSummary = function(curAcc){

            // Debit calclation
            const incoming = curAcc.movements.filter( function(mov){
                return mov > 0
            }).reduce(function(acc,  movements){
                return acc + movements;
            })

            labelSumvalueIn.innerHTML = `${incoming.toFixed(2)} $`  // Incoming calculation  
            

            // Withdrwal calculation

            const outgoing = curAcc.movements.filter( function(mov) {
                return mov < 0
            }).reduce(function(acc, movement){
                return acc + movement
            })
            
            labelSumvalueOut.innerHTML = `${Math.abs(outgoing).toFixed(2)} $`;  // here math.absolute will give postive integer

            // Intrest calculation

            const interest = curAcc.movements.filter(function(movement){
                return movement > 0
            }).map(function(movement){
                return ( ((movement * curAcc.interestRate)/ 100));
            }).reduce(function(acc, movement){   // acc is used to store added value if you have visit reduce array method for better clarity
                return acc+  movement
            })
            
            labelInterest.innerHTML = `${interest.toFixed(2)}  $`



            return incoming, outgoing, interest;
        }


        calclationSummary(currentAccount);
    }




loginBtn.addEventListener('click', function(e){
    e.preventDefault();



    currentAccount  = accounts.find(
        account => account.userName === userlogin.value
    )


    if(currentAccount?.Pin  === Number( loginpin.value)){
        console.log('login success');

        loginpin.value =''
        


        // Display UI Message


        labelWelcome.innerHTML = `Welcome Back...! ${currentAccount.Owner}`
        dashboard.style.opacity = 1;
       

    

    updateUI(currentAccount);  // here i calling the function for updating the ui after all the calculation
    console.log(currentAccount);

     if (timer) clearInterval(timer);

    timer = startLogoutTimer();


        }
        else{
            console.log(`CHECK USER ID : ${currentAccount.userName} and Entered pin is ${loginpin.value}`)
        }

            console.log('login', currentAccount);



});


// Transfer amount from one account to anoher account

transferBtn.addEventListener('click', function(e){
    e.preventDefault();

    let amount = Number(transferamount.value);
   
    let recvacc = accounts.find( account => account.userName === transferto.value );
    console.log(amount,recvacc);

    transferamount.value = '';
    transferto.value = '';

    if(amount >0 && recvacc && currentAccount.balance >= amount && recvacc?.userName !== currentAccount.userName){
        // here we are checking conditiion balance must be greater than 0 annd receiver account is true account or existig account  current account is greater than entered amount and entered user name is not current account account user name.
        // if it all true  we will amount to mentioned account

        currentAccount.movements.push(-amount); // we are pushing - negative entered amount to current account for deducting and tranactions
      
      
        recvacc.movements.push(amount); // here we are pushing a movement to receiver account and and adding balance to receving accounts and + transaction to receiver account

        updateUI(currentAccount);

   
    }
});

// loan request

loanrequestBtn.addEventListener('click', function(e){
    e.preventDefault();

    const amount = Number(loanamount.value)
    

    if(amount > 0 && currentAccount.movements.some(movements => movements >= amount *0.1)){

        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    }
    loanamount.value = '';
})






// close account

closeAcBtn.addEventListener('click', function(e){
    e.preventDefault();


    if(closeuserid.value === currentAccount.userName && Number(closeuserpin.value) === currentAccount.Pin){
        
        // how to find index position of the enter user name
        let index = accounts.findIndex(accounts => accounts.userName === currentAccount.userName);
        console.log(index);


        // deleting account     ----------> using splice

        accounts.splice(index,1)   //  index is return from function and 1 is 1 element we want to remove

        dashboard.style.opacity = 0;

        console.log('Account close sucessfully.......');

        closeuserid.value =  closeuserpin.value ='';

    }
    else{
        console.log(`false`)
    }

});

// sorting
let sorted ;

sorted = false;

sortBtn.addEventListener('click', function(e){

    
    e.preventDefault();

    console.log(currentAccount.movements);
    displayMovements(currentAccount.movements,  !sorted);
    
    sorted = !sorted;

    sortBtn.textContent = sorted ? 'Unsort' : 'Sort';



});


const startLogoutTimer = function () {
  let time = 300; // 5 minutes

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);

      labelWelcome.textContent = 'Login to get started';
      dashboard.style.opacity = 0;
    }

    time--;
  };

  tick();

  const timer = setInterval(tick, 1000);

  return timer;
};























 





























































// challenge 1

// const julias = [3,5,2,12,7];
// const kates = [4,1,15,8,3];

// function dogage(age) {
//     if(age > 3){
//         console.log(`Dog is  an adult  :${age}`)
//     }
//     else{
//         console.log(`Dog is an  puppy : ${age}`)
//     }

// }
// dogage(julias);


// const checksdog = function(julias, kates){
//     let fulldog = julias.concat(kates);
//     console.log(fulldog)

//     fulldog.forEach(function(dog, i){
//         if(dog >= 3){
//             console.log( `Dog number ${i+1} is ${dog} year old and is adult.`)
//         }
//         else{
//             console.log( `Dog number ${i+1} is ${dog} year old and is puppy.`)
//         }
//     })
// }  

// checksdog(julias,kates)

// checksdog([9,16,6,8,3], [10,5,6,1,4]);

// // Map
//  // currency conversion
// const eurotoUSD =  80;

// const movementofUSD = account1.movements.map(function(mov){

//     return mov * eurotoUSD;

// })
// console.log(account1.movements)
// console.log(movementofUSD);

// const movementsUSDforloop = [];

// for(const mov of account1.movements)
// {
//      movementsUSDforloop.push(mov *  eurotoUSD);
// }
// console.log(movementsUSDforloop);

// const movdesc = account1.movements.map(
//     function(value, index, array){
//         if(value > 0){
//             console.log(`Movement ${index +1} . You Deposited ${value}`);
//             return  `Movement ${index +1} . You Deposited ${value}`
          
//         }
//         else{
//             console.log(`Movement ${index +1} . You Withdrawl ${value}`);
//             return `Movement ${index +1} . You Withdrwal ${Math.abs(value)}`
            
//         }
//     }
// )

// console.log(movdesc);


// const deposits = account1.movements.filter( function(mov){
//     return mov > 0;
//     })
    
//     console.log(deposits);
// const depositssss = [];
// for(const mov of account1.movements){
//     mov > 0 ? depositssss.push(mov) : null;
// } 

// console.log(depositssss);

// const withdrwalss = account1.movements.filter(function(movement){
//      return movement < 0 ;});
//      console.log(withdrwalss);

//      for(const mov of account2.movements){
//         mov < 0 ? depositssss.push(mov) :" ";
//      }

// console.log(depositssss);






// accumlator -> snowball

// const balacce = account1.movements.reduce(function(acc,val,i,array){ // here acc arguments will store the value like alreeady add value
//     console.log(`iteration ${acc} + ${acc}`)
//  return acc + val;
// },112);
// console.log(balacce);

// let bb = 0;
// for(const [i,mov] of account2.movements.entries()){// if you want index also use entries
//     bb = bb + mov;
//     console.log( `i${i} , ${mov}`)
// }
// console.log(bb);

// maximum using redue
       
// const maxval = function(mov){
//     const valll = mov.reduce( (acc, val, i) => val> acc ? val : acc
        
//     //     function(acc, val, i){
//     //     if(val> acc){
//     //         acc = val;
          
//     //         return acc= val;
            
//     //     } else{
//     //         acc= acc; 
//     //         return acc;

//     //     }
//     // })
// )
//     return valll;
// }
//  maxval(account1.movements);
//  console.log(account1.movements)
//  console.log(maxval(account1.movements));

//  const maxxx = function(mov){

//     for(const [ i, val, array,] of mov.entries()){
//         if(val >  ){
//             return val
//         }
//         else{
//             return array
//         }
//     }
    
//  }
//  console.log(maxxx(account1.movements));


// challenge 2


// const calcAverageHumanAge = function(dogages){
// let doghumanage = dogages.map(function(age, i){
//     if( age <= 2){
//         return 2* age;

//     }
//     else if( age > 2){
//        return 16 + age *4
//     }
// })




// console.log(doghumanage);

//     const doglessthanHumanage = doghumanage.filter( function(doghumanage, i){
//         if( doghumanage < 18){
//             console.log(`dog ${i}  age is only ${doghumanage} years old`)
//             return doghumanage;
        
//         }

//     })

    
//     console.log(doglessthanHumanage);

//     const avgadultdogage = doghumanage.filter(function(doghumanage, i){
//         if (doghumanage > 18){
//             return doghumanage
//         }
//     })
//     console.log(avgadultdogage);

//     let avgadultdogage1 = avgadultdogage.reduce(function(acc, val, i){
//         acc += val;
//         return acc
        
//     })
//     console.log(avgadultdogage1);

//     let avg1 = Number(avgadultdogage1) /avgadultdogage.length;
//     console.log(avg1) ;

   

// }

// calcAverageHumanAge([5,2,4,1,15,8,3]);
// calcAverageHumanAge([16,6,10,5,6,1,4]);

// const reagecal = dogage => dogage.map( age => (age <= 2 ) ? (age*2) : (16+age*4)).filter(age => age >= 18 ).reduce((acc, age, i , arr) =>  acc + age / arr.length, 0);

// console.log(reagecal([5,2,4,1,15,8,3]));
// challeng 3

// const arrowcalcAverageHumanAge =function(dogage){
// let age = dogage.

// }



// chaining method //pipeline

// function conversionusd(mov){
// let totaltoUsd = mov.filter( mov => mov>0).map( function(mov){
// return mov*1.1
// }).reduce((acc, mov) => acc+ mov);
// return totaltoUsd
// }
// console.log(conversionusd(account1.movements));


// // challenge 3  ends

// // Find Method

// const firstWithdrwawl =  account1.movements.find( mov => mov < 0);  // in find it return a first element in the array which satisfies the mentioned condition .it wont return whole array.

// console.log(account1.movements);
// console.log(firstWithdrwawl);

// const acc= accounts.find(accc => accc.Owner === 'Sindhu G');
// console.log(acc);
// console.log(accounts);

// loginpin.addEventListener('keyup', function(){
//     this.value = '*';
// })
// 

// *********   findLast() *****

// console.log(account1.movements);
// const lastwithdrwal = account1.movements.findLast( function(movement){
//   if(movement < 0) return movement
// })
// console.log(lastwithdrwal);

// const lastlargemovvementsindex = account1.movements.findLastIndex( function(movement){
//     if(movement > 999){
       
//         return  movement;
//     }
  
  

// })
// console.log(lastlargemovvementsindex);
// console.log(`your largest movement is ${lastlargemovvementsindex} ago.`);


// //******** Includes *******
// //  equality
// console.log(account1.movements.includes(1400));

// // *****   some

// // it will also return true or false based on the condition

// const depo = account1.movements.some(movements => movements > 500);
// console.log(depo);

// // ************ every ***********


// // in every metod passing array should have pass the particular condition and it will return true or false

// console.log(account1.movements.every(movements => movements > 0));


// // ******** flat()    ********

// // flat method innested array we can get as a single array , but it goes to one level deap

// let arrnes = ['a','b', 'c', [1,2,3,4,5], 'aa', 'bb', ['dd']];
// console.log(arrnes.flat());


// let arrnes1 = ['a','b', 'c', [1,['ss', 'dd', ['asa', 'asjsajnsa', [1,23,44,32423,['das', 'dasds']]]],3,4,5], 'aa', 'bb', ['dd']];
// console.log(arrnes1.flat(1111)); //  flat(number) number defines depth of flating the array it will be 1,2,3...n

// let totmovements = accounts.map( accounts => accounts.movements)

// console.log(totmovements);
// let totmovementsarr = totmovements.flat();
// console.log(totmovementsarr);
// let tottbalance = totmovementsarr.reduce((acc, movements) => acc+movements);
// console.log(tottbalance);

// let toto = accounts.map(accounts => accounts.movements).flat().reduce((acc,val) => acc +val, 0)
// console.log(toto);



// //******** flatMap ()  ********/

// // it is a combination of flat and map method combination method

// let toto1 = accounts.flatMap(accounts => accounts.movements).reduce((acc,mov) => acc+= mov, 0)
// console.log(toto1);



// // challenge 4

// const breeds = [
//             {
//                 breed:"German Shepherd",
//                 averageWeight:32,
//                 activities:['fetch', 'swimming'],
//             },
//             {
//                 breed:"Dalmatian",
//                 averageWeight: 24,
//                 activities:['running', 'fetch', 'agility', 'swimming'],
//             },
//             {
//                 breed:"Labrador",
//                 averageWeight: 28,
//                 activities:['swimming', 'fetch'],
//             },
//             {
//                 breed:"Beagle",
//                 averageWeight: 12,
//                 activities:['digging', 'fetch' , 'swimming'],
//             },
//             {
//                 breed:"Husky",
//                 averageWeight: 26,
//                 activities:['digging', 'fetch' ],
//             },
//             {
//                 breed:"Bulldog",
//                 averageWeight: 36,
//                 activities:['sleeping'],
//             },
//             {
//                 breed:"Poodle",
//                 averageWeight: 18,
//                 activities:['agility', 'fetch' ],
//             },
// ];


// // q1 

// let huskyWeight = breeds.find( breed => breed.breed === 'Husky').averageWeight;
// console.log(`Husky weighs :`,huskyWeight)

// let poodleweighs = breeds.find( function(breed) {
//     // let pg = breed.breed
//     // debugger;
//     breed.breed  === 'Poodle';
//     return breed.breed 
// }).averageWeight;
// console.log(`Poddle weighs :`,poodleweighs);

// let Bulldogweighs = breeds.find( bree => bree.breed === 'Bulldog').averageWeight;
// console.log(`bull dog age :`, Bulldogweighs);


// //q2

// let dogBothActivities = breeds.find( breeds => breeds.activities.includes( 'running') 
//                                                 && 
//                                                 breeds.activities.includes('fetch')).breed; 
// console.log(dogBothActivities);

// //q3

// let allActivities = breeds.map(breeds => breeds.activities).flat();
// console.log(allActivities)

// //q4

// const uniqueActivities =[...new Set([...allActivities])];
// console.log(uniqueActivities);

// // const mostunique = new Map(...uniqueActivities);

// //q5

// const uniqueAdjacent = [...new Set( breeds.filter( breeds => breeds.activities.includes('swimming'))
//                                           .flatMap(breeds => breeds.activities)
//                                           .filter(activities => activities != "swimming"))];

// console.log(uniqueAdjacent);

// //q6

// const alldogavgweight = breeds.every( breeds => breeds.averageWeight >10);
// console.log(alldogavgweight)

// //q7

// const dogactvcount = breeds.some(breeds => breeds.activities.length >= 3);
// console.log(dogactvcount);


// // bonus

// const hvystbreed = breeds.filter(breeds  => breeds.activities.includes('fetch')).map(breeds => breeds.averageWeight);
// console.log(Math.max(Number(...hvystbreed)));
// // console.log(hvystbreed);

// // sorting arrays

// // // by using string
// // const ow = ['aa', 'cc', 'ff','bb', 'kk'];

// // console.log(ow.sort());


// // // by  using number

// // console.log(account1.movements.sort()); // it will not proper sort 

// // // return < 0, A,B (Kep order)
// // // return > 0 B,A (switch order)

// // account1.movements.sort((a,b) => {


// //     if(a>b) return 1; 
// //     if(a<b) return -1;


// // });
// // console.log(account1.movements);  // ascending sorting

// // console.log(account3.movements);
// // account3.movements.sort((a,b) => a-b);
// // console.log(account3.movements);


// // console.log(account2.movements);
// // account2.movements.sort((a,b) => {
// //     if(a>b) return -1;
// //     if(a<b) return 1;
// // })
// // console.log(account2.movements); // descending sorting

// // console.log(account4.movements);
// // account4.movements.sort((a,b) => b-a);
// // console.log(account4.movements);

// ************* array  grouping ***********

// object group by 
let aaaa = [11, 22,-22, -288, 289892, -127128]
const groupedMovements = Object.groupBy(aaaa,  aaaa => aaaa > 0? 'deposit' :'withdrawl');
console.log(groupedMovements);



let checkactivity = Object.groupBy(accounts, accounts => {

    let movcount = accounts.movements.length;

    if(movcount >= 8) return 'Very Active';
    if(movcount >= 4) return  'Active';
    if(movcount >= 1) return 'Moderate';
    return 'Inactive';
});

console.log(checkactivity);


let acs = Object.groupBy(accounts, accounts => accounts.type)
console.log(acs);


// way of creating arrays

let aass = [22,23,22,44,,67,8];

let asd = new Array(1,2,4,7, 5,3322);
console.log(aass,asd);
// empty arrays
let y = new Array(5);

console.log(y);
console.log( y.map( () => 5));


// fill arrays

// by using fill arrays method we can fill element at speicifed index

y.fill(1,4);
console.log(y);// here y is an empty arrays in this array at index 4  , 1 will be filled // keep it inn mind here index starts at 0.

y.fill(8, 2,3);
console.log(y); // in this at index 2,3 . number 8 will be filled.

//****************  Array.from      *************
let pp = Array.from({ length:7 } , () =>1);
console.log(`pp`,pp);

let yy = Array.from({length: 7}, (_, i) =>i+1); // here _ is current value

console.log(yy);

document.querySelector('.totalbalance').addEventListener('click', function(){

    let movementUI = Array.from(document.querySelectorAll('.movementvalue'), 
     el => Number(el.textContent.replace('$','')));

     console.log(movementUI);  /// Instead of using ...spread operator we can use array.from method


})


// ********  reverse methods



  
  console.log(account1.movements);
  let reversedMov = account1.movements.reverse();
  console.log(reversedMov);
  console.log(account1.movements);
  reversedMov = account1.movements.slice().reverse();
  console.log(reversedMov);
  console.log(account1.movements);
console.log(account1.movements);
  let rs = account1.movements.toReversed(); // to reversd is method to reverse a array in this method the oiginal wont get affected it will remains thhe samrr, but .reverse) it will affct the original array.
  console.log(account1.movements);  
  console.log(rs);

  
// ****** with() ******

// by using with() method we can update an indexed element value of the array with affect original array ..it will new array

let movsss =[1,3,354,654544,665465563465,6455]
console.log(movsss);
movsss[3] = 0;
console.log(movsss);

// but in with()
let ssdd = movsss.with(1,4437484378);
console.log(movsss);
console.log(ssdd);

  

 















 