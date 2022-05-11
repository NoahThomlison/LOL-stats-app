const express = require("express")
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/name', (req, res) => {
  console.log("hello")
  res.json({ message: "Hello from server!" });
  res.send("hello")
})

app.get('/stats', (req, res) => {
  console.log("stats endpoint")
  res.json({ message: "Hello from server!" });
  res.send("hello")
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})