const express = require("express")
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const app = express();

//configing server
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiKey = "RGAPI-a7fe9997-46bf-4a26-a959-47af274b348d"
const matchURL = "https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID" 

app.get("/search", (req, res) => {
  console.log(req.body)
  console.log("Get")
  res.json({ message: "Hello from server!" });

});


app.post("/search", (req, res) => {
  console.log(req.body)
  console.log("Post")
  res.json({ message: "Post from server!" });

});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})






// app.get('/name', (req, res) => {
//   let summonerName = "cptgetdrunk"
//   const nameURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`
//   console.log("name endpoint")
//   res.json({ message: "Hello from server!" });
//   fetch(nameURL, {
//   method: "GET",
//   headers:  {
//       "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
//       "Accept-Language": "en-US,en;q=0.9",
//       "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
//       "Origin": "https://developer.riotgames.com",
//       "X-Riot-Token": apiKey
//   }
// })
// .then(response => response.json()) 
// .then(json => console.log(json)); 
// // .catch(err => console.log(err));
// return

// })


// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }

// app.configure(function() {
//   app.use(allowCrossDomain);
//   //some other code
// });  

// res.set({'Access-Control-Allow-Origin': 'http://localhost:3000'})

// /lol/summoner/v4/summoners/by-name/{summonerName}
// https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName

// https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID