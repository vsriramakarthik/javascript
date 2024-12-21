function sum(){
    let n=[];
    while(true){
        let val=prompt('A num please?',0);
        if(val==="" || val===null  || !isFinite(val)) break;

        n.push(+val);
    }

    let sum=0;
    for(let i in n){
        sum+=n;
    }
    return sum;
}
document.write(sum());