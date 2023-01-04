import React from 'react'
import { Context } from '../../context/ContextProvider';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SortPlayers() {

    const { players, setPlayers } = React.useContext(Context);

    // function to Sort players. First to play. Fisher-Yates algorithm
    const shuffleArray = (array: { playerName: string; score: number; positionX: number; positionY: number; }[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            setPlayers(array);
            // to force comoponent to re-render
            setPlayers([...players]);
        }
        console.log(players);
        playermap();
    }

    // const newPlayers = players.map((player, index) => {
    //     return (
    //         <div key={index}>
    //             <div className="card text-white bg-info mb-3" >
    //                 <div className="card-header">
    //                     <p>{player.playerName}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // })

    function playermap() {
        return (
            players.map((player, index) => {
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
        )
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <div>
                {playermap()}
            </div>
            <Button
                onClick={() => shuffleArray(players)}
                variant="primary"
                type="submit"
            >
                Sort
            </Button>
            <Link to="/Game">To the Game</Link>
        </div>
    )
}
