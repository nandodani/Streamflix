const API_KEY = 'api_key=665e5bf9c0f6dbf1af864998cc5d2414';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
const searchURL= BASE_URL + '/search/movie?'+ API_KEY;
const sAPI_URL = BASE_URL + '/discover/tv?sort_by=popularity.desc&'+ API_KEY;
const sSearchURL = BASE_URL + '/search/tv?' + API_KEY;
const hAPI_URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=665e5bf9c0f6dbf1af864998cc5d2414'

const express = require('express');
const router = express.Router();
const axios = require('axios');


/*____________________EXTRAIR INFORMAÇÃO DOS MOVIES__________________________________*/


router.get("/movies", async (req, res) => {
   const movies = await axios
     .get(API_URL)
     .then((res) => {
      
      return res.data.results;
     })
     .catch((error) => console.log(error));
 
   res.render("../views/pages/movies", { movies: movies });
});

router.post('/movies',async (req,res)=>{
   let search = req.body.searchmo
   
   const smovies = await axios
      .get(searchURL+ '&query=' + search)
      .then((res) => {
         return res.data.results;
      })
      .catch((error)=> console.log(error));
   res.render("../views/pages/search_movies", { smovies: smovies });
});

/*___________________________________EXTRAIR INFORMAÇÃO DAS SÉRIES___________________________________________________*/

router.get("/series", async (req, res) => {
   const series = await axios
     .get(sAPI_URL)
     .then((res) => {
      
      return res.data.results;
     })
     .catch((error) => console.log(error));
   res.render("../views/pages/series", { series: series });
});

router.post('/series',async (req,res)=>{
   let search = req.body.searchse
   
   const sseries = await axios
      .get(sSearchURL + '&query=' + search)
      .then((res) => {
         return res.data.results;
      })
      .catch((error)=> console.log(error));
   res.render("../views/pages/search_series", { sseries: sseries });
});




/*_____________________________Trending Home______________________________________________________*/

router.get("/home", async (req, res) => {
   const trend = await axios
     .get(hAPI_URL)
     .then((res) => {
      return res.data.results;
     })
     .catch((error) => console.log(error));
   res.render("../views/pages/home", { trend: trend });
});

/*___________________________________________MAIN__________________________________________________*/
router.get("/", async (req, res) => {
   console.log("Request for index received")
   res.render("pages/index");
});

router.get("/home", async (req, res) => {
   console.log("Request for home received")
   res.render("pages/home");
});

router.get("/user", async (req, res) => {
   console.log("Request for user received")
   res.render("pages/user");
});

router.get("/login", async (req, res) => {
   console.log("Request for login received")
   res.render("pages/login");
});

router.get("/register", async (req, res) => {
   console.log("Request for register received")
   res.render("pages/register");
});
router.get("/about", async (req, res) => {
   console.log("Request for about received")
   res.render("pages/about");
});

module.exports = router;