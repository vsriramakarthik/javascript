let a,b,c;
document.getElementById("submit").onclick=function(){
    a=document.getElementById("a").value;
    a=Number(a);
    b=document.getElementById("b").value;
    b=Number(b);

    c=Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
    document.getElementById("clabel").innerHTML="side C:"+c;
}