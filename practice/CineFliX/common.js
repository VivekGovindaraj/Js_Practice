//url

let NowPlayingURL = `${CONFIG.BASE_URL}/movie/now_playing?api_key=${CONFIG.API_KEY}`;
let PopularURL =   `${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}`;
let TopRatedURL =   `${CONFIG.BASE_URL}/movie/top_rated?api_key=${CONFIG.API_KEY}`;
let UpComingURL =   `${CONFIG.BASE_URL}/movie/upcoming?api_key=${CONFIG.API_KEY}`;

// fetch options

const fetchOptions = {
  method:"GET",
  headers:{
    accept:"application/json",
    Authorization:`Bearer ${CONFIG.BEARER_TOKEN}`
  }
}

// movies

let movies = [];

// MODAL FUNC

function modalFunc(movie) {

  console.log(movie);

  document.querySelector('.img-container').innerHTML = `
    <img src="${CONFIG.IMAGE_URL}${movie.poster_path}"
         class="modal-img"
         alt="${movie.original_title}">
  `;

  document.querySelector('.movieTitle').textContent =
    movie.original_title;

  document.querySelector('.relasedYear').textContent =
    `Year : ${movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}`;

 const overview =
movie.overview?.length > 180
? movie.overview.slice(0,180) + "..."
: movie.overview;

document.querySelector('.movieOverview').textContent = overview;

  document.querySelector('.movieRating').textContent =
    movie.vote_average ?? 'N/A';

  document.querySelector('.voteCount').textContent =
    `Vote : ${movie.vote_count ?? 0}`;
}


//Banner Movie

function BannerMovie(movie){
  const bannerURL = `${CONFIG.BACKDROP_URL}${movie.backdrop_path}`

    const img = new Image();

  img.onload = () => {

    document.querySelector(".banner-container").style.backgroundImage =
      `url(${bannerURL})`;

    document.querySelector(".banner-movie-title").textContent =
      movie.original_title;
  };

  img.src = bannerURL;
}

// movie renders

function renderMovies (container, movies){
  const containerAll = document.querySelector(`${container}`);
  if(!containerAll) return;

  containerAll.innerHTML = movies.map((movie) => {

   return `

        <div class="col-4 col-sm-3 col-lg-2">

          <img
              src="${CONFIG.IMAGE_URL}${movie.poster_path}"
              class="movie-card "
              alt="${movie.original_title}"
              loading="lazy"
              data-movie="${encodeURIComponent(JSON.stringify( movie))}"
              data-bs-toggle="modal"
              data-bs-target="#myModal">

        </div>

        `;
  }).join("")

}


// event listeners for all cards

document.addEventListener('click', (e) => {

   const card = e.target.closest('.movie-card');

  if (!card) return;


   const movie = JSON.parse(
    decodeURIComponent(card.dataset.movie)
  );

  modalFunc(movie);

});

// fetch all response 

Promise.all([
  fetch(NowPlayingURL,fetchOptions).then( res => res.json()),
  fetch(PopularURL,fetchOptions).then( res => res.json()),
  fetch(TopRatedURL,fetchOptions).then( res => res.json()),
  fetch(UpComingURL,fetchOptions).then( res => res.json()),
])
.then(([nowPlaying,popularUrl,topRated,upcoming]) => {

  const nowPlayingMovies = nowPlaying.results;
  const popularMovies = popularUrl.results;
  const topRatedMovies = topRated.results;
  const upComingMovies = upcoming.results;

  movies = [...nowPlayingMovies, ...popularMovies, ...topRatedMovies, ...upComingMovies]

    const randomMovie =
    nowPlayingMovies[
      Math.floor(
        Math.random() * nowPlayingMovies.length
      )
    ];

    BannerMovie(randomMovie)

    renderMovies(".nowPlaying",nowPlayingMovies)
    renderMovies(".Popular", popularMovies)
    renderMovies(".topRated", topRatedMovies)
    renderMovies(".upComing", upComingMovies)
    renderMovies(".AllMovies", movies)
})
.catch(error => {
  console.error(`TMDB ERROR :`, error)
})




// // Now playing




// const url = 

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDZjYjI4NmE1NzkyYzM5Mzc1MWYxOTI0YTFhZGNlMiIsIm5iZiI6MTc1NDU4MDY5Mi45NDcsInN1YiI6IjY4OTRjNmQ0OTY1OWMyMjM2YWEzMmNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-f1A3dxTtTCquszklEJCjC9HDWzNdaEJ_MLMThW-eg'

//   } 
// };

// fetch(url, options)
//   .then(response => response.json())
//   .then(json => {
//     debugger;

//     console.log("Nowplaying",json.results)
//     let arr = json.results;

//     let randomNum = Math.floor(Math.random() * arr.length);
//     let randomMovie = arr[randomNum];

//     document.querySelector('.banner-container').style.backgroundImage =
//     `url(https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path})`;

//     document.querySelector('.banner-movie-title').innerText =
//     randomMovie.original_title;

//     movies.push(arr)
     

//  const nowPlayingContainer = document.querySelector('.nowPlaying');

//   if(nowPlayingContainer){

//     arr.forEach((obj)=>{

//         nowPlayingContainer.innerHTML += `

//         <div class="col-4 col-sm-3 col-lg-2">

//           <img
//               src="https://image.tmdb.org/t/p/w500${obj.poster_path}"
//               class="movie-card "
//               alt="${obj.original_title}"
//               data-bs-toggle="modal"
//               data-bs-target="#myModal">

