// API controller


let APIController = (function(){


    let apiURL =`https://68a4b0c0c123272fb9b38d6e.mockapi.io/data`;


    return {

      async fetchItems(){

            let response = await fetch(apiURL)
            return  await response.json();
        },

        async addItem(item){
            debugger;

            let response = await fetch(apiURL, {
                method:"POST",
                headers:{
                    "Content-Type":'application/json'
                }, 
                body:JSON.stringify(item)
            })
            return  await response.json();
        },

        async updateItem(item){
            debugger;

            let response = await fetch(`${apiURL}/${item.id}`, {
                method:"PUT",
                headers:{
                    "Content-Type":'application/json'
                }, 
                body:JSON.stringify(item)
            })
            return  await response.json(); 
        },
        async deleteItem(id){
            debugger;

            let response = await fetch(`${apiURL}/${id}`, {
                method:"DELETE",
               
            })
            return  await response.json();
        },

        async clearAllItems(){
            let items = await this.fetchItems();
             await Promise.all(items.map( item => this.deleteItem(item.id)))
        }
    }
})();






// item controller

const itemController = (function(){

    let Item =function(id,name,money) {
        this.id = id,
        this.name = name,
        this.money =  money

    }

    let data ={
        items:[
            // {id:0, name:"Clothes", money:1000},
            // {id:1, name:"Clothe53287578s2", money:2000},
            // {id:2, name:"Clothes3", money:3000},
            // {id:3, name:"Clothes4", money:4000},
            
        ],
        totalAmount:0,
        curentItem : null
    }

    return {

        getItem:
            function(){
                return data.items
            
        },
        addItem:function(name, money){

            let iD ;

            if(data.items.length >0){
                iD = data.items[data.items.length -1].id +1;
            }else{
                iD = 0; alert(' id cant able to genearte')
            }

            money = Number(money)
            // creating items
            newItem = new Item(iD,name, money )
            // pushing new item to array

            data.items.push(newItem)

            return newItem
        },
        getTotalMoney: function(){
            let total = 0;
debugger;
            if(data.items.length> 0){

               let newtotal = data.items.reduce((total, val, index ) =>{ return total+= val.money}, 0)
               total = newtotal
               data.totalAmount = newtotal
            }else{
                data.totalAmount = 0 ;
                alert('Total calclation went wrong')
            }

            return total;
        },
        getclickedliDataItem: function(id){
            let found = null;

            data.items.forEach( item => {
                if(item.id == id){
                    found= item
                } 
            })
            
            return found 
        
        },
        setItem:function(items){
            data.items = items
        },
        setCurrentItem: function(item){
            debugger;
            data.curentItem = item
        },
        getCurrentItem: function(){
            return data.curentItem
        },
        deleteItem: function(id){

            // get id

            let ids =data.items.map(function(item){
                return item.id;
            })

            //
        let index = ids.indexOf(id)

        data.items.splice(index, 1)
        console.log(data.items)

        },
        clearAllItems: function(){
        data.items = []
    },
     updateItem:function(name, money){

        money = Number(money)

        let found = null;

        data.items.forEach( item => {
             if(item.id === data.curentItem.id){

                item.name =name;
                item.money = money
                found = item

            }

            console.log(found)
            
        }
           
        )

        return found;

    }
    }
})()


 

// console.log(itemController.getItem)

// ui controller 

