//primo esercizio
function buttonRange(){
    let end;
    let start=parseInt(prompt("start"));
    do{
    end=parseInt(prompt("end"));
    }while(end<start);
    let array=range(start,end);
    let summ=sum(array);
    console.log(array);
    alert(array);
    console.log(summ);
    alert(summ);
}

function range(start,end){
    let array=[];
    for(let i=start;i<=end;i++){
        array.push(i);
    }
    return array;
}

function sum(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}


//secondo esercizio
function reverseArray(array){
    let array1=[];
    for(let i=array.length-1; i>=0 ; i--){
        array1.push(array[i]);
    }
    console.log(array1);
    alert(array1);
}

function reverseArrayInPlace(array){
    let f=0;
    let l=0;
    for(let i=array.length-1, y=0; y<=(array.length-1)/2 ; i--, y++){
        l=array[i];
        f=array[y];
        array[i]=f;
        array[y]=l;
    }
    console.log(array);
    alert(array);
}