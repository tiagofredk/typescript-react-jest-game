import React from 'react'
import { Context } from '../../context/ContextProvider'
import Board from './Board'

const Swal = require('sweetalert2')
// import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function Game() {

  const { players, setPlayers } = React.useContext(Context)
  let playersCopy = [...players]
  let [Player, setPlayer] = React.useState(0)

  // function getPosition(place: number) {
  //   const element = document.getElementsByClassName(`place${place}`)[0];
  //   const rect = element.getBoundingClientRect();

  //   console.log(element);
  //   console.log(rect.y);
  //   console.log(rect.x);
  //   // return { x, y };
  // }

  // function game() {
  //   let dice = Math.random() * (13 - 2) + 2;
  //   const throwdice = Number(dice.toFixed(0));
  //   console.log(throwdice);
  //   getPosition(throwdice);
  // }

  function start() {
    console.log(playersCopy);
    gameon(playersCopy);
  }
  
  function rolldices(item: { playerName: any; score: number }) {
    console.log("Dices Rolled");
    let dice = Math.random() * (13 - 2) + 2;
    const throwdice = Number(dice.toFixed(0));
    
    setPlayer(Player + 1);
    console.log("Rolldices Player increment: " + Player);
    
    item.score = item.score + throwdice
    // Swal.fire(`${throwdice}`);
    Swal.fire({
      title: `You scored ${throwdice} ${item.playerName}`,
      text: "Next Player",
      icon: "info",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Next Player",
    }).then((result: any) => {
      // execute again the game
      // gameon(playersCopy);
      
    })
    
    return throwdice
  }

  function gameon(competitors: any) {
    console.log(competitors);
    // let winer = 0;
    // let player = 0;

    competitors.map((item: { playerName: any; score: number }, index: number) => {

      console.log(item);
      console.log("index: " + index);
      console.log("Player: " + Player);

      if (Player === index) {
        Swal.fire({
          title: `Ready to play the dice ${item.playerName} ?`,
          text: "Click the button to roll the dice",
          icon: "info",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Roll the dice!"
        }).then((result: any) => {
          rolldices(item);
          setPlayer(Player + 1);
          if (competitors.length - 1 === Player) {
            console.log("Ops competitors.lenght === Player");
            setPlayer(0);
          }
        })
      }
    })

    // while (winer < 1) {
    //   console.log("while");
    //   winer++

    //   // for (let i = 99; i > winer; i) {


    //   // eslint-disable-next-line no-loop-func
    //   competitors.forEach((item: { playerName: any; score: number }) => {
    //     console.log(item.playerName);
    //     // console.log(`Ready to play the dice ${item.playerName} ?`);
    //     // control the flux of the game wait for the player to click the button to roll the dice

    //     Swal.fire({
    //       title: `Ready to play the dice ${item.playerName} ?`,
    //       text: "Click the button to roll the dice",
    //       icon: "info",
    //       confirmButtonColor: "#3085d6",
    //       confirmButtonText: "Roll the dice!"
    //     }).then((result: any) => {
    //       rolldices(item);
    //     })

    //     if (item.score >= 100) {
    //       Swal.fire(`${item.playerName} is the winner`);
    //       // await Promise.all();
    //     }

    //     switch (item.score) {
    //       case 6:
    //         item.score = 27
    //         break;
    //       case 14:
    //         item.score = 19
    //         break;
    //       case 19:
    //         item.score = 14
    //         break;
    //       case 21:
    //         item.score = 53
    //         break;
    //       case 27:
    //         item.score = 6
    //         break;
    //       case 31:
    //         item.score = 42
    //         break;
    //       case 33:
    //         item.score = 38
    //         break;
    //       case 38:
    //         item.score = 33
    //         break;
    //       case 42:
    //         item.score = 31
    //         break;
    //       case 46:
    //         item.score = 62
    //         break;
    //       case 51:
    //         item.score = 59
    //         break;
    //       case 53:
    //         item.score = 21
    //         break;
    //       case 57:
    //         item.score = 96
    //         break;
    //       case 59:
    //         item.score = 51
    //         break;
    //       case 62:
    //         item.score = 46
    //         break;
    //       case 65:
    //         item.score = 85
    //         break;
    //       case 68:
    //         item.score = 80
    //         break;
    //       case 70:
    //         item.score = 76
    //         break;
    //       case 76:
    //         item.score = 70
    //         break;
    //       case 80:
    //         item.score = 68
    //         break;
    //       case 85:
    //         item.score = 65
    //         break;
    //       case 92:
    //         item.score = 98
    //         break;
    //       case 96:
    //         item.score = 57
    //         break;
    //       case 98:
    //         item.score = 92
    //         break;
    //       case 99:
    //         console.log(`***********  winer  ***************`)
    //         break;
    //       default:
    //         //Statements executed when none of
    //         //the values match the value of the expression
    //         break;
    //     }

    //   })
    //   console.log("check pooint");
    // }

  }

  let playersScore = playersCopy.forEach((item: { playerName: any; score: any }) => {
    console.log(`${item.playerName}, score: ${item.score}`)
    return (
      <div>
        <p>{item.playerName}</p>
        <p>{item.score}</p>
      </div>
    )
  })

  return (
    <div>
      <Board />
      <button onClick={() => start()}>Position</button>

      <p>Score</p>
      <>
        {playersScore}
      </>

    </div >
  )
}
