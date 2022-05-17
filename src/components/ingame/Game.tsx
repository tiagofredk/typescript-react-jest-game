import React from 'react'
import { Context } from '../../context/ContextProvider'
import Board from './Board'
import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function Game() {

  const { players, setPlayers } = React.useContext(Context)

  

  return (
    <div>
      <Board />
      

    </div>
  )
}
