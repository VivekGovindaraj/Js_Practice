// movies

let movies = [];


// Now playing


const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=846cb286a5792c393751f1924a1adce2';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDZjYjI4NmE1NzkyYzM5Mzc1MWYxOTI0YTFhZGNlMiIsIm5iZiI6MTc1NDU4MDY5Mi45NDcsInN1YiI6IjY4OTRjNmQ0OTY1OWMyMjM2YWEzMmNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-f1A3dxTtTCquszklEJCjC9HDWzNdaEJ_MLMThW-eg'

  }
};

fetch(url, options)
  .then(response => response.json())
  .then(json => {
    debugger;

    console.log("Nowplaying",json.results)
    let arr = json.results;

    let randomNum = Math.floor(Math.random() * 19) + 1;

    movies.push(arr)
     

    arr.forEach((obj) =>{
      debugger;
      
      document.querySelector('.nowPlaying').innerHTML += `<img src="https://image.tmdb.org/t/p/w500${obj.poster_path}" class="movie-poster" alt="" data-bs-toggle="modal" data-bs-target="#myModal" >`
     
    } )

     document.querySelector('.banner-container').style.backgroundImage = `url('https://image.tmdb.org/t/p/w300${json.results[randomNum].backdrop_path}')`;
       document.querySelector('.banner-movie-title').innerHTML = `${json.results[randomNum].original_title}`


      document.querySelectorAll('.movie-poster').forEach( (card, index) =>{
        

        card.addEventListener('click', function(){
          
          modalFunc(arr[index])
        })
      })


  }
    
  )
  
  .catch(err => console.error(err));
//

function modalFunc(obj){
  debugger;
  console.log(obj)
  document.querySelector('.img-container').innerHTML = `<img src="https://image.tmdb.org/t/p/w500${obj.poster_path}" class="modal-img" alt="">`
  document.querySelector('.movieTitle').innerHTML = `${obj.original_title}`;
  let year = obj.release_date.slice(0,4);
  document.querySelector('.relasedYear').innerHTML = `Year : ${year}`;
  document.querySelector('.movieOverview').innerHTML  = `${obj.overview}`;
  document.querySelector('.movieRating').innerHTML = `${obj.vote_average}`; 
  document.querySelector('.voteCount').innerHTML = `Vote : ${obj.vote_count}`; 
}

// popular content

let popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=846cb286a5792c393751f1924a1adce2';

const popularoptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDZjYjI4NmE1NzkyYzM5Mzc1MWYxOTI0YTFhZGNlMiIsIm5iZiI6MTc1NDU4MDY5Mi45NDcsInN1YiI6IjY4OTRjNmQ0OTY1OWMyMjM2YWEzMmNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-f1A3dxTtTCquszklEJCjC9HDWzNdaEJ_MLMThW-eg'

  }
};

fetch(popularUrl, popularoptions)
  .then(response1 => response1.json())
  .then(json1 => {
    debugger;

    console.log("popular",json1.results)
    let arr1 = json1.results;

    movies.push(arr1);

    arr1.forEach((obj) =>{
      debugger;
     
      document.querySelector('.Popular').innerHTML += `<img src="https://image.tmdb.org/t/p/w500${obj.poster_path}" class="movie-poster1" alt="" data-bs-toggle="modal" data-bs-target="#myModal">`
    } )

    document.querySelectorAll('.movie-poster1').forEach( (card, index) =>{
        

        card.addEventListener('click', function(){
          
          modalFunc(arr1[index])
        })
      })

  }
 
  )
  
  .catch(err => console.error(err));


  //Top rated


  
let topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=846cb286a5792c393751f1924a1adce2';

const topRatedoptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDZjYjI4NmE1NzkyYzM5Mzc1MWYxOTI0YTFhZGNlMiIsIm5iZiI6MTc1NDU4MDY5Mi45NDcsInN1YiI6IjY4OTRjNmQ0OTY1OWMyMjM2YWEzMmNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-f1A3dxTtTCquszklEJCjC9HDWzNdaEJ_MLMThW-eg'

  }
};

fetch(topRatedUrl, topRatedoptions)
  .then(response2 => response2.json())
  .then(json2 => {
    debugger;

    console.log("toprated",json2.results)
    let arr2 = json2.results;

    movies.push(arr2);

    arr2.forEach((obj) =>{
      debugger;
      
      document.querySelector('.topRated').innerHTML += `<img src="https://image.tmdb.org/t/p/w500${obj.poster_path}" class="movie-poster2" alt=""   data-bs-toggle="modal" data-bs-target="#myModal">`
    } )

     document.querySelectorAll('.movie-poster2').forEach( (card, index) =>{
        

        card.addEventListener('click', function(){
          
          modalFunc(arr2[index])
        })
      })

  }
 
  )
  
  .catch(err => console.error(err));


  // upcoming


    
let upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=846cb286a5792c393751f1924a1adce2';

const upcomingoptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDZjYjI4NmE1NzkyYzM5Mzc1MWYxOTI0YTFhZGNlMiIsIm5iZiI6MTc1NDU4MDY5Mi45NDcsInN1YiI6IjY4OTRjNmQ0OTY1OWMyMjM2YWEzMmNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-f1A3dxTtTCquszklEJCjC9HDWzNdaEJ_MLMThW-eg'

  }
};

fetch(upcomingUrl, upcomingoptions)
  .then(response3 => response3.json())
  .then(json3 => {
    debugger;

    console.log("upcoming",json3.results)
    let arr3 = json3.results;

    movies.push(arr3);


    

    arr3.forEach((obj) =>{
      debugger;
     
      document.querySelector('.upComing').innerHTML += `<img src="https://image.tmdb.org/t/p/w500${obj.poster_path}" class="movie-poster3" alt=""  data-bs-toggle="modal" data-bs-target="#myModal">`
    } )

     document.querySelectorAll('.movie-poster3').forEach( (card, index) =>{
        

        card.addEventListener('click', function(){
          
          modalFunc(arr3[index])
        })
      })

      // All Movies
      let Allmovies = movies.flat()

    console.log(Allmovies)
    
    Allmovies.forEach((obj) =>{
      debugger;
     
      document.querySelector('.Allmovies').innerHTML += `<img src="https://image.tmdb.org/t/p/w500${obj.poster_path}" class="movie-poster3" alt=""  data-bs-toggle="modal" data-bs-target="#myModal">`
    } )



     document.querySelectorAll('.movie-poster3').forEach( (card, index) =>{
        

        card.addEventListener('click', function(){
          
          modalFunc(Allmovies[index])
        })
      })


    

  }
 
  )
  
  .catch(err => console.error(err));


  // movies

   





