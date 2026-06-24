

let allQuotes = [
  {id:1,  quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},
  {id:2,  quote:"It is better to fail in originality than to succeed in imitation.",author:"Herman Melville"},
  {id:3,  quote:"The road to success and the road to failure are almost exactly the same.",author:"Colin R. Davis"},
  {id:4,  quote:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},
  {id:5,  quote:"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",author:"Dale Carnegie"},
  {id:6,  quote:"Nothing in the world can take the place of persistence.… The slogan ’Press On’ has solved and always will solve the problems of the human race.",author:"Calvin Coolidge"},
  {id:7,  quote:"There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",author:"Mister Rogers"},
  {id:8,  quote:"Success is peace of mind…knowing you made the effort to become the best of which you are capable.",author:"John Wooden"},
  {id:9,  quote:"I never dreamed about success. I worked for it.",author:"Estée Lauder"},
  {id:10, quote:"Success is getting what you want; happiness is wanting what you get.",author:"W. P. Kinsella"},
  {id:11, quote:"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",author:"Winston Churchill"},
  {id:12, quote:"Don’t let yesterday take up too much of today.",author:"Will Rogers"},
  {id:13, quote:"If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",author:"Steve Jobs"},
  {id:14, quote:"Concentrate all your thoughts upon the work in hand.",author:"Alexander Graham Bell"},
  {id:15, quote:"Either you run the day or the day runs you.",author:"Jim Rohn"},
  {id:16, quote:"I'm a great believer in luck, and I find the harder I work, the more I have of it.",author:"Thomas Jefferson"},
  {id:17, quote:"Setting goals is the first step in turning the invisible into the visible.",author:"Tony Robbins"},
  {id:18, quote:"Your work is going to fill a large part of your life…do what you love.",author:"Steve Jobs"},
  {id:19, quote:"Think like a queen… Failure is another stepping stone to greatness.",author:"Oprah Winfrey"},
  {id:20, quote:"If you want something said, ask a man; if you want something done, ask a woman.",author:"Margaret Thatcher"},
  {id:21, quote:"He who conquers himself is the mightiest warrior.",author:"Confucius"},
  {id:22, quote:"Try not to become a man of success, but rather become a man of value.",author:"Albert Einstein"},
  {id:23, quote:"One man with courage makes a majority.",author:"Andrew Jackson"},
  {id:24, quote:"A successful man will profit from his mistakes and try again in a different way.",author:"Dale Carnegie"},
  {id:25, quote:"You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.",author:"George Lorimer"},
  {id:26, quote:"Education is the most powerful weapon which you can use to change the world.",author:"Nelson Mandela"},
  {id:27, quote:"The most difficult thing is the decision to act; the rest is merely tenacity.",author:"Amelia Earhart"},
  {id:28, quote:"Just one small positive thought in the morning can change your whole day.",author:"Dalai Lama"},
  {id:29, quote:"Opportunities don’t happen, you create them.",author:"Chris Grosser"},
  {id:30, quote:"Do what you can, with what you have, where you are.",author:"Theodore Roosevelt"},
  {id:31, quote:"Believe in yourself! Have faith in your abilities!",author:"Norman Vincent Peale"},
  {id:32, quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",author:"Samuel Beckett"},
  {id:33, quote:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},
  {id:34, quote:"Life is 10% what happens to you and 90% how you react to it.",author:"Charles R. Swindoll"},
  {id:35, quote:"What you do today can improve all your tomorrows.",author:"Ralph Marston"},
  {id:36, quote:"Live the life of your dreams: be brave enough to….",author:"Roy T. Bennett"},
  {id:37, quote:"Believe in yourself. You are braver than you think…",author:"Roy T. Bennett"},
  {id:38, quote:"Everything you’ve ever wanted is sitting on the other side of fear.",author:"George Addair"},
  {id:39, quote:"You make time for the people you care about.",author:"Anonymous"},
  {id:40, quote:"Done is better than perfect.",author:"Anonymous"},
  {id:41, quote:"Perfect is the enemy of progress.",author:"Anonymous"},
  {id:42, quote:"Change brings opportunity.",author:"Nido Qubein"},
  {id:43, quote:"Sometimes good things fall apart so better things could fall together.",author:"Marilyn Monroe"},
  {id:44, quote:"I am no longer accepting the things I cannot change; I’m changing the things I cannot accept.",author:"Angela Davis"},
  {id:45, quote:"To achieve greatness, start where you are, use what you have, do what you can.",author:"Arthur Ashe"},
  {id:46, quote:"If you think you can, you're right. If you think you can't, you're still right.",author:"Henry Ford"},
  {id:47, quote:"If one is lucky, a solitary fantasy can totally transform one million realities.",author:"Maya Angelou"},
  {id:48, quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",author:"Nelson Mandela"},
  {id:49, quote:"It always seems impossible until it’s done.",author:"Nelson Mandela"},
  {id:50, quote:"Act as if what you do makes a difference. It does.",author:"William James"}
];

if (!localStorage.getItem('allQuotes')) {
    localStorage.setItem('allQuotes', JSON.stringify(allQuotes));
}





// variables

const newQuote1 = document.querySelector('#newQuote');

const addNewQuote = document.querySelector('#addQuote');

const skipQuote = document.querySelector('#skipBtn')
  const statsBtn = document.querySelector('#statsBtn');
  const likeBtn = document.querySelector('#likeBtn');



// All function loader

AllFunctionloader();

function AllFunctionloader(){

    console.log('All function starts')

    //new quote function call

      newQuote1.addEventListener('click', randomQuote);
    addNewQuote.addEventListener('click', addnewQuote);

    likeBtn.addEventListener('click', likeQuote);

    statsBtn.addEventListener('click', showStats);

    skipQuote.addEventListener('click', skipQuoteFunc);

     // library count
   

    librarycount();
     randomQuote();
     loadLikeCount();
     loadSkipCount();

    document.querySelector('#addYourQuote').value = "" ;
    document.querySelector('#addAuthor').value = "";

   

    


}




    function librarycount(){
         let getQuotes = localStorage.getItem('allQuotes');
        let objQuotes = JSON.parse(getQuotes);

     let librarylen = objQuotes.length;

     document.querySelector('.quoteCount').innerHTML = librarylen;
    }

// addNewQuote


function addnewQuote(){

    
         let getquoteinput = document.querySelector('#addYourQuote').value.trim();
        let getauthorinput = document.querySelector('#addAuthor').value.trim();

         if (!getquoteinput || !getauthorinput) {
        alert("Please enter both quote and author");
        return;
    }

     let getQuotes = localStorage.getItem('allQuotes');
        let objQuotes = JSON.parse(getQuotes) || [];
        console.log(objQuotes);


        let dummyObj = {
            id : objQuotes.length+1,
            quote: getquoteinput,
            author: getauthorinput
        }

        console.log(`new quote : ${dummyObj}  `)

        objQuotes.push(dummyObj)
        
        localStorage.setItem('allQuotes', JSON.stringify(objQuotes));
        console.log('Quote added successfully');

       
        

        // library count
           librarycount();
         
         document.querySelector('#addYourQuote').value = "" ;
         document.querySelector('#addAuthor').value = "";

}

// Random Quote 

function randomQuote(){

    let getQuotes = localStorage.getItem('allQuotes');
    let objQuotes = JSON.parse(getQuotes)  || [];
    let len = objQuotes.length;

     if (len === 0) {
        return;
    }


    let randomNum = Math.floor( Math.random() * len);

    let  appendQuote = document.querySelector('.motivation-container') ;
    appendQuote.innerHTML = `${objQuotes[randomNum].quote}`;

    console.log(` random quotes ${objQuotes[randomNum].quote}`)

    let appendAuthor = document.querySelector('.author-container');
    appendAuthor.innerHTML = `-- ${objQuotes[randomNum].author}`;

    console.log(` author quotes  --- ${objQuotes[randomNum].author}`)

}



if(!localStorage.getItem('likes')){
    localStorage.setItem('likes', 0);
}

function likeQuote(){

    let likes = Number(localStorage.getItem('likes'));

    likes++;

    localStorage.setItem('likes', likes);

    document.querySelector('.likeCount').innerHTML = likes;
}

function loadLikeCount(){

    let likes = Number(localStorage.getItem('likes')) || 0;

    document.querySelector('.likeCount').innerHTML = likes;
}


if(!localStorage.getItem('skips')){
    localStorage.setItem('skips', 0);
}

function skipQuoteFunc(){

    let skips = Number(localStorage.getItem('skips'));

    skips++;

    localStorage.setItem('skips', skips);

    document.querySelector('.skipCount').innerHTML = skips;

    randomQuote();
}

function loadSkipCount(){

    let skips = Number(localStorage.getItem('skips')) || 0;

    document.querySelector('.skipCount').innerHTML = skips;
}



function showStats(){

    let totalQuotes =
        JSON.parse(localStorage.getItem('allQuotes')).length;

    let likes =
        Number(localStorage.getItem('likes')) || 0;

    let skips =
        Number(localStorage.getItem('skips')) || 0;

    alert(
        `Library Quotes : ${totalQuotes}
Likes : ${likes}
Skipped : ${skips}`
    );
}