const uiController = (function(){

   return{
    
    displayUi:function(items){
       let html = "";

        items.forEach( function(item){
            html+=` 
                <li class="collection-item" id=item-${item.id}>
                    <strong>${item.name}</strong> :
                    <em>${item.money} RS</em>
                    <a href="#" class="secondary-content">
                        <i class="fa-solid fa-pencil edit-item"></i>
                    </a>
                </li>`;
        });

        document.querySelector("#item-list").innerHTML = html;
    },
    hideBtnState:function(){
         document.querySelector(".add-btn").style.display = "inline";
         document.querySelector(".update-btn").style.display = "none";
         document.querySelector(".delete-btn").style.display = "none";
         document.querySelector(".back-btn").style.display = "none";
    },
    showbntState:function(){
         document.querySelector(".add-btn").style.display = "none";
         document.querySelector(".update-btn").style.display = "inline";
         document.querySelector(".delete-btn").style.display = "inline";
         document.querySelector(".back-btn").style.display = "inline";
    },
    getInputItems:function(){
        return{
            name:document.querySelector('#item-name').value,
            money:document.querySelector('#item-money').value,
        }
        },
    addListItem:function(newItem){

        let li = document.createElement('li');

        li.classList = "collection-item";
        li.id = `item-${newItem.id}`

        li.innerHTML = `
                        <strong>${newItem.name}</strong> :
                        <em>${newItem.money} RS</em>
                        <a href="#" class="secondary-content">
                            <i class="fa-solid fa-pencil edit-item"></i>
                        </a>`;

        document.querySelector('#item-list').appendChild(li)
        

    },
    showToatlMoney: function(totalMoney){
        document.querySelector('.total-money').innerHTML = totalMoney;
    },
    clearInputOfUI: function(){
         document.querySelector('#item-name').value = '';
        document.querySelector('#item-money').value ='';
    },
    passDataToInputs: function(){

       

        document.querySelector('#item-name').value = itemController.getCurrentItem().name;
        document.querySelector('#item-money').value = itemController.getCurrentItem().money;
    },
    deleteListItem: function(id){
        let itemId = `#item-${id}`;
        let item = document.querySelector(itemId)

        item.remove();
    },
    clearAllLiItems: function(){
        
     document.querySelector('.collection').innerHTML = "";
    },
    updateListItem: function(item){


       

             let listItems = document.querySelectorAll(".collection-item");


             listItems.forEach( function(listItem){


                 let itemID = listItem.getAttribute('id');
            
            
          if( itemID === `item-${item.id}`) {
            document.querySelector(`#${itemID}`).innerHTML = `
                            <strong>${item.name}</strong> :
                            <em>${item.money} RS</em>
                            <a href="#" class="secondary-content">
                                <i class="fa-solid fa-pencil edit-item"></i>
                            </a>`;
          }

           


             })
           
     


    }
    
       
    
    }

    

})();






// app controller 

