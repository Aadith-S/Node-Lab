// for(let i = 0;i<10;i++){
//     for(let j = 0;j<=i;j++){
//         process.stdout.write(String(j+1));
//         process.stdout.write(" ");
//     }
//     console.log();
// }
// console.log();
// for(let i = 0;i<5;i++){
//     process.stdout.write("*");
//     for(let j = 0;j<=i;j++){
//         if(i == 4){
//         process.stdout.write("*");}
//     }
//     console.log();
// }
// console.log();
// var n = 5;
// for(let i = 0;i<n;i++){
//     process.stdout.write("*");
//     if(i == 0 || i == (n-1)){
//     for(let j = 0;j<=n*3;j++){
//         process.stdout.write("*");}
//     }
//     else
//     {
//         for(let j = 0;j<=n*3;j++){
//             process.stdout.write(" ");}
//     }
//     process.stdout.write("*");
//     console.log();
// }

// const http = require("https");

// http.get("https://reqres.in/api/users", res =>{
//     var content = "";
//     res.on("data", data =>{
//         content+= data;
//     });
//     res.on("end", ()=>{
//         console.log(content);
//     });
// })
const readline = require("readline-sync");
var i = readline.question("Enter Page:");
const http = require("axios");
const fs = require("fs");
http.get(`https://reqres.in/api/users?page=${i}`)
.then(res=>{
    fs.writeFileSync(`file${i}.json`,JSON.stringify(res.data.data));
})