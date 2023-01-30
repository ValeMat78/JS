//first
let str="#";
let str1="";
let str2="";
let str3="";
for(let i=0; i<10; i++){
    for(let y=i;y>0;y--){
        str1+=str;
    }
    str1+="\n";
}
console.log(str1+="\n");


//second
for(let i=1;i<101;i++){
    str2="";
    if(i%3!=0 && i%5!=0){
        str2=i;
    }else{
        if(i%3==0){str2+="Fizz";}
        
        if(i%5==0){str2+="Buzz";}
        
    }
    console.log(str2);
}


//third
for(let i=1; i<=4;i++){
    for(let y=1; y<=8; y++){
        if(y%2==0){str3+=str;}
        else{str3+=" ";}
    }
    str3+="\n";
    for(let y=1; y<=8; y++){
        if(y%2!=0){str3+=str;}
        else{str3+=" ";}
    }
    str3+="\n";
}
console.log(str3);