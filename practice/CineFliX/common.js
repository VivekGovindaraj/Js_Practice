    //url

    let NowPlayingURL = `${CONFIG.BASE_URL}/movie/now_playing?api_key=${CONFIG.API_KEY}`;
    let PopularURL =   `${CONFIG.BASE_URL}/movie/popular?api_key=${CONFIG.API_KEY}`;
    let TopRatedURL =   `${CONFIG.BASE_URL}/movie/top_rated?api_key=${CONFIG.API_KEY}`;
    let UpComingURL =   `${CONFIG.BASE_URL}/movie/upcoming?api_key=${CONFIG.API_KEY}`;
    // let RecomendedURL =   `${CONFIG.BASE_URL}/movie/recommendations?api_key=${CONFIG.API_KEY}`;

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



    // fetch all response 

    async function fetchMovies() {

      showSkeleton(".nowPlaying")
        showSkeleton(".Popular")
        showSkeleton(".topRated")
        showSkeleton(".upComing")
        // showSkeleton(".AllMovies")
    try{
      const everyfetchedMovies = await Promise.all([
      fetch(NowPlayingURL,fetchOptions).then( res => res.json()),
      fetch(PopularURL,fetchOptions).then( res => res.json()),
      fetch(TopRatedURL,fetchOptions).then( res => res.json()),
      fetch(UpComingURL,fetchOptions).then( res => res.json())
      // fetch(RecomendedURL,fetchOptions).then( res => res.json()),
    ])

    const [nowPlaying,popularUrl,topRated,upcoming] = everyfetchedMovies
      


      const nowPlayingMovies = nowPlaying.results;
      const popularMovies = popularUrl.results;
      const topRatedMovies = topRated.results;
      const upComingMovies = upcoming.results;
      // const recomendedMovies = upcoming.results;

      movies = [...nowPlayingMovies, ...popularMovies, ...topRatedMovies, ...upComingMovies]

        const randomMovie =
        nowPlayingMovies[
          Math.floor(
            Math.random() * nowPlayingMovies.length
          )
        ];

        if(document.querySelector('.banner-container')){
          BannerMovie(randomMovie)
        }

        renderMovies(".nowPlaying",nowPlayingMovies)
        renderMovies(".Popular", popularMovies)
        renderMovies(".topRated", topRatedMovies)
        renderMovies(".upComing", upComingMovies)
        renderMovies(".AllMovies", movies)
        // getRecommendedMoviesHTML('recommendedMovies', recomendedMovies)
    } 
      
    catch (error) {
      console.error(`TMDB ERROR :`, error)
    }
    }

    fetchMovies() // fetch function all movie call


    // search input function
    const searchInput = document.querySelectorAll('#searchInputDesktop, #searchInputMobile');
    // const serachDropdown = document.querySelector(".searchDropdown")
     

