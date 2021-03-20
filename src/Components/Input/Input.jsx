import React from 'react'
import {Form} from 'react-bootstrap'
import './Input.css'

function Input(props) {
  return (
    <div className="text-center">
      <input
        type="text"
        placeholder="Search a currency by name"
        className="currency-input text-center"
        onChange={props.input}
      />
    </div>
  )
}

export default Input
