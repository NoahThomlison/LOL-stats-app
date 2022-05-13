import logo from './logo.svg';
import './App.css';
import {Typography, Container, Box, ThemeProvider, Button, IconButton, Grid} from '@mui/material';
import react, {useState, useEffect} from 'react'

function App() {
  const [summoner, setSummoner] = useState()
  const [value, setValue] = useState('');
  const [matchData, setMatchData] = useState()

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const getData = async () => {
    let response = await fetch('http://example.com/movies.json')
    let data = await response.json()
    setMatchData(data)
  }

  useEffect(() => {
    getData(summoner)
  }, [summoner])

  // const setSummoner = () => {

  // }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input value={value} onChange={onChange} placeholder='Who would you like to look up?'></input>
          <button onClick={() => setSummoner(value)}variant="text">Text</button>
        </form>
      </header>
    </div>
  );
}

export default App;
