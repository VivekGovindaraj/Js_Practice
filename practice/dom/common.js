

console.log('Get ready');


// all variables

const  form = document.querySelector('#task-form');
const  textinput = document.querySelector('#task');

const  dateinput = document.querySelector('#dati');
const submitBtn  = document.querySelector('#submit-btn');

const tasklistContainer = document.querySelector('.collection');  

const clearBtn = document.querySelector('#btn-clear');

const listDel = document.querySelector('.collection-item')

const filter = document.querySelector('#Search');
// load function
funcloader();
function funcloader(){


 console.log('All function Called Succesfully');

 // form submit

 form.addEventListener('submit', addTask);

 // clear button
 clearBtn.addEventListener('click', clearFunc);

 // item delete
  tasklistContainer.addEventListener('click', delFunc)

  // filterfunc

  filter.addEventListener('keyup', filterfunc)

  // local storage

  

   
 

}

// local storage 

function localStorageFunc(taskinput){
    let tasks;
    if(localStorage.getItem("tasks") == null){
        debugger;
        tasks = [];
        console.log('if')
    }
    else{
        debugger;
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

   
    tasks.push(taskinput);
     localStorage.setItem('tasks', JSON.stringify(tasks))
  
   
}




// localStorage.removeItem('tasks');
// console.log(localStorage.getItem('setval'));

// filter func

function filterfunc(e){
    let filtersearchVal = e.target.value.toLowerCase();
    console.log(filtersearchVal);

    document.querySelectorAll('collection-item').forEach(function(listval){
        let listvalall = listval.target.value.toLowerCase();

        if( listval.indexOf(filtersearchVal) !== -1){
            listval.computedStyleMap.display = "block";
        }else{
             listval.computedStyleMap.display = "none";
        }
    })
}

function addTask(e){
   e.preventDefault();
    console.log('hello');
   
    if( textinput.value === ''){
        alert('Please enter some text')
    }else{

        // cretae elemert

        const li = document.createElement('li');


        // class
        li.className = 'collection-item';

        // innext text 
        let text =  textinput.value + " " + dateinput.value;
        li.append(text) ;

        // create anchor element

        const anchor = document.createElement('a')
        anchor.className = 'delete-item secondary-content';

        // i tage inside anchor tag

        anchor.innerHTML = `<i class="fa fa-remove"></i>`

        //add anchor tag to li

        li.appendChild(anchor) ;
        

        // add li to ul
        tasklistContainer.appendChild(li)
        
        console.log(tasklistContainer);


        // local storage func

        localStorageFunc(textinput.value);
    

        textinput.value= "";
        dateinput.value='';


        



    }

}



// local storage 

function localStorageFunc(taskinput){
    let tasks;
    if(localStorage.getItem("tasks") == null){
    
        tasks = [];
        console.log('if')
    }
    else{
    
        tasks = JSON.parse(localStorage.getItem('tasks'))

        console.log(tasks)
    }

   
    tasks.push(taskinput);
     localStorage.setItem('tasks', JSON.stringify(tasks))
  
   
}


function clearFunc(){

    tasklistContainer.innerHTML = ""

    localStorage.removeItem('tasks')
}


function delFunc(e){

    let tasks

   if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
   }



   let copytxt = e.target.parentElement.parentElement;

   let removextx = copytxt.firstChild.textContent.trim();
   console.log(removextx)

   
removeFromLocalStorage(removextx);

   function removeFromLocalStorage(taskToRemove) {
    debugger
    var tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Find the index of the first exact match
    var index = tasks.indexOf(taskToRemove);

    if (index !== -1) {
        tasks.splice(index, 1);  // Remove exactly one matching value
    }

    // Save updated array
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(localStorage.getItem('tasks'))
}


}



// local storage

// By using local storage we get, set, delete, remove an Item , here value are will like object like key, value pairs.

// localStorage.setItem('vivek', 'vivek works in ui/ux team.')
// console.log(localStorage.getItem('vivek'))

// localStorage.removeItem('vivek')

// console.log(localStorage.getItem('vivek'))


// // json


// let a1 = [1,2,33,32]

// let arrtostring = JSON.stringify(a1)
// console.log(arrtostring)

// let stringtoarr = JSON.parse(arrtostring)
// console.log(stringtoarr)






// localStorage.removeItem('tasks')