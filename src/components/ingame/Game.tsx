import React from 'react'
import { Context } from '../../context/ContextProvider'
import Board from './Board'
import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function Game() {

  const { players, setPlayers } = React.useContext(Context)

  // function to Sort players first to play
  const sortPlayers = () => {
    const sortedPlayers = players.sort();
    console.log(sortedPlayers);
    return sortedPlayers
  }

  return (
    <div>
      <Board />
      <Button
        onClick={() => sortPlayers()}
        variant="primary"
        type="submit"
      >
        Add Player
      </Button>

    </div>
  )
}
