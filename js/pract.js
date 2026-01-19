console.log(`Hello`);
console.log(`I want to you...`)
console.log('puush, pop, shift and unnshift splice, reverse, sort , fill');
console.log(`push, pop, shift, unshift, splice, sort, reverse, fill therse methods will muttate original array`);


let abs = ['dsj', 'wjd', 'dwjdbw', 'dkbd', 'dwbdw'];



 
// at() metod


console.log(abs.at(2));

Array.prototype.atFunc = function(index){

    let i = (index >=0) ? index : this.length + index;
    return this[i];
}

console.log(abs.atFunc(3));
console.log(abs[3]);

//  concat()

let arr2 = ['dsdfs', 'sajh', 'sad', 'sjff', 'fsajfjh', 'asjdjh'];

let acs = abs.concat(arr2);
console.log(acs);


Array.prototype.arraFunc = function(...arr2){
    let  result = [...this];

    for(const arg of arr2){
        if(Array.isArray(arg)){
            result.push(...arg);
        }else{
            result.push(arg);
        }
    }
    return result;
}

console.log(abs.arraFunc(arr2));

// copyWithin()

let bbc = arr2.copyWithin(2,0,2);

console.log(bbc);    


//entries()
let textt = ''
for(let i of arr2.entries()){

    textt += i;

}
console.log(textt);

// every()

let ages =[23,22,332355,32,23,1];


function checkAge(age){
return age > 101835725;
}

console.log(ages.every(checkAge));

// fill()

let fruits = ['Apple', 'banana', 'strawberry', 'dwd', 'fwkhfqw', 'ffqwh'];

console.log(fruits.fill('AAA'));
console.log(fruits.fill('aaa', 2,4));

// filter

console.log(ages.filter( age => age > 18));

// find()
console.log(ages.filter( age => age >18));

// findIndex();

console.log(ages.findIndex(checkAge));


// findLastIndex()
console.log(ages.findLastIndex(checkAge));

// flat()

let nesarr = ['kjasf', 234, [3432, 252, [54545, 4545, 4354, [453545, 54354, 543543]]], 543543, 54534, [45354, 454534], ['dqd', 'wqfq']];

let flatarr = nesarr.flat(Infinity);
console.log( flatarr );

//map()

let aaa = [432,344,4234,,42342]

let tot= aaa.map( arr => arr );
console.log(tot);

// flatMap()

let aaaa = nesarr.flatMap( aar => aar);

console.log(aaaa);

// forEach()
let aa = ages.forEach(age => console.log(ages));
console.log(aa);

// from()

let add  = Array.from( ages, x => x+1);
console.log(add);

// includes()

let ass = ages.includes(18);
console.log(ass);

// indexOf()
console.log(ages.indexOf(23));

// isArray()
console.log(Array.isArray(ages));

// join()

console.log(ages.join('*'));

// keys()

let  keyss = ages.keys();
let res= ""
for (let i of keyss){

     res += i
}

console.log(res)


// lastIndexOf()

let fruitss = ['aa', 'aaa', 'aa']

console.log(fruitss.lastIndexOf('aa'));


// length

console.log(fruits.length);

// of()

let cars = Array.of('ahhd', 'sana', 'sabsa', 'ashdbjha');
 console.log(cars);

// Array.of() is usd to create a nw array

// pop()

console.log(cars.pop(), cars);

// reduce()

let movements= [132, 21321,21312,213,213,214,3545,24]

console.log(movements, movements.reduce( (sum, mov) => mov += sum));

// ...rest()

let alk = [242,432432,,43243243,324]

let ase = [...alk];
console.log(ase);

// reverse()

console.log(ase.reverse());


// shift()

console.log(ase.shift(), ase);
// slice()

console.log(ase.splice(0,2 , 'aa'), ase);

//some()

let fff= (age) => age > 18;

console.log(ages.some(fff));

// sort()

console.log(fruits.sort().reverse());

//slice();

let afg = [212,122312,123123,123321,123312312]

// console.log(afg.slice(4,1, 'sad'), afg)

console.log(fruitss.slice(2,1,'dad', 'mom'))


// *******************   array class ***************

let js = document.querySelector('.container').childNodes;
let jss = document.querySelector('.container').children;
 

console.log(jss);