//         </div>

//         `;

//     });

// }


//   }
    
//   )
  
//   .catch(err => console.error(err));
// //



// // popular content

// let popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=846cb286a5792c393751f1924a1adce2';

// const popularoptions = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDZjYjI4NmE1NzkyYzM5Mzc1MWYxOTI0YTFhZGNlMiIsIm5iZiI6MTc1NDU4MDY5Mi45NDcsInN1YiI6IjY4OTRjNmQ0OTY1OWMyMjM2YWEzMmNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-f1A3dxTtTCquszklEJCjC9HDWzNdaEJ_MLMThW-eg'

//   }
// };

// fetch(popularUrl, popularoptions)
//   .then(response1 => response1.json())
//   .then(json1 => {
//     debugger;

//     console.log("popular",json1.results)
//     let arr1 = json1.results;

//     movies.push(arr1);


//     const popular = document.querySelector('.Popular');

// if(popular){

//    arr1.forEach((obj)=>{

//       popular.innerHTML += `

//       <div class="col-4 col-sm-3 col-lg-2">

//          <img
//             src="https://image.tmdb.org/t/p/w500${obj.poster_path}"
//             class="movie-card "
//             alt="${obj.original_title}"
//             data-bs-toggle="modal"
//             data-bs-target="#myModal">

//       </div>

//       `;

//    });

// }

//     document.querySelectorAll('.movie-card').forEach( (card, index) =>{
        

//         card.addEventListener('click', function(){
          
//           modalFunc(arr1[index])
//         })
//       })

//   }
 
//   )
  
//   .catch(err => console.error(err));


//   //Top rated


  
// let topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=846cb286a5792c393751f1924a1adce2';

// const topRatedoptions = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDZjYjI4NmE1NzkyYzM5Mzc1MWYxOTI0YTFhZGNlMiIsIm5iZiI6MTc1NDU4MDY5Mi45NDcsInN1YiI6IjY4OTRjNmQ0OTY1OWMyMjM2YWEzMmNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-f1A3dxTtTCquszklEJCjC9HDWzNdaEJ_MLMThW-eg'

//   }
// };

// fetch(topRatedUrl, topRatedoptions)
//   .then(response2 => response2.json())
//   .then(json2 => {
//     debugger;

//     console.log("toprated",json2.results)
//     let arr2 = json2.results;

//     movies.push(arr2);

    

//         const topRated = document.querySelector('.topRated')

//         if(topRated){

//           arr2.forEach((obj)=>{

//               topRated.innerHTML += `

//               <div class="col-4 col-sm-3 col-lg-2">

//                 <img
//                     src="https://image.tmdb.org/t/p/w500${obj.poster_path}"
//                     class="movie-card "
//                     alt="${obj.original_title}"
//                     data-bs-toggle="modal"
//                     data-bs-target="#myModal">

//               </div>

//               `;

//           });

// }

//      document.querySelectorAll('.movie-card').forEach( (card, index) =>{
        

//         card.addEventListener('click', function(){
          
//           modalFunc(arr2[index])
//         })
//       })



//   }
 
//   )
  
//   .catch(err => console.error(err));


//   // upcoming


    
// let upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=846cb286a5792c393751f1924a1adce2';

// const upcomingoptions = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDZjYjI4NmE1NzkyYzM5Mzc1MWYxOTI0YTFhZGNlMiIsIm5iZiI6MTc1NDU4MDY5Mi45NDcsInN1YiI6IjY4OTRjNmQ0OTY1OWMyMjM2YWEzMmNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-f1A3dxTtTCquszklEJCjC9HDWzNdaEJ_MLMThW-eg'

//   }
// };

// fetch(upcomingUrl, upcomingoptions)
//   .then(response3 => response3.json())
//   .then(json3 => {
//     debugger;

//     console.log("upcoming",json3.results)
//     let arr3 = json3.results;

//     movies.push(arr3);



//         const upComing = document.querySelector('.upComing');

//       if(upComing){

//         arr3.forEach((obj)=>{

//             upComing.innerHTML += `

//             <div class="col-4 col-sm-3 col-lg-2">

//               <img
//                   src="https://image.tmdb.org/t/p/w500${obj.poster_path}"
//                   class="movie-card "
//                   alt="${obj.original_title}"
//                   data-bs-toggle="modal"
//                   data-bs-target="#myModal">

//             </div>

//             `;

//         });

//       }

//      document.querySelectorAll('.movie-card').forEach( (card, index) =>{
        

//         card.addEventListener('click', function(){
          
//           modalFunc(arr3[index])
//         })
//       })

//       // All Movies
//       let Allmovies = movies.flat()

    
//         const Allmovies1 = document.querySelector('.Allmovies');

//       if(Allmovies1){

//         Allmovies.forEach((obj)=>{

//             Allmovies1.innerHTML += `

//             <div class="col-4 col-sm-3 col-lg-2">

//               <img
//                   src="https://image.tmdb.org/t/p/w500${obj.poster_path}"
//                   class="movie-card"
//                   alt="${obj.original_title}"
//                   data-bs-toggle="modal"
//                   data-bs-target="#myModal">

//             </div>

//             `;

//         });

//       }



//      document.querySelectorAll('.movie-card').forEach( (card, index) =>{
        

//         card.addEventListener('click', function(){
          
//           modalFunc(Allmovies[index])
//         })
//       })


    

//   }
 
//   )
  
//   .catch(err => console.error(err));


//   // movies

   





