// document.querySelector('.player0').addEventListener('click', function(){
//     document.querySelector('.player0').classList.remove('playerActive');
// })

// document.querySelector('.player1').addEventListener('click', function(){
//     document.querySelector('.player1').classList.add('playerActive');
// })


let player1 = document.querySelector('.player0');
let player2 = document.querySelector('.player1');

let score0 = document.querySelector('#totalScore0');
let score1 = document.querySelector('#totalScore1');

let currentScoreBoard0 = document.querySelector('#currentScore0');
let currentScoreBoard1 = document.querySelector('#currentScore1');

// const active = document.querySelector('.playerActive');
// document.querySelector('.totalScore');  
// document.querySelector('currentScoreBoard');

const dice1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btnNewGame');
const btnRoll = document.querySelector('.btnRoll');
const btnHold = document.querySelector('.btnHold');

let scores, currentScore, activePlayer, playing;

// starting condtion for each element

const init = () => {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;

  currentScoreBoard0.textContent = 0;
  currentScoreBoard1.textContent = 0;

  dice1.classList.add('hide');

  player1.classList.remove('winner', 'playerActive');
  player2.classList.remove('winner', 'playerActive');

  player1.classList.add('playerActive');
};
init();



const switchPlayer = function() {
    document.getElementById(`currentScore${activePlayer}`).textContent = 0;
    currentScore = 0;
   
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('playerActive');
    player2.classList.toggle('playerActive');
}   


// Roll functions

btnRoll.addEventListener('click', function(){
 // generating random roll dice

 if(playing) {

    
    const diceRandom = Math.trunc(Math.random() *6 ) + 1;

// display dice
console.log(diceRandom);
dice1.classList.remove('hide');
dice1.src = `dice-${diceRandom}.svg`;

// scenario checking

if(diceRandom !== 1){
    currentScore += diceRandom;   
    // currentScoreBoard0.textContent = currentScore;
    document.getElementById(`currentScore${activePlayer}`).textContent = currentScore;
    
}else{
    // next player switch

    switchPlayer();
    // currentScore += diceRandom;   
    // currentScoreBoard0.textContent = currentScore;
    // document.getElementsByClassName(`player${activePlayer}`).textContent = currentScore;

    // currentScore += diceRandom;   
    // currentScoreBoard1.textContent = currentScore;
    // player1.classList.remove('playerActive');
    // player2.classList.add('playerActive');

}
 }

}

);

btnHold.addEventListener('click', function(){
    if(playing) {

        // add score active player
    scores[activePlayer] += currentScore;
    
    console.log(scores[activePlayer]);
    document.getElementById(`totalScore${activePlayer}`).textContent = scores[activePlayer];


    // check if player having score more or equal to 100

    if(scores[activePlayer] >= 20) {
        console.log(scores);
        
        playing = false;
        dice1.classList.add('hide');
        document.querySelector(`.player${activePlayer}`).classList.add('winner');
        document.querySelector(`.player${activePlayer}`).classList.remove('playerActive');
    }
    else{
         
        switchPlayer();
    }


    //switch  player
    }
    
    

})


btnNew.addEventListener('click', function() {
    init();
    // document.querySelector('.player0').classList.add('playActive');
    console.log('init working......');
    console.log(scores);
});
