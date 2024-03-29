import React from 'react'
import { Context } from '../../context/ContextProvider'
import Board from './Board'
import CSS from "csstype";
import Avatar from './Avatar';

const Swal = require('sweetalert2')
// import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function Game() {


  const { players, /* setPlayers */ } = React.useContext(Context);
  let playersCopy = [...players];
  let [Player, setPlayer] = React.useState(0); // Current player compared with array position of PlayersCopy.
  let [OnGame, setOnGame] = React.useState(false);
  // let [X, setX] = React.useState(0);
  // let [Y, setY] = React.useState(0);

  React.useEffect(() => {
    console.log("useEffect");
    console.log("Player");
    console.log(Player);
  }, [Player])

  /* function getPosition(place: number) {
    const element = document.getElementsByClassName(`place${place}`)[0];
    const rect = element.getBoundingClientRect();
    console.log("Element");
    console.log(element);
    console.log("y : " + rect.y);
    setY(rect.y);
    console.log("x : " + rect.x);
    setX(rect.x);
    // return { x, y };
  } */

  function start() {
    console.log(playersCopy);
    setOnGame(true); // change top left button start to Next Player
    gameon(); // start the game
  }

  function rolldices(item: { playerName: string; score: number; positionX: number; positionY: number; }) {
    console.log("Dices Rolled");
    console.log("Received Item: ", item);
    let dice = Math.random() * (13 - 2) + 2;
    const throwdice = Number(dice.toFixed(0));
    setPlayer(Player + 1); // increase number for current player
    // At the end of the round, Player variable should be reseted to start a new round.
    if (Player === playersCopy.length - 1) {
      setPlayer(0);
      console.log("setPlayer to 0 : " + Player);
    }
    // Update player score
    console.log("Rolldices Player increment: " + Player);
    item.score = item.score + throwdice
    // Path shortcut if the player stop in one of the shortcut numbers
    switch (item.score) {
      case 6:
        item.score = 27
        Swal.fire(`${item.playerName} Shortcut to 27`);
        break;
      case 14:
        item.score = 19
        Swal.fire(`${item.playerName} Shortcut to 19`);
        break;
      case 19:
        item.score = 14
        Swal.fire(`${item.playerName} Shortcut to 14`);
        break;
      case 21:
        item.score = 53
        Swal.fire(`${item.playerName} Shortcut to 53`);
        break;
      case 27:
        item.score = 6
        Swal.fire(`${item.playerName} Shortcut to 6`);
        break;
      case 31:
        item.score = 42
        Swal.fire(`${item.playerName} Shortcut to 42`);
        break;
      case 33:
        item.score = 38
        Swal.fire(`${item.playerName} Shortcut to 38`);
        break;
      case 38:
        item.score = 33
        Swal.fire(`${item.playerName} Shortcut to 33`);
        break;
      case 42:
        item.score = 31
        Swal.fire(`${item.playerName} Shortcut to 31`);
        break;
      case 46:
        item.score = 62
        Swal.fire(`${item.playerName} Shortcut to 62`);
        break;
      case 51:
        item.score = 59
        Swal.fire(`${item.playerName} Shortcut to 59`);
        break;
      case 53:
        item.score = 21
        Swal.fire(`${item.playerName} Shortcut to 21`);
        break;
      case 57:
        item.score = 96
        Swal.fire(`${item.playerName} Shortcut to 96`);
        break;
      case 59:
        item.score = 51
        Swal.fire(`${item.playerName} Shortcut to 51`);
        break;
      case 62:
        item.score = 46
        Swal.fire(`${item.playerName} Shortcut to 46`);
        break;
      case 65:
        item.score = 85
        Swal.fire(`${item.playerName} Shortcut to 85`);
        break;
      case 68:
        item.score = 80
        Swal.fire(`${item.playerName} Shortcut to 80`);
        break;
      case 70:
        item.score = 76
        Swal.fire(`${item.playerName} Shortcut to 76`);
        break;
      case 76:
        item.score = 70
        Swal.fire(`${item.playerName} Shortcut to 70`);
        break;
      case 80:
        item.score = 68
        Swal.fire(`${item.playerName} Shortcut to 68`);
        break;
      case 85:
        item.score = 65
        Swal.fire(`${item.playerName} Shortcut to 65`);
        break;
      case 92:
        item.score = 98
        Swal.fire(`${item.playerName} Shortcut to 98`);
        break;
      case 96:
        item.score = 57
        Swal.fire(`${item.playerName} Shortcut to 57`);
        break;
      case 98:
        item.score = 92
        Swal.fire(`${item.playerName} Shortcut to 92`);
        break;
      case 99:
        console.log(`***********  winer  ***************`)
        break;
      default:
        //Statements executed when none of
        //the values match the value of the expression
        Swal.fire(`You scored ${throwdice} ${item.playerName}`);
        break;
    }
    // getPosition(item.score);
    const element = document.getElementsByClassName(`place${item.score}`)[0];
    const rect = element.getBoundingClientRect();
    item.positionY = rect.y;
    item.positionX = rect.x;
    console.log(playersCopy);
    return throwdice
  }

  // gameon function 
  function gameon() {
    console.log("Player Gameon: " + Player);
    if (Player < playersCopy.length) {
      setPlayer(Player + 1);
      Swal.fire({
        title: `Ready to play the dice ${playersCopy[Player].playerName} ?`,
        text: "Click the button to roll the dice",
        icon: "info",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Roll the dice!"
      }).then((result: any) => rolldices(playersCopy[Player]));
    }
    console.log("Player: " + Player);

    // competitors.map((item: { playerName: any; score: number }, index: number) => {

    //   if (Player === index) {
    //     Swal.fire({
    //       title: `Ready to play the dice ${item.playerName} ?`,
    //       text: "Click the button to roll the dice",
    //       icon: "info",
    //       confirmButtonColor: "#3085d6",
    //       confirmButtonText: "Roll the dice!"
    //     }).then((result: any) => {
    //       rolldices(item);
    //       setPlayer(Player + 1);

    //       if (competitors.length - 1 === Player) {
    //         console.log("Ops competitors.lenght === Player");
    //         setPlayer(0);
    //       }
    //     })
    //   }
    // })

    // while (winer < 1) {
    //   console.log("while");
    //   winer++

    //   // for (let i = 99; i > winer; i) {


    //   // eslint-disable-next-line no-loop-func
    // playersCopy.forEach((item: { playerName: any; score: number }) => {
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

    // switch (item.score) {
    //   case 6:
    //     item.score = 27
    //     Swal.fire(`${item.playerName} Shortcut to 27`);
    //     break;
    //   case 14:
    //     item.score = 19
    //     Swal.fire(`${item.playerName} Shortcut to 19`);
    //     break;
    //   case 19:
    //     item.score = 14
    //     Swal.fire(`${item.playerName} Shortcut to 14`);
    //     break;
    //   case 21:
    //     item.score = 53
    //     Swal.fire(`${item.playerName} Shortcut to 53`);
    //     break;
    //   case 27:
    //     item.score = 6
    //     Swal.fire(`${item.playerName} Shortcut to 6`);
    //     break;
    //   case 31:
    //     item.score = 42
    //     Swal.fire(`${item.playerName} Shortcut to 42`);
    //     break;
    //   case 33:
    //     item.score = 38
    //     Swal.fire(`${item.playerName} Shortcut to 38`);
    //     break;
    //   case 38:
    //     item.score = 33
    //     Swal.fire(`${item.playerName} Shortcut to 33`);
    //     break;
    //   case 42:
    //     item.score = 31
    //     Swal.fire(`${item.playerName} Shortcut to 31`);
    //     break;
    //   case 46:
    //     item.score = 62
    //     Swal.fire(`${item.playerName} Shortcut to 62`);
    //     break;
    //   case 51:
    //     item.score = 59
    //     Swal.fire(`${item.playerName} Shortcut to 59`);
    //     break;
    //   case 53:
    //     item.score = 21
    //     Swal.fire(`${item.playerName} Shortcut to 21`);
    //     break;
    //   case 57:
    //     item.score = 96
    //     Swal.fire(`${item.playerName} Shortcut to 96`);
    //     break;
    //   case 59:
    //     item.score = 51
    //     Swal.fire(`${item.playerName} Shortcut to 51`);
    //     break;
    //   case 62:
    //     item.score = 46
    //     Swal.fire(`${item.playerName} Shortcut to 46`);
    //     break;
    //   case 65:
    //     item.score = 85
    //     Swal.fire(`${item.playerName} Shortcut to 85`);
    //     break;
    //   case 68:
    //     item.score = 80
    //     Swal.fire(`${item.playerName} Shortcut to 80`);
    //     break;
    //   case 70:
    //     item.score = 76
    //     Swal.fire(`${item.playerName} Shortcut to 76`);
    //     break;
    //   case 76:
    //     item.score = 70
    //     Swal.fire(`${item.playerName} Shortcut to 70`);
    //     break;
    //   case 80:
    //     item.score = 68
    //     Swal.fire(`${item.playerName} Shortcut to 68`);
    //     break;
    //   case 85:
    //     item.score = 65
    //     Swal.fire(`${item.playerName} Shortcut to 65`);
    //     break;
    //   case 92:
    //     item.score = 98
    //     Swal.fire(`${item.playerName} Shortcut to 98`);
    //     break;
    //   case 96:
    //     item.score = 57
    //     Swal.fire(`${item.playerName} Shortcut to 57`);
    //     break;
    //   case 98:
    //     item.score = 92
    //     Swal.fire(`${item.playerName} Shortcut to 92`);
    //     break;
    //   case 99:
    //     console.log(`***********  winer  ***************`)
    //     break;
    //   default:
    //     //Statements executed when none of
    //     //the values match the value of the expression
    //     break;
    // }

    // })
    //   console.log("check pooint");
    // }

  }

  /* let playersScore = playersCopy.forEach((item: { playerName: any; score: any }) => {
    console.log(`${item.playerName}, score: ${item.score}`)
    return (
      <div>
        <p>{item.playerName}</p>
        <p>{item.score}</p>
      </div>
    )
  }) */

  const myStyle: CSS.Properties = {
    position: "absolute",
    top: "0",
    left: "0",
  }

  return (
    <div>

      <Board />

      {OnGame ? <button style={myStyle} onClick={() => start()}> Next Player </button> //Top left button Start and Next Player
        :
        <button style={myStyle} onClick={() => start()}>Start</button>}

      {/* <div
        style={{
          position: "absolute",
          top: `${Y}px`,
          left: `${X}px`,
          width: "30px",
          height: "30px",
        }}
        className='avatar'>
        avatar
      </div> */}

      {playersCopy.map(item => {
        return (
          <Avatar {...{
            positionX: item.positionX,
            positionY: item.positionY,
            name: item.playerName
          }} />
        )
      })}

    </div>
  )
}
