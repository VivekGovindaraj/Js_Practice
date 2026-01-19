let secretNumber = Math.trunc( Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.scoredisplay').textContent = score;

const displayMessage = function(message1){
    document.querySelector('.displayBoard2').textContent = message1;
}



document.querySelector('.checkbtn').addEventListener('click', function(){
    const guess1 = Number(document.querySelector('.txt').value);
    // const guess = document.querySelector('.txt').value;
    console.log(guess1, typeof guess1);
    if ( !guess1){
       
        displayMessage('No number..!');
        

    }
    
    if(guess1 === secretNumber ) {
        displayMessage('Correct Number...');
        document.querySelector('.displayBoard1').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscoredisplay').textContent = highscore;
            document.querySelector('body').style.background='green';
            document.querySelector('.txt').style.background='green';
        }

    }
    else if (guess1 !== secretNumber) {

        if(score > 1){

            displayMessage( (guess1 > secretNumber) ? 'Too high...' : 'Too low...');
            score--;
            document.querySelector('.scoredisplay').textContent = score;

        }
        else {
            const lostmsg = `You Lost the Game..\n\  secret number is ${secretNumber}\n\ Your score is 0..\n\ Please click play again to play the game again`;
            displayMessage(lostmsg);
            document.querySelector('.scoredisplay').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.txt').style.backgroundColor = 'red';
            document.querySelector('.displayBoard1').textContent = secretNumber;
        }

       
    }
}) 

document.querySelector('.againBtn').addEventListener('click', function(){
    score = 20;
    displayMessage('Start Guessing.......')
    document.querySelector('.scoredisplay').textContent = score;
    document.querySelector('.displayBoard1').textContent = '?';
    document.querySelector('.txt').value = "";
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.txt').style.backgroundColor = 'black';
})


