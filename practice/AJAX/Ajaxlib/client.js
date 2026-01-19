class easyHTTP {


    get(url, callback){


        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true)

        xhr.onload = function(){

            if(xhr.status == 200){

                callback(null, this.responseText)
            }else{
                callback(`Error ${this.status}`, null)
            }
        }

        xhr.send();
    }


    post(url,data, callback){


        const xhr = new XMLHttpRequest();
         xhr.open('POST', url, true)

        xhr.setRequestHeader('Content-Type', 'application/json');
        

       

        xhr.onload = function(){

            if(xhr.status == 201){

                callback(null, this.responseText)
            }else{
                callback(`Error ${this.status}`, null)
            }
        }

        xhr.send(JSON.stringify(data));
    }



     put(url,data, callback){


        const xhr = new XMLHttpRequest();
         xhr.open('PUT', url, true)

        xhr.setRequestHeader('Content-Type', 'application/json');
        

       

        xhr.onload = function(){

            if(xhr.status == 200){

                callback(null, this.responseText)
            }else{
                callback(`Error ${this.status}`, null)
            }
        }

        xhr.send(JSON.stringify(data));
    }

    
}