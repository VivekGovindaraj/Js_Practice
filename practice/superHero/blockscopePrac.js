function vivek(){
    var ll = 'cc'
    console.log(ll)
}
vivek();

{
    let abs = 390;
    console.log(abs)
}
// console.log(abs)   because let dont block scoked outside block u cant access

if(true){
    var tt = 4;

}
console.log(tt) // var have no block scope

{
    const pi= 3.14 // const outside block can tablke access . no blockscope
}

// console.log(pi)

var a = 324;
let b = 354;

// console.log(window.a);
// console.log(window.b)

console.log('lll',lll)
var lll = 'hi'


// console.log('jj', jj)

// let jj = "kkkk"

let sss = 'hi';
{
    let sss= "his";
    console.log(sss)
}
console.log(sss)

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

var x= 9;
var x=10;

// let yyy = 9;
// let yyy = 10;


function test() {
  x = "Oops!";
}
test();
console.log(x);


// {
//   // What happens here?
//   console.log(typeof z);
//   let z = 100;
// }


const user = { name: "John" };
user.name = "Alice"; // Allowed?
user = {}; // Allowed?


for (let i = 0; i < 3; i++) {
  document.body.addEventListener("click", function () {
    console.log(i); // Click and see
  });
}
