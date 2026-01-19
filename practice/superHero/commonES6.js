// Super hero common js


// all variables




const addHero = document.querySelector('#addHero');
const Editbtn = document.querySelector('#edit');
const removeBtn = document.querySelector('#remove');
const searchbox = document.querySelector('#searchBox');

const listContainer = document.querySelector('.list-group')

// constructor function

// function Hero(name,power,seceretIdentity,seceretPower){
//     this.name = name;
//     this.power = power;
//     this.seceretIdentity =seceretIdentity;
//     this.seceretPower = seceretPower;
// }

// es6 

class Hero {
    constructor(name,power,seceretIdentity,seceretPower){
          this.name = name;
    this.power = power;
    this.seceretIdentity =seceretIdentity;
    this.seceretPower = seceretPower;
    }
}


// gloabal variable 

let Heroarr = [];
let isEditing = false;
let editIndex = null;


// on page load , load local storage function 
window.onload = function(){
    let savedata = localStorage.getItem("HeroArray");
    if(savedata){
         const raw = JSON.parse(savedata);
        heroes = raw.map(function(h){
            return new Hero(h.name, h.power, h.seceretIdentity , h.seceretPower)
        })

        updateUI();
    }
}


// local stroge updation


function localStorageUpdation(){
   let data = Heroarr.map( function(hero){
    return {
        name :hero.name,
        power:hero.power,
        seceretIdentity :hero.seceretIdentity,
        seceretPower : hero.seceretPower
    }
   })

   localStorage.setItem("HeroArray", JSON.stringify(data));
}




// All function loader
AllFuncLoader();

function AllFuncLoader() {

    console.log(`All function loading starts`);

   addHero.addEventListener('click', addHeroFunc) ;// Add hero func
   updateUI();

   console.log(`All function loaded sucsessfully`)

}

// Add Hero Function

function addHeroFunc(e){

    e.preventDefault();
    let name = document.querySelector('#heroName').value.trim();
    let power = parseInt(document.querySelector('#heroPower').value);
    

    let  seceretIdentity = document.querySelector('#secretIdentity').value.trim();
    let seceretPower = document.querySelector('#secretPower').value.trim();


    if(isEditing){
        let heroarrindex = Heroarr[editIndex];

       heroarrindex.name = name;
       heroarrindex.power = power;
        heroarrindex.seceretIdentity = seceretIdentity;
       heroarrindex.seceretPower = seceretPower;

        isEditing = false;
        editIndex= null
    } else{

         if(name == "" || isNaN(power) === "" || seceretIdentity == "" || seceretPower == ""){
            
            alert('Please all the field');  // check all fileds have value condition
        }
        else{
            
               let heros= new Hero(name,power,seceretIdentity,seceretPower);


            Heroarr.push(heros)// here we are pushing heros value to heroarr array 
        }
      
    }
        
    


  

    document.querySelector('#heroName').value = "";
    document.querySelector('#heroPower').value = "";
    document.querySelector('#secretIdentity').value="";
    document.querySelector('#secretPower').value = ""


     updateUI() // calling update UI function

     localStorageUpdation() // calling local storge updation

   
   

    //

  }

  //update UI

   function updateUI(filter=""){

    debugger
        listContainer.innerHTML="";

          Heroarr.forEach(function(hero,index){


           if(hero.name.toLowerCase().includes(filter.toLowerCase())){
                   // create li element
             let li = document.createElement('li');

             li.classList = 'list-group-item d-flex justify-content-between align-items-center';

            // create edit btn

            li.innerHTML= `<div>
                        <strong>${hero.name} - Power : ${hero.power}</strong>
                                <br>
                                <small>Secert : ${hero.seceretIdentity} </small><span class="ms-2">${hero.seceretPower} </span>
                    </div>
                    <div>
                        <button class="btn btn-warning btn-sm" id="edit" onClick="editHero(${index})">Edit</button>
                        <button class="btn btn-danger btn-sm" id="remove" onClick="delfunc(${index})">Remove</button>
                    </div>`

            console.log(li);

            // let btnEdit = document.createElement('button');

            // btnEdit.classList = 'btn btn-warning btn-sm mx-2';
            // btnEdit.textContent= "Edit";
            // console.log(btnEdit);

            // // create delete btn

            // let btnDelete = document.createElement('button');
            // btnDelete.classList = "btn btn-danger btn-sm mx-1";
            // btnDelete.textContent = 'Remove'

            // console.log(btnDelete);

            // // create first Div

            // let firstDiv = document.createElement('div');

            //  firstDiv.innerHTML = `
            //                     <strong>${ heroName.value.trim()} - Power : ${powerLevel.value.trim()}</strong>
            //                     <br>
            //                     <small>Secert : ${seceretIdentity.value.trim()} </small><span class="ms-2">${seceretPower.value.trim()} </span>
            //                 `;

            // let secondDiv = document.createElement('div')

            //  secondDiv.append(btnEdit) ;
            //  secondDiv.append(btnDelete) ;

            // APPEND INSIDE LI AS CHILD

            
            // li.appendChild(firstDiv);
            // li.appendChild(secondDiv);
            // console.log(li)
            

            listContainer.appendChild(li);
            console.log(listContainer);



           }
           

          })

           
    }


    // delete function

    function delfunc(index){

        if(confirm('Are you sur you want to delete this hero?')){
              Heroarr.splice(index, 1);
              debugger
              updateUI(); // after delete ui updation
              localStorageUpdation(); // after local storge updation
        }

      

    }

// dark  mode and light mode function

function toggleTheme(){
debugger;

      document.body.classList.toggle("img");
    document.body.classList.toggle("text-white");
}


// sort function

function sortfunc(asc=true){

    Heroarr.sort( (a,b) => asc ? a.power - b.power : b.power -a.power);
    updateUI();
    localStorageUpdation();

}

// filter function

document.querySelector('#searchBox').addEventListener('keyup', function(e){
   updateUI( e.target.value);
})


// edit hero function

function editHero(index){
    let heroarrindex = Heroarr[index];

    document.querySelector('#heroName').value = heroarrindex.name;
    document.querySelector('#heroPower').value = heroarrindex.power;
    document.querySelector('#secretIdentity').value= heroarrindex.seceretIdentity;
    document.querySelector('#secretPower').value = heroarrindex.seceretPower;

    isEditing = true;
    editIndex = index;
}
  

  

