// requestAnimationFrame('dotenv').config();
const axios=require('axios');
const Weather = require('../models/weather.model')
const WEATHER_BIT_KEY=process.env.WEATHER_BIT_KEY;
const Cache = require('../helper/Cache')

const cacheObjectect = new Cache();

const weatherController = (req,res)=>{
    const lat = req.query.lat;
    const lon = req.query.lon;
    const requestKey = `weather-${lat}-${lon}`
      console.log('requestKey' , requestKey);
   if(lat && lon){

    if(cacheObjectect[requestKey] && (Date.now()-cacheObject[requestKey]<86400000)){
        console.log('=====================');
        console.log('from the cache object');
        console.log('=====================');
          res.json(cacheObject[requestKey])
          // console.log('data',cacheObject[requestKey]);
      }else{
        const weatherBitUrl =`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${searchQuery}`
  
        axios.get(weatherBitUrl).then(responce =>{
          const responceData = responce.data.data.map(obj => new Weather(obj))
          console.log('================================');
          console.log('from the cache axios request');
          console.log('================================');
          console.log('================================');
          console.log('storing the data from the cache');
          console.log('================================');
  
         
          
          cacheObject[requestKey]={data:responceData}
          cacheObject[requestKey].timestamp = Date.now()
  
          res.json(responceData)
        }).catch(error =>{
          res.send(error.message)
        })
        
      }
  
    
      
     }else{
           res.send('please provide the proper lat and lon')
     }
    }
  
    module.exports = weatherController;
