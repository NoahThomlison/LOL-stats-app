import logo from './logo.svg';
import './App.css';
import {Typography, Container, Box, ThemeProvider, Button, IconButton, Grid} from '@mui/material';
import react, {useState, useEffect} from 'react'

function App() {
  const [summoner, setSummoner] = useState()
  const [value, setValue] = useState('');
  const [matchData, setMatchData] = useState()
  const params = {
    method: 'GET',
    headers: {
        'accept': 'application/json'
    }
};
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // getData(summoner)
    fetch("http://localhost:3001")
    .then(res => res.text())
    // .then(res => this.setState({ apiResponse: res }));

    // fetch('http://localhost:3001/', params)
    // .then(response => response.json())
    // .then(data => console.log(data));
  }

  const getData = () => {
    fetch('http://localhost:3001/', params)
  .then(response => response.json())
  .then(data => console.log(data));
    // let response = await fetch('http://localhost:3001/')
    // let data = await response.json()
    // // let data = "test"
    // console.log(data)
    // // setMatchData(data)
  }

  // useEffect(() => {
  //   getData(summoner)
  // }, [summoner])

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
