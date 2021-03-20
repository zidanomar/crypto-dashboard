import React, {useState, useEffect} from 'react';
import axios from 'axios'

import './App.css';
import List from './Components/Table/List';
import { Container } from 'react-bootstrap';
import Input from './Components/Input/Input';

function App() {

  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState('')
  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(err => {console.error(err)});
  }, []);

  const inputHandler = e => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <div className="App">
      <Container>
        <h1 className="text-center text-uppercase dashboard-title">cryptocurrency dashboard</h1>
        
        <Input input={inputHandler} />
        
        <List
          coins={filteredCoins}
        />

      </Container>
    </div>
  );
}

export default App;
