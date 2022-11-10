function greet(){
    var k=1;
    for(let i = 0;i<=10;i++){
        var p = "";
        if(i%2!=0){
        for(let j=0;j<k;j++){
             p += String(i);  
        }
        k++;
        console.log(p);
    }
    }
}
const _greet = greet;
export { _greet as greet};