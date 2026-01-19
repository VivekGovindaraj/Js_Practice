// TASK 1 COUNTER
let counterDiv = document.querySelector('.counter');
let counterBtn = document.querySelector('#increment-btn');
let countt = 0;
 counterBtn.addEventListener('click', function(){

    countt += 1;
    counterDiv.innerHTML = countt
 });


// toggle btn

let togglebtn = document.querySelector('#toggle-btn');
let bodytag = document.querySelector('body')

togglebtn.addEventListener('click', function(){
  
    
   bodytag.classList.toggle('add-color')
})

// live input keyup

let inputField = document.querySelector('#task');

inputField.addEventListener('keyup', function()
{
    let res = inputField.value;
    console.log(res)

    counterDiv.innerText = res;
})

// log event type

let mouseeventbtn = document.querySelector('#mouseevent-btn');
mouseeventbtn.addEventListener('mouseup', eventtype);

function eventtype(event){
    
    counterDiv.innerText = event.type;
}


//  travesing


let jan = document.querySelector('.collection')


val = jan;
val = jan.childNodes;
val = jan.childNodes[0].nodeName;
val = jan.childNodes[1].nodeName;
val = jan.childNodes[2].nodeName;

val = jan.children;
val = jan.children[0].children[0].children;
val=jan.parentElement;
val= jan.children;

val=jan.firstChild
val = jan.firstElementChild.children;

val= jan.childNodes;
val = jan.children;
val = jan.firstElementChild;
val= jan.parentElement;
val = jan.firstElementChild;
val = jan.children
val = jan.childNodes;
val = jan.firstElementChild;
val = jan.lastElementChild;

val = jan.firstElementChild.children;
val = jan.previousSibling;
val =jan.previousElementSibling;
val = jan.firstElementChild.nextElementSibling.innerText;
val= jan.firstElementChild.chi
console.log(val);

let ui =  document.querySelector(".collection");

// task
