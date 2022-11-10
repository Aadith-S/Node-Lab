var a = 0;
var n = 20;
var b = 1;
var c = 1;
process.stdout.write(" "+a);
process.stdout.write(" "+b);
for(let i = 0;i<=n;i++){
    process.stdout.write(" "+c);
    a = b;
    b = c;
    c = a+b;
}