document.getElementById("submit").onclick=function(){
    let temp;
    if(document.getElementById("cradio").checked){
        temp=document.getElementById("text").value;
       temp=Number(temp);
       temp=toCelsius(temp);
       document.getElementById("ans").innerHTML=temp+"c";
    }
    else  if(document.getElementById("fradio").checked){
        temp=document.getElementById("text").value;
        temp=Number(temp);
        temp= tofarenheit(temp);
        document.getElementById("ans").innerHTML=temp+"f";
    }
    else{
        document.getElementById("ans").innerHTML=" select button";
     }
}
function toCelsius(temp){
    return (temp-32)*(5/9);
}
function tofarenheit(temp){
    return temp* 9/5 + 32;
}