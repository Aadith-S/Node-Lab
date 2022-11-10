var n = 20;
var zn = n.toString().length;
var z = 0;
for(let i = 1 ; i <n ; i++){
    for(let j = 0; j<n-i;j++){
        process.stdout.write(" ");
    }
    for(let k = 1;k<=i;k++){
        z = i.toString().length;
        for( let m = z%zn;m>=0;m--){
            process.stdout.write(" ");
        }
        process.stdout.write(""+i);
    }
    console.log();
}

