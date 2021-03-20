import React from 'react'
import {Row, Col} from 'react-bootstrap'

import './Card.css'

function Card(props) {
  return (
      <Row className="coins-card">
      {props.coins.map((coin, index) => {
          return(
            <Col
              key={index}
              xs={12}
              md={6}
              className="justify-content-center"
            >
              <div className="card-container">
                <div className="card-title d-flex justify-content-center">
                  <img src={coin.image} alt={coin.symbol} />
                  <p>{coin.name}</p>
                </div>

                <Row>
                  {/* <Col className="card-content">
                    <p className="text-uppercase">{coin.symbol}</p>
                    <small>code</small>
                  </Col> */}
                  <Col className="card-content">
                    <p>₺ {coin.current_price.toLocaleString('en-US')}</p>
                    <small>Current Price</small>
                  </Col>
                  <Col className="card-content">
                    <p className={coin.market_cap_change_percentage_24h < 0 ? 'down' : 'high'}>% {coin.market_cap_change_percentage_24h.toFixed(2)}</p>
                    <small>Last 24h</small>
                  </Col>
                </Row>

                <Row>
                  <Col className="card-content">
                    <p className="high">₺ {coin.high_24h.toLocaleString('en-US')}</p>
                    <small>Highest Price</small>
                  </Col>
                  <Col className="card-content">
                    <p className="down">₺ {coin.low_24h.toLocaleString('en-US')}</p>
                    <small>Lowest Price</small>
                  </Col>
                </Row>

                <Row>
                
                
                </Row>
                <div className="card-content d-flex flex-column justify-content-center text-center">
                  <p>₺{coin.market_cap.toLocaleString('en-US')}</p>
                  <small>Market Cap</small>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
  )
}

export default Card
