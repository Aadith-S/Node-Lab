
for(let i = 0;i<10;i++){
    if(i%2!=0){
    for(let j = 0;j<10-i;j++){
        process.stdout.write(" ");
    }
    for(let k = 0;k<i;k++){
        process.stdout.write("*");
    }
    console.log("");
    }
}