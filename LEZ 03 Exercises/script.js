/*
1) Write a function countBs that takes a string as its only argument and returns a
number that indicates how many uppercase “B” characters there are in the string.

Help:
You can get the Nth character, or letter, from a string by writing myString[N].

The first character has position 0, which causes the last one to be found at position
string.length - 1.
*/
function CountBs(str) {
    let c=0;
    for(let i=0; i<=str.length-1;i++){
        if(str[i]=="B"){
            c++;
        }
    }
    console.log("ci sono "+c+" B");
}


/*
2) Next, write a function called countChar that behaves like countBs, except it
takes a second argument that indicates the character symbol that is to be
counted.
*/
function CountChar(str) {
    console.log(str);
    let c=0;
    let str2="";
    do{
    str2=prompt("Che simbolo si vuole cercare?");
    }while(str2.length>1);
    for(let i=0; i<=str.length-1;i++){
        if(str[i]==str2){
            c++;
        }
    }
    console.log("ci sono "+c+" "+str2);
}