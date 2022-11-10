var text = "hello world";
var arr = text.split(" ");
var revarr = [];
var arrl = [];
var revstr = "";
arr.forEach(arre=>{
    arrl.push((arre.length)-1);
});
    arr.forEach(str=>{
        revstr = "";
        for(let i =str.length-1; i>=0;i--){
            revstr += str[i]
        }
        revarr.push(revstr);
    })
    var revsen = revarr.join(" ");
    console.log(revsen);
    