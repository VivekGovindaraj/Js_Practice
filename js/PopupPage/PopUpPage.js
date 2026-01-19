const overlaybox = document.querySelector('.overlay');
    const closebutton = document.querySelector('.btnclose');
    const modal =  document.querySelector('.modal');
    const modalbtn = document.querySelector('.popupbtn');
    const ok = document.querySelector('.okbtn');

    document.querySelector('.popupbtn').addEventListener('click', function() {
        // if(typeof(overlaybox) != "undefined" && overlaybox != null &&  overlaybox == ""){
            // overlaybox.classList.remove('hide');
            modal.classList.remove('hide');
        // }
        // else{
            // overlaybox.classList.add('hide');
            //  
        // }

    });

    // document.addEventListener('DOMContentLoaded', function(){
    //     modal.classList.remove('hide');
    // })

    document.querySelector('.btnclose').addEventListener('click', function(){
        console.log(`click working`)
        document.querySelector('.modal').classList.add('hide');
        // document.querySelector('.overlay').classList.add('hide');
    })

    ok.addEventListener('click', function(){

        modal.style.display = 'none';
        console.log('hide works')
        
    })

    modalbtn.addEventListener('click', function(){
    modal.style.display= 'block';
    const m1 = () => {
        document.querySelector("#Message").style.color = '#101033';
        document.querySelector("#Message").style.fontSize = '22px';
        document.querySelector("#Message").textContent = ' Please read Instructions Carefully....!!!!';

        
    }
    document.querySelector("#Message").html = m1();

    })
    closebutton.addEventListener('click', function(){

        modal.style.display = 'none';
        console.log('hide works')
        
    })

    // document.addEventListener('DOMContentLoaded', function(){
    //     modal.style.display = 'block';
    // })


    document.addEventListener('keydown', function(e){
        console.log(e.key);
        modal.classList.remove('hide');
        if(e.key === 'Enter') {
             modal.style.display = 'none';
            
            
        }
        else{
            modal.style.display = 'block';
        }
    })

   
