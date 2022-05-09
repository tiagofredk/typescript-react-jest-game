export let players: [] = [];

// export function start() {
//     console.clear();
//     // console.log("------------ Let's play --------------");
//     // console.log("Type the number of players");
//     let players = Number(prompt(""));
//     // console.clear();
//     gameon(players)
// }
// start();

// export function rolldices(item: Object) {
//     let dice = Math.random() * (13 - 2) + 2;
//     const throwdice = Number(dice.toFixed(0));
//     // console.log(`${item.name}`)
//     // prompt(``)
//     // if (throwdice === 0) {
//     //     prompt("You roled the dices out of the table. TRY AGAIN!!!", rolldices(item))
//     // } else if (throwdice === 1) {
//     //     prompt("You roled the dices out of the table. TRY AGAIN!!!", rolldices(item))
//     // } else {
//         item.score = item.score + throwdice
//         console.clear()
//         return console.log(`${item.name} you scored ${throwdice} points`)
//     // }
// }

// function gameon(x) {

//     function decide() {

//         console.log("Play the dices to decide who play first.");
//         console.log(" ");

//         players.forEach(item => {
//             console.log(`Ready to play the dice ${item.name} ?`);
//             rolldices(item)
//         })

//         players.sort(function (a, b) {
//             return a.score - b.score;
//         }).reverse();

//         // console.log(players)
//         players.forEach(item => {
//             console.log(`${item.name}, score: ${item.score}`)
//         })

//         players.forEach(item => {
//             item.score = 0;
//         })
//         letsplay();
//     };

//     class Player {
//         constructor() {
//             this.name = prompt("Type your name: ")
//             this.score = 0
//         }
//     }

//     if (x) {

//         function createPlayers(x) {
//             for (let i = 1; i <= x; i++) {
//                 players.push(new Player)
//             }
//         }
//         createPlayers(x)

//         console.clear();

//         players.forEach(item => {
//             console.log(item.name);
//         })

//         decide();
//     }

//     function letsplay() {
//         winer = 0;
//         console.clear();
//         prompt("Take positions, when youre ready, hit enter,  GAMEON!!!")

//         for (let i = 99; i > winer; i) {
//             // console.log(`value of I ${i}`)
//             // console.log(`let winer `, winer)

//             players.forEach(item => {
                
//                 players.forEach(item => {
//                     console.log(`${item.name}, score: ${item.score}`)
//                 })
//                 console.log(`Ready to play the dice ${item.name} ?`);
//                 rolldices(item)
                
//                 if (winer < item.score){
//                     winer = item.score
//                 }else if(winer >= 99){
//                     console.log("******************    WINER    *****************")
//                 }
                
//                 switch (item.score) {
//                     case 6:
//                         item.score = 27
//                         break;
//                     case 14:
//                         item.score = 19
//                         break;
//                     case 19:
//                         item.score = 14
//                         break;
//                     case 21:
//                         item.score = 53
//                         break;
//                     case 27:
//                         item.score = 6
//                         break;
//                     case 31:
//                         item.score = 42
//                         break;
//                     case 33:
//                         item.score = 38
//                         break;
//                     case 38:
//                         item.score = 33
//                         break;
//                     case 42:
//                         item.score = 31
//                         break;
//                     case 46:
//                         item.score = 62
//                         break;
//                     case 51:
//                         item.score = 59
//                         break;
//                     case 53:
//                         item.score = 21
//                         break;
//                     case 57:
//                         item.score = 96
//                         break;
//                     case 59:
//                         item.score = 51
//                         break;
//                     case 62:
//                         item.score = 46
//                         break;
//                     case 65:
//                         item.score = 85
//                         break;
//                     case 68:
//                         item.score = 80
//                         break;
//                     case 70:
//                         item.score = 76
//                         break;
//                     case 76:
//                         item.score = 70
//                         break;
//                     case 80:
//                         item.score = 68
//                         break;
//                     case 85:
//                         item.score = 65
//                         break;
//                     case 92:
//                         item.score = 98
//                         break;
//                     case 96:
//                         item.score = 57
//                         break;
//                     case 98:
//                         item.score = 92
//                         break;
//                     case 99:
//                         console.log(`***********  winer  ***************`)
//                         break;
//                     default:
//                         //Statements executed when none of
//                         //the values match the value of the expression
//                         break;
//                 }
//             })
//         }
//         players.forEach(item => {
//             console.log(`${item.name}, score: ${item.score}`)
//         })
//     }
// }





