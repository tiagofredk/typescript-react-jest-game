import React from 'react'
import { Context } from '../../context/ContextProvider'
import Board from './Board'
// import { Button, FloatingLabel, Form } from 'react-bootstrap';

export default function Game() {

  const { players, setPlayers } = React.useContext(Context)

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
    gameon(players)
  }

  function rolldices() {
    let dice = Math.random() * (13 - 2) + 2;
    const throwdice = Number(dice.toFixed(0));


    console.clear()
    return throwdice
    // }
  }

  function gameon(competitors: any) {

    let winer = 0;

    for (let i = 99; i > winer; i) {
      // console.log(`value of I ${i}`)
      // console.log(`let winer `, winer)

      // eslint-disable-next-line no-loop-func
      competitors.forEach((item: { name: any; score: number }) => {

        // competitors.forEach((item: { name: any; score: any }) => {
        //   console.log(`${item.name}, score: ${item.score}`)
        // })
        console.log(`Ready to play the dice ${item.name} ?`);
        rolldices(item)

        if (winer < item.score) {
          winer = item.score
        } else if (winer >= 99) {
          console.log("******************    WINER    *****************")
        }

        switch (item.score) {
          case 6:
            item.score = 27
            break;
          case 14:
            item.score = 19
            break;
          case 19:
            item.score = 14
            break;
          case 21:
            item.score = 53
            break;
          case 27:
            item.score = 6
            break;
          case 31:
            item.score = 42
            break;
          case 33:
            item.score = 38
            break;
          case 38:
            item.score = 33
            break;
          case 42:
            item.score = 31
            break;
          case 46:
            item.score = 62
            break;
          case 51:
            item.score = 59
            break;
          case 53:
            item.score = 21
            break;
          case 57:
            item.score = 96
            break;
          case 59:
            item.score = 51
            break;
          case 62:
            item.score = 46
            break;
          case 65:
            item.score = 85
            break;
          case 68:
            item.score = 80
            break;
          case 70:
            item.score = 76
            break;
          case 76:
            item.score = 70
            break;
          case 80:
            item.score = 68
            break;
          case 85:
            item.score = 65
            break;
          case 92:
            item.score = 98
            break;
          case 96:
            item.score = 57
            break;
          case 98:
            item.score = 92
            break;
          case 99:
            console.log(`***********  winer  ***************`)
            break;
          default:
            //Statements executed when none of
            //the values match the value of the expression
            break;
        }
      })
    }
    competitors.forEach((item: { name: any; score: any }) => {
      console.log(`${item.name}, score: ${item.score}`)
    })

  }

  return (
    <div>
      <Board />
      <button onClick={() => start()}>Position</button>
    </div>
  )
}
