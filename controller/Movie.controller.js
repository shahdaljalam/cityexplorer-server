// requestAnimationFrame('dotenv').config();
const axios=require('axios');
const Movie = require('../models/movie.model');
const MOVIE_API_KEY=process.env.MOVIE_API_KEY;
const Cache = require('../helper/Cache');

const cachobject = new Cache();

async function displayMovie (req,res){
    let searchQuery=req.query.query;
    const requestKey = `movie-${searchQuery}`

    if(cachobject[requestKey] && (Data.now()-cachobject[requestKey]<86400000)){
        console.log('---------------------');
        console.log('form the cach object');
        console.log('---------------------');
        res.json(cachobject[requestKey].data)
    } else {
        const movieUrl=`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${searchQuery}`
        const movieDD=await axios.get(movieUrl);
        const movieData= movieDD.data.results.map(movie=>{
          return new Movie(movie);})
        console.log('================================');
        console.log('from the cache axios request');
        console.log('================================');
        console.log('================================');
        console.log('storing the data from the cache');
        console.log('================================');
       
          cacheObject[requestKey]={data:movieData}
          cacheObject[requestKey].timestamp = Date.now()
        res.status(200).send(movieData) 
        
      }
     
      
      }
  
  
  module.exports = displayMovie;