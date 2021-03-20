import React from 'react';
import {Table} from 'react-bootstrap';

import './List.css'

function List(props) {
  return (
    <Table responsive="md">
      <thead>
        <tr className="border-top-hidden">
          <th>Name</th>
          <th>Code</th>
          <th>Current Price</th>
          <th>24h Highest</th>
          <th>24h Lowest</th>
          <th>Last 24h</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
      {props.coins.map((coin, index) => {
        return(
          <tr key={index}>
            <td>
              <div className="table-content d-flex">
                <img src={coin.image} alt={coin.symbol} />
                <h4>{coin.name}</h4>
              </div>
            </td>
            <td>{coin.symbol}</td>
            <td>₺ {coin.current_price.toLocaleString('en-US')}</td>
            <td className="high">₺ {coin.high_24h.toLocaleString('en-US')}</td>
            <td className="down">₺ {coin.low_24h.toLocaleString('en-US')} </td>
            <td className={coin.market_cap_change_percentage_24h < 0 ? 'down' : 'high'}>% {coin.market_cap_change_percentage_24h.toFixed(2)}</td>
            <td>₺ {coin.market_cap.toLocaleString('en-US')}</td>
          </tr>
        )
      })}
      </tbody>
    </Table> 
  )
}

export default List
