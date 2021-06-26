require('dotenv').config();
const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors'); 
const { response } = require('express');
const weatherController= require('../cityexplorer-server/controller/Weather.controller');
const MovieController = require('../cityexplorer-server/controller/Movie.controller');
const indexController = require('../cityexplorer-server/controller/index.controller');

app.use(cors()) // after you initialize your express app instance


const port = process.env.port;

app.get('/', indexController);
app.get('/weather', weatherController);
app.get('/movie', MovieController);




// const WEATHER_BIT_KEY = process.env.WEATHER_BIT_KEY;
// const wData = require('./data/weather.json');
// const axios= require('axios');


// // a server endpoint 
// app.get('/', // our endpoint name
//  function (req, res) { // callback function of what we should do with our request
//   res.send('Hello World') // our endpoint function response
// })
// app.get('/weather', (req, res) => {
//     const lat = req.query.lat;
//     const lon = req.query.lon;
//     console.log(lat);
//     if (lat && lon) {
//       const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_BIT_KEY}&lat=${lat}&lon=${lon}`
     
//       axios.get(weatherUrl).then(response =>{
//         const respData = response.data.data.map(obj => new Weather(obj));
  
//        res.json(respData)
//      }).catch(error=>{
//        res.send(error.message );
//      });
//       console.log(weatherUrl);
//     }
//     else {
//       res.send('please provide the proper lat and lon ');
//     }
    
    
//   });
//   class Weather {
//     constructor(wData) {
//       this.description = wData.weather.description;
//       this.date = wData.valid_date;
//       this.high = wData.max_temp;
//       this.low = wData.low_temp;
//     }
//   }
 
app.listen(port, ()=> {
    console.log(`server start on port: ${port}`);
}); // kick start the express server to work
