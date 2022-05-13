import logo from './logo.svg';
import './App.css';
import {Typography, Container, Box, ThemeProvider, Button, IconButton, Grid} from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button></Button>

        <form>
          <input placeholder='Who would you like to look up?'></input>
          <button variant="text">Text</button>
        </form>
      </header>
    </div>
  );
}

export default App;
