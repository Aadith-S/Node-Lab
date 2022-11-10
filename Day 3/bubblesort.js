const readline = require("readline-sync");
console.log("Input Elements:");
var arr = [];
for(let i = 0;i<10;i++){
    var ele = parseInt(readline.question(`Element ${i+1}:`));
    arr.push(ele);
}
let temp = 0;
for(let i = 0;i<10;i++){
    for(let j = 1;j<10-i;j++){
        if(arr[j-1]>arr[j]){
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}
console.log(arr);
