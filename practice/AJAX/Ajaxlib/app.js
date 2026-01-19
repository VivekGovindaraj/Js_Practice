 let createHTTP = new easyHTTP() ;

 console.log(createHTTP);

 createHTTP.get('https://jsonplaceholder.typicode.com/users', function(error, data){
    if(error){
        console.log('error', error)
    }else{
        console.log('sucees', data)
    }
 })

 let data1 ={
    "id": 11,
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



  createHTTP.post('https://jsonplaceholder.typicode.com/users', data1, function(error, data){
    if(error){
        console.log('error', error)
    }else{
        console.log('sucees', data)
    }
 })


 
  createHTTP.put(`https://jsonplaceholder.typicode.com/users/${2}`, data1, function(error, data){
    if(error){
        console.log('error', error)
    }else{
        console.log('sucees', data)
    }
 })