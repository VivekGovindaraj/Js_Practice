document.querySelector('.btn').addEventListener('click', getData);

function getData(){


    // cretae request

    let datas = new XMLHttpRequest();

    // opening the txt file

    datas.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);


    // load function(0)
    datas.onload =function(data){

        if(this.status){

            let restxt = JSON.parse(this.responseText);

            let output="";

            restxt.forEach(function(data){
                
                output += `${data.userId} ${data.id} , ${data.title}, ${data.completed}... ` + '<br>'

                document.querySelector('.container').innerHTML = output;
            })
        }
    }

    datas.send();
}
// getData()



