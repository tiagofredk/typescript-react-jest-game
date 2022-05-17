import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import {Context} from '../../context/ContextProvider';

export default function Home() {
    const { players, setPlayers } = React.useContext(Context);
    // const [players, setPlayers] = React.useContext(Context);
    
    const [playerName, setPlayerName] = React.useState('');

    class Player {
        playerName: string
        score: number
        
        constructor(Name: string) {
            this.playerName = Name;
            this.score = 0;
        }
    }

    function createPlayers(event: any, Name: string): void {
        event.preventDefault();

        setPlayers([...players, new Player(Name)]);

        setPlayerName('');
    }

    function removePlayer(index: number): void {
        const newPlayers = [...players];
        newPlayers.splice(index, 1);
        setPlayers(newPlayers);
    }

    return (
        <div className='container'>
            <h1>Ladder Game</h1>
            <h1>Players</h1>
            {players.map((player, index) => {
                return (
                    <div className='container' key={index}>
                        <div className="card text-white bg-info mb-3" >
                            <div className="card-header">
                                Player
                                <VscChromeClose onClick={() => removePlayer(index)} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{player.playerName}</h5>
                                <p className="card-text">{player.score}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            )}

            <form action="">
                <label htmlFor="">New PLayer</label>
                <FloatingLabel controlId="floatingInput" label="name" className="mb-3" >
                    <Form.Control
                        type="name"
                        placeholder="Player Name"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                    />
                </FloatingLabel>
                <Button
                    onClick={(e) => createPlayers(e, playerName)}
                    variant="primary"
                    type="submit"
                >
                    Add Player
                </Button>
                
                <Link to='/Sort'>Game</Link>
                
            </form>
        </div>
    )
}
