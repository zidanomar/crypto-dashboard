import React, {useState, useEffect} from 'react';
import axios from 'axios'

import './App.css';
import List from './Components/Table/List';
import { Container } from 'react-bootstrap';
import Input from './Components/Input/Input';
import Card from './Components/Card/Card';

function App() {

  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=30&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    })
    .catch(err => {console.error(err)});
    resizeHandler();
  }, []);

  const inputHandler = e => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(input.toLowerCase())
  )

  const resizeHandler = ()=> {
    if(window.innerWidth <= 992) {
      setIsMobile(true)
    } else (
      setIsMobile(false)
    )
  }

  window.addEventListener('resize', resizeHandler)

  return (
    <div className="App">
      <Container>
        <h1 className="text-center text-uppercase dashboard-title">crypto currency dashboard</h1>      
        <Input input={inputHandler} />
        {
          isMobile ?
          <Card coins={filteredCoins} /> : 
          <List coins={filteredCoins} />
        }
      </Container>
      <footer>
        <p className="text-center">Made with ❤ by <a href="https://github.com/zidanomar">Zidan Omar</a></p>
      </footer>
    </div>
  );
}

export default App;
