console.log(`Welcome to the mind reader`);

// variable declartion


let predictBtn = document.querySelector('#predict-btn');


    let scoreBoard = {
       happy : 0,
       sad:0,
       motivated:0
    }



Allfunctionloader();

function Allfunctionloader(){
    console.log(`Function loading starts`);

    // predict mood

    predictBtn.addEventListener('click', moodPredict)


    console.log(`Function loading ends`);
}

 
function moodPredict(){
    debugger;
    let userThoughts = document.querySelector('#userInput').value.trim();
    let displayBoard = document.querySelector('.displayBoard');

    let comparewords = userThoughts.toLowerCase().split(" ").map(word => word.replace(/[^a-z]/gi, ""));
     

    let moodCompare = {
        happy: ['love', 'win', 'awsome', 'good','great', 'joy', 'happy', 'fun', 'comedy','naugthy'],
        sad:['fail','tired', 'bad', 'alone', 'cry', 'pain', 'sad','worry'],
        motivated:['focus', 'work','try','goal', 'grind', 'learn']
    };


   

document.querySelector('.displayBoard').innerHTML = "";

let seenwords = new Set();

   comparewords.forEach(function(words){

        if (!words || seenwords.has(words)) return; 
        seenwords.add(words);
      
            let createh3 = document.createElement('h3');

            createh3.classList= "mx-5 px-2";
           
       

        if(moodCompare.happy.includes(words)){

           createh3.innerHTML = `Your current mood is "${words}".`;

            setTimeout(()=> {displayBoard.appendChild(createh3)}, 500);
            scoreBoard.happy++;
        }
        else if(moodCompare.sad.includes(words)){
            createh3.innerHTML = `Your current mood is "${words}".`;

            setTimeout( ()=> {displayBoard.appendChild(createh3)}, 500);
            scoreBoard.sad++;

        } else if(moodCompare.motivated.includes(words)){
            createh3.innerHTML = `Your are current mood is "${words}".`;
            setTimeout(()=> {displayBoard.appendChild(createh3)}, 500);
            scoreBoard.motivated++;

        }
    }

    )


    document.querySelector('#userInput').value = "";

    function count(count){
        debugger;

        document.querySelector('.happyCount').innerHTML = `${count.happy}`;
        document.querySelector('.sadCount').innerHTML = `${count.sad}`;
        document.querySelector('.motivatedCount').innerHTML = `${count.motivated}`;

    }
    setTimeout(()=> {count(scoreBoard)}, 500);


}