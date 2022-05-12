const express = require("express")
const PORT = process.env.PORT || 3001;
const app = express();
const apiKey = ""
// /lol/summoner/v4/summoners/by-name/{summonerName}
// https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName


// https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID
const matchURL = "https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID" 

app.get('/', (req, res) => {
  res.json({ message: "Connected" });
})

app.get('/name', (req, res) => {
  let summonerName = "cptgetdrunk"
  const nameURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`
  console.log("name endpoint")
  res.json({ message: "Hello from server!" });
  fetch(nameURL, {
  method: "GET",
  headers:  {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "Origin": "https://developer.riotgames.com",
      "X-Riot-Token": apiKey
  }
})
.then(response => response.json()) 
.then(json => console.log(json)); 
// .catch(err => console.log(err));
return

})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})