let url ='https://jsonplaceholder.typicode.com/users/10';


fetch(url)
.then(response => response.text())
.then( data => console.log("data",data))
.catch( error => console.log(error));



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

url ='https://jsonplaceholder.typicode.com/users';
fetch(url , {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(data1)
})
.then(response => response.text())
.then( data => console.log("data",data))
.catch( error => console.log(error));



url ='https://jsonplaceholder.typicode.com/users/7';

 data1 = {
    "id": 27,
    "name": "vivekg,ks",
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


  fetch(url, {

    method: "PUT",
    headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(data1)

  })
  .then(response => response.text())
  .then(data => { console.log(data, 11111111111)})
  .catch(error => console.log(error))
  



