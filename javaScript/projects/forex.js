let r=window.prompt('Enter a rows:');
let c=window.prompt('ENter a column: ');
let sym=window.prompt('Enter symbol:');
for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
        document.getElementById("rec").innerHTML+=sym;

    }
    document.getElementById("rec").innerHTML+="<br>";

}