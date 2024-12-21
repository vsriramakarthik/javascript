const ans=Math.floor(Math.random() *10 +1);
let gusses=0;
 document.getElementById("button").onclick=function(){
    let guess=document.getElementById("guess").value;
    gusses+=1;
    if(guess==ans){
        alert("success");
    }
    else if(guess < ans){
        alert("too small");
    }
    else{
        alert("too big");
    }
 }