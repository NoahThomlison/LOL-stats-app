const express = require("express")
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const app = express();
const axios = require('axios').default;

//configing server
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiKey = ""

const getPlayerPuuid = async (name) => {
  const puuidURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`
  const response = await axios.get(puuidURL, {
    headers:  {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "Origin": "https://developer.riotgames.com",
      "X-Riot-Token": apiKey
  }
  })
  console.log(response.data.puuid)
  return response.data.puuid
}

const getPlayerMatches = async (puuid) => {
  const matchURL = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5`
  const response = await axios.get(matchURL, {
    headers:  {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "Origin": "https://developer.riotgames.com",
      "X-Riot-Token": apiKey
  }})
  console.log(response.data)
  return(response.data)
}

app.get("/search", (req, res) => {
  res.json({ message: "Hello from server!" });

});

app.post("/search", async (req, res) => {
  let summonerName = req.body.value
  let puuid 
  puuid = await getPlayerPuuid(summonerName)
  matches = await getPlayerMatches(puuid)
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})