let url ='https://jsonplaceholder.typicode.com/users'

let getRequest = () => {

    return new Promise( (success, error) => {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onload = () => {

            if(xhr.status ==200){
                success(xhr.responseText);
            }else{
                error(`${xhr.status} : ${xhr.statusText}`)
            }
        }

        xhr.send()
    })
}

getRequest()
.then(data => console.log("GET DATA",data))
.catch(error => console.log("GET ERROR",error));





url =`https://jsonplaceholder.typicode.com/users`

let data1 = {
    "id": 11,
    "name": "vivek",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };

let postRequest = () => {

    return new Promise( (success, error) =>{
        let xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if( xhr.status == 201 ){
                    success(xhr.responseText)
            }else{
                error(`${xhr.staus}: ${xhr.statusText}`)
            }      
        }

        xhr.send(JSON.stringify(data1))
    })
}

postRequest()
.then(data1 => console.log("Post DATA",data1))
.catch(error => console.log("Post ERROR",error))




url =`https://jsonplaceholder.typicode.com/users/2`

let data = {
    "id": 67,
    "name": "sindhu",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };

let putRequest = () => {

    return new Promise( (success, error) =>{
        let xhr = new XMLHttpRequest();

        xhr.open('PUT', url, true);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if( xhr.status == 200 ){
                    success(xhr.responseText)
            }else{
                error(`${xhr.staus}: ${xhr.statusText}`)
            }      
        }

        xhr.send(JSON.stringify(data))
    })
}

putRequest()
.then(data => console.log("PUT DATA",data))
.catch(error => console.log("PUT ERROR",error))


url ='https://jsonplaceholder.typicode.com/users/9'

let deleteRequest = () =>{
    return new Promise((success, error) => {
         let xhr = new XMLHttpRequest();

         xhr.open('DELETE', url, true);

         xhr.setRequestHeader('Content-Type', 'application/json');

         xhr.onload = () => {

            if(xhr.status == 200){
                  success(xhr.responseText);
            }else{
                error(`${this.staus} : ${this.statusText}`)
            }
          

         }

         xhr.send()
    })
}

deleteRequest()
.then(data => console.log("DELETE DATA",data))
.catch(error => console.log("DELETE ERROR",error))