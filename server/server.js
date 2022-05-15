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
const matchURL = "https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID" 

const getPlayerPuuid = async (name, url) => {
  const response = await axios.get(url, {
    headers:  {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "Origin": "https://developer.riotgames.com",
      "X-Riot-Token": apiKey
  }
  })
  return response.data.puuid
}

app.get("/search", (req, res) => {
  console.log(req.body)
  console.log("Get")
  res.json({ message: "Hello from server!" });

});

app.post("/search", async (req, res) => {
  let summonerName = req.body.value
  const nameURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`
  let puuid = await getPlayerData(summonerName, nameURL)
  console.log(puuid)
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

// /lol/summoner/v4/summoners/by-name/{summonerName}
// https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName

// https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID