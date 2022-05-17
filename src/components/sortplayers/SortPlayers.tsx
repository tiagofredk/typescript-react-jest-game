import React from 'react'
import { Context } from '../../context/ContextProvider';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SortPlayers() {

    const { players, setPlayers } = React.useContext(Context);

    // function to Sort players first to play with The Fisher-Yates algorithm
    const shuffleArray = (array: { playerName: string; score: number; }[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            setPlayers(array);
        }   
        console.log(players);
    }

    const newPlayers = players.map((player, index) => {
        return (
            <div key={index}>
                <div className="card text-white bg-info mb-3" >
                    <div className="card-header">
                        <p>{player.playerName}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Link to="/">Home</Link>
            <div>
                {newPlayers}
            </div>
            <Button
                onClick={() => shuffleArray(players)}
                variant="primary"
                type="submit"
            >
                Sort
            </Button>
        </div>
    )
}
