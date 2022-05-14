import logo from './logo.svg';
import './App.css';
import {Typography, Container, Box, ThemeProvider, Button, IconButton, Grid} from '@mui/material';
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
      .then((res) => console.log(res))
      .then((data) => setMatchData(data.message));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h6>Who would you like to find stats for?</h6>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input value={value} onChange={onChange} placeholder='Who would you like to look up?'></input>
          <button onClick={() => setSummoner(value)} variant="text">Go</button>
        </form>
      </header>
    </div>
  );
}

export default App;