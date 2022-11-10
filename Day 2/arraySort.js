// import readline from "readline";
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// readline.question("Enter Numbers:", num =>{
//     console.log(num)
// });

for(let i = 0;i<=10;i++){
rl.question("Enter the number: ", (ans)=>{
    let num = parseInt(ans)
    rl.close();
})}