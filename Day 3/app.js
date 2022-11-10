const readline = require("readline");
var r1 = readline.createInterface(process.stdin,process.stdout);
r1.question("Enter String:",str=>{
    // let strr="";
    // for(let i = str.length-1;i>=0;i--){
    //     strr += str[i];
    // }
    let j = str.length-1
    for(let i = 0 ; i <= j;i++,j--){
        if(str[i]== str[j]){
            flag = 1;
        }
        else{
            flag = 0;
            break;
        }
    }
    if(flag){
        console.log("Is Palindrome");
    }
    else{
        console.log("Not Palidrome");
    }
});