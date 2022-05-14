const express = require("express")
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const app = express();
app.use(cors())
const apiKey = "RGAPI-a7fe9997-46bf-4a26-a959-47af274b348d"
const matchURL = "https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID" 

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