searchInput.forEach((input) => {
    input.addEventListener('keyup', function(){

      debugger;
        const wrapper = input.closest('.input-group');
        const clearBtn = wrapper.querySelector('.clear-btn');


       const dropdown = document.querySelector('.searchDropdown')
        // input.closest('.offcanvas') 
        // ? document.querySelector('#mobileMenu .searchDropdown')
        // : document.querySelector('.navbar .searchDropdown');

      let searchedTxt = input.value.toLowerCase().trim()

       if (searchedTxt.length > 0) {
      clearBtn.classList.remove('d-none');
    } else {
      clearBtn.classList.add('d-none');
      dropdown.style.display = "none";
      dropdown.innerHTML = "";
      return;
    }

    if (searchedTxt.length < 2) {
      dropdown.style.display = "none";
      return;
    }

      if(searchedTxt.length < 2){
      dropdown.style.display="none"
      return
      }

      let uniqueMovies = [...new Map((
        movies.map(movie => [movie.id, movie])
      )).values()]

      let filteredMovie = uniqueMovies.filter( (movie) =>{

      return  movie.title?.toLowerCase().includes(searchedTxt) || movie.original_title?.toLowerCase().includes(searchedTxt)
      })

      dropdown.innerHTML = filteredMovie.map((movie) => {

    return `
      <div class="search-item" data-movie="${encodeURIComponent(JSON.stringify(movie))}"> 

        <img src="${CONFIG.IMAGE_URL}${movie.poster_path}" alt="movie">
        <span>${movie.original_title}</span>
      </div>
      
      `
      }).join("")

      dropdown.style.display="block";
      clearBtn.addEventListener('click', () => {
    input.value = "";
    clearBtn.classList.add("d-none");
    dropdown.style.display = "none";
    dropdown.innerHTML = "";
    input.focus();
  });

    })
  })



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

    function showSkeleton(container) {

      debugger;
      const containerAll1 = document.querySelector(container);
      if(!containerAll1) return;

      let skeletonHTML = "";

      for (let i = 0; i < 8; i++) {
        skeletonHTML += `<div class="movie-skeleton"></div>`;
      }

      containerAll1.innerHTML = skeletonHTML;
    }

    function renderMovies (container, movies){
      const containerAll = document.querySelector(`${container}`);
      if(!containerAll) return;
      if(movies.length == 0) {
        containerAll.innerHTML = `
        <div class="mt-5 text-center"><h4 >No Movies found </h4></div>
        
        `
      }else{

      
    
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

    }


    // event listeners for all cards

    document.addEventListener('click', async (e) => {
      const moviecard = e.target.closest('.movie-card');
      const recommendedcard = e.target.closest('.recommended-card');
      const searchItem = e.target.closest('.search-item');

      let movie = null;
      let showRecommend = false;

      if (moviecard) {
        movie = JSON.parse(decodeURIComponent(moviecard.dataset.movie));
        showRecommend = false; 
      } else if (recommendedcard) {
        movie = JSON.parse(decodeURIComponent(recommendedcard.dataset.movie));
        showRecommend = true; 
      } else if (searchItem) {
        movie = JSON.parse(decodeURIComponent(searchItem.dataset.movie));
        showRecommend = true; 
      }

      if (!movie) return;

      

      await modalFunc(movie, showRecommend);

      bootstrap.Modal.getOrCreateInstance(document.getElementById('myModal')).show();
    });

    document.getElementById('myModal').addEventListener('hidden.bs.modal', () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '';
    });

    // MODAL FUNC

    async function modalFunc(movie, showRecommend=false) {

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

      // recomended movie section
        const recommendedContainer = document.querySelector('.recommendedMovies')
        const recommendedContainerTitle = document.querySelector('.recommendedMoviesTiltle')
        debugger;

        if(showRecommend){

          const recommendedMovies = await fetchRecommendedMovies(movie.id);
          recommendedContainer.innerHTML =  getRecommendedMoviesHTML(recommendedMovies)
          
          recommendedContainer.style.display="flex"
          recommendedContainerTitle.style.display="block"

        }else{
          recommendedContainer.innerHTML =""
          recommendedContainer.style.display="none"
          recommendedContainerTitle.style.display="none"
        }

        if(showRecommend){
          document.querySelectorAll('.recommended-card').forEach( card =>{

            card.addEventListener('click' , ()=> {
              const recMovie = JSON.parse(decodeURIComponent(card.dataset.movie))
              modalFunc(recMovie,true)

            })


          }) 
        }
    }



    async function fetchRecommendedMovies(movieId) {
      try {
        const res = await fetch(`${CONFIG.BASE_URL}/movie/${movieId}/recommendations?api_key=${CONFIG.API_KEY}`, fetchOptions);
        const data = await res.json();
        return data.results || [];
      } catch (err) {
        console.error("Error fetching recommended movies:", err);
        return [];
      }
    }

    function getRecommendedMoviesHTML(recommendedMovies) {

      return recommendedMovies.slice(0,10).map(movie => `
        <div
          class="recommended-card"
          data-movie="${encodeURIComponent(JSON.stringify(movie))}"
        >
          <img
            src="${CONFIG.IMAGE_URL}${movie.poster_path}"
            alt="${movie.original_title}"
          >

          
        </div>
      `).join('');

    }


    function scrollRow(btn, value) {
      const wrapper = btn.closest(".movie-wrapper");
      const row = wrapper.querySelector(".movie-row");

      row.scrollBy({
        left: value,
        behavior: "smooth"
      });
    }


    document.querySelectorAll('.searchBoxBtn').forEach(btn => 
       btn.addEventListener('click', function(){
      window.location.href="search.html"
    })
    )
   
    //search filter and geneer render 

   async function  generReneder(){

    const response = await fetch(
      `${CONFIG.BASE_URL}/genre/movie/list?api_key=${CONFIG.API_KEY}}`,
      fetchOptions
    )

    const data= await response.json();

    const genereDropdown = document.querySelector('#genreFilter')

    data.genres.forEach( genre => {

      genereDropdown.innerHTML += `
      <option value=${genre.id}>${genre.name}</option>
      `
    }) 

   }


    generReneder().then(() => {
  genreFilter.addEventListener('change', filterMovie);
  yearFilter.addEventListener('change', filterMovie);
});

    let  genreFilter = document.querySelector('#genreFilter');
    let  yearFilter = document.querySelector('#yearFilter');

    function filterMovie(){
      debugger;
      let filteredMovie = [...movies]

      let genreValue = genreFilter.value;
      let selectedYear = yearFilter.value;

      if(genreValue){

       filteredMovie = filteredMovie.filter(movie => movie.genre_ids?.includes(Number(genreValue)))
      }
       if(selectedYear){

       filteredMovie = filteredMovie.filter(movie => movie.release_date?.includes(selectedYear))
      }

      renderMovies('.AllMovies', filteredMovie)
    }
   
    
  

  
  
      document.querySelector('.filterResetBtn ').addEventListener('click',  function(){
        genreFilter.value = ""
        yearFilter.value = ""
          renderMovies('.AllMovies', movies)
      }
    )

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

      