const appcontroller = (function(){

    uiController.hideBtnState(); // inital hide of button

    // load function

    let allFunctionLoader = function(){

        // add task
       document.querySelector(".add-btn").addEventListener('click', addSubmitItem);
        
        // edit button
       document.querySelector("#item-list").addEventListener('click', editItem);

       // update task button

       document.querySelector('.update-btn').addEventListener('click', updateData)

       // delete data  

       document.querySelector('.delete-btn').addEventListener('click',deleteData)

       // back btn
       document.querySelector('.back-btn').addEventListener('click', backBtnFunc)

       // clear All btn

       document.querySelector('.clear-btn').addEventListener('click', clearAll)




    }

    // clearAll func

   async function clearAll(e){
        e.preventDefault();
        // clearing in item controller
        itemController.clearAllItems();

        // api clearall

     await APIController.clearAllItems()

        // updating in ui controller

        uiController.clearAllLiItems()

     uiController.hideBtnState()
    let totalMoney=  itemController.getTotalMoney()

     uiController.showToatlMoney(totalMoney)
    }

    // back button function

    function backBtnFunc(e){
        e.preventDefault()

       alert('Sure to discard the chnges')

       updateData(e);
       uiController.hideBtnState();
       uiController.clearInputOfUI();


    }

    // delete data

    async function deleteData(e){
        debugger;


        e.preventDefault();

        alert('Sure to delete this item');


       
        // delete data form structure
         let currentItem = itemController.getCurrentItem();

        //  itemController.deleteItem(currentItem.id)

        await APIController.deleteItem(currentItem.id)
        itemController.deleteItem(currentItem)

    //     let clickedli = document.querySelector('.editing')

    //      let getclickedliid = parseInt(clickedli.id.split('-')[1])

    //         // get data from item controller of clicked li by using id
           
    //       let itemToEdit =  itemController.getclickedliDataItem(getclickedliid)

    //    // removing li

    //    clickedli.remove();


        // update to ui
        uiController.deleteListItem(currentItem.id)
      
        // updating total
      let updateTotal = itemController.getTotalMoney()
    //    updateTotal = updateTotal - itemToEdit.money
     
        uiController.showToatlMoney(updateTotal)
        //clearing ui inputs
         uiController.clearInputOfUI()
        // hiding btns
         uiController.hideBtnState();

    }


    // update data

   async function updateData(e){
        e.preventDefault();


        let inputs = uiController.getInputItems();
        let curentItem = itemController.getCurrentItem()

        // let editedLi =  document.querySelector('.editing')

        // let editedLiId =   parseInt(editedLi.id.split('-')[1])

        // update item in item controller

        // let updateItem = itemController.updateItem(curentItem.name,curentItem.money)

        let updateItem = {id:curentItem.id,name:inputs.name,money:parseInt(inputs.money)}

        await APIController.updateItem(updateItem)

        // let updateItem = APIController.addItem({name:currentItem.name,money:parseInt(curentItem.money)})

        console.log(updateItem)


        // itemController.updateItem(inputs.name,inputs.money)

        // update item in ui controller 

        uiController.updateListItem(updateItem)

        //  let currentItem = itemController.getclickedliDataItem(getCurrentItem)
        // let Updatedinputs = uiController.getInputItems()


        // currentItem.name = Updatedinputs.name
        // currentItem.money = Number(Updatedinputs.money)

      
        // editedLi.classList.remove('editing');
        

        // after update clear ui inputs



        uiController.clearInputOfUI();


        // update total

        let updateTotal = itemController.getTotalMoney()
        uiController.showToatlMoney(updateTotal)

        // button back to add task state


        uiController.hideBtnState();




    }

    // edit Item function

    function editItem(e){
        if(e.target.classList.contains("edit-item")){
            debugger;
            // get clicked li data

            let clickedli = e.target.closest('li')

              clickedli.classList.add('editing');
            // let getclickedliid = parseInt(clickedli.id.split('-')[1])
         let getclickedliid = clickedli.id.split('-')[1];

            // get data from item controller of clicked li by using id
           
          let itemToEdit =  itemController.getclickedliDataItem(getclickedliid)

          // set current item

            let curentItem = itemController.setCurrentItem(itemToEdit)

            // passing clicked li   data ui 
            uiController.passDataToInputs();

            uiController.showbntState();

            
        }
    }

    // addSubmitItem function

     async function addSubmitItem(e){
        e.preventDefault();
        debugger;
        
        // input values

        let inputs = uiController.getInputItems();
        
        if(inputs.name =="" || inputs.money== ""){
            alert('Please fill the fields')  //alert msg
        }else{

            // add input items to getItem array item array
            // let newItem = itemController.addItem(inputs.name, inputs.money)

            let newItem = await APIController.addItem({name:inputs.name,money:parseInt(inputs.money)})
            // update item controller data

            itemController.setItem([...itemController.getItem(), newItem])
            // Add item to ui
            uiController.addListItem(newItem)
            // add new to to ul
             let totalMoney = itemController.getTotalMoney();
                uiController.showToatlMoney(totalMoney)
            // clear ui inputs after add the item

            uiController.clearInputOfUI()
        }

    }

    return{
        start:async function(){
            // let items = itemController.getItem();

           let items = await APIController.fetchItems();

           itemController.setItem(items);

            if(items.length > 0){
                uiController.displayUi(items)
                // add total money 
                let totalMoney = itemController.getTotalMoney();
                uiController.showToatlMoney(totalMoney)
                
            }

            allFunctionLoader() // calling allFUNCTION LOADER
        }
    }
})();



appcontroller.start();