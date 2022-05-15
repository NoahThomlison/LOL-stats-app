import logo from './logo.svg';
import './App.css';
import {Typography, Container, Box, ThemeProvider, Button, IconButton, Grid, Paper, TextField } from '@mui/material';
import react, {useState, useEffect} from 'react'

function App() {
  const [summoner, setSummoner] = useState()
  const [value, setValue] = useState('');
  const [matchData, setMatchData] = useState()
  const url = "http://localhost:3001/search"
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit =  (event) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({"value": value}),
      headers: {
        "Content-Type": "application/json"
      }};

    event.preventDefault();
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((res) => setMatchData(res));
  }

  return (
    <div className="App">
      <Container className="Container">
        <Container>
          <Paper sx={{padding: "10px"}}>
          <Typography>Who would you like to find stats for?</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextField value={value} onChange={onChange} placeholder='Who would you like to look up?'></TextField>
            </form>
          </Paper>
        </Container>

        <Box sx={{display: "flex", flexDirection: "column", height: "50vh", justifyContent: "space-evenly"}}>
        {matchData ? matchData.map((match) => {
        return(
          <Container>
            <Paper>
              <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
                <Typography>Match Outcome: {match.outcome}</Typography>
                <Typography>Match Length: {match.gameDuration}</Typography>
              </Box>
              <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
                <Typography>Champion Used Outcome: {match.championName}</Typography>
                <Typography>Champion Level: {match.championLevel}</Typography>
              </Box>
              <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
                <Typography>Kills: {match.kills}</Typography>
                <Typography>Deaths: {match.deaths}</Typography>
                <Typography>K/D: {match.kills}/{match.deaths}</Typography>
                <Typography>Assists: {match.assists}</Typography>
              </Box>
            </Paper>
          </Container>
        )})
         : ""}
      </Box>
      </Container>
    </div>
  );
}

export default App;