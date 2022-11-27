var number=0;
var num1=0;
var sign;
var num2;
var result;
var out;
function one(){
    number=(number*10)+1;
    num2=number;
    if(num1){
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
    }
    else{
        document.getElementById("inputtext").innerHTML=number;
    }
}
function two(){
    number=(number*10)+2;
    num2=number;
    if(num1){
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
    }
    else{
        document.getElementById("inputtext").innerHTML=number;
    }
}
function three(){
    number=(number*10)+3;
    num2=number;
    if(num1){
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
    }
    else{
document.getElementById("inputtext").innerHTML=number;
    }
}
function four(){
    number=(number*10)+4;
    num2=number;
    if(num1){
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
    }
    else{
document.getElementById("inputtext").innerHTML=number;
    }
}
function five(){
    number=(number*10)+5;
    num2=number;
    if(num1){
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
    }
    else{
document.getElementById("inputtext").innerHTML=number;
    }
}
function six(){
    number=(number*10)+6;
    num2=number;
    if(num1){
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
    }
    else{
document.getElementById("inputtext").innerHTML=number;
    }
}
function seven(){
    number=(number*10)+7;
    num2=number;
    if(num1){
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
    }
    else{
document.getElementById("inputtext").innerHTML=number;
    }
}
function eight(){
    number=(number*10)+8;
    num2=number;
    if(num1){
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
    }
    else{
document.getElementById("inputtext").innerHTML=number;
    }
}
function nine(){
    number=(number*10)+9;
    num2=number;
    if(num1){
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
    }
    else{
document.getElementById("inputtext").innerHTML=number;
    }
}
function zero(){
    number=(number*10)+0;
    num2=number;
    if(num1){
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
    }
    else{
document.getElementById("inputtext").innerHTML=number;
    }
}
function plus(){
    if(result){
        num1 = result;
        number=0;
        document.getElementById("inputtext").innerHTML=num1 +"+" +number;
        sign = "+";
    }
    else{
    num1 = number;
    number=0;
    document.getElementById("inputtext").innerHTML=num1 + "+" +number;
    sign = "+";
    }
}
function minus(){
    if(result){
        num1 = result;
        number=0;
        document.getElementById("inputtext").innerHTML=num1 +"-" +number;
        sign = "-";
    }
    else{
    num1 = number;
    number=0;
    document.getElementById("inputtext").innerHTML=num1 + "-" +number;
    sign = "-";
    }
}
function multiply(){
    if(result){
        num1 = result;
        number=0;
        document.getElementById("inputtext").innerHTML=num1 +"*" +number;
        sign = "*";
    }
    else{
    num1 = number;
    number=0;
    document.getElementById("inputtext").innerHTML=num1 + "*" +number;
    sign = "*";
    }
}
function divide(){
    if(result){
        num1 = result;
        number=0;
        document.getElementById("inputtext").innerHTML=num1 +"/" +number;
        sign = "/";
    }
    else{
    num1 = number;
    number=0;
    document.getElementById("inputtext").innerHTML=num1 + "/" +number;
    sign = "/";
    }
}
function equal(){
    if(result){
    if (sign == "+"){
        result = result+num2;
    }
    else if(sign=="-"){
        result=result-num2;
    }
    else if(sign == "*"){
        result = result*num2;
    }
    else if(sign=="/"){
        result = result/num2;
    }
}
else{
    if (sign == "+"){
        result = num1+num2;
    }
    else if(sign=="-"){
        result=num1-num2;
    }
    else if(sign == "*"){
        result = num1*num2;
    }
    else if(sign=="/"){
        result = num1/num2;
    }

}
    document.getElementById("inputtext").innerHTML=result; 
}
function clr(){
    document.getElementById("inputtext").innerHTML="";
    result=0;
    num1=0;
    num2=0;
    number=0;
}
function del(){   
    if(num1){
        if(num2===0){
            document.getElementById("inputtext").innerHTML=num1;
            sign="";
            number=num1;
            num1=0;
        }
        else{
            number=Math.floor(number/10);
        out=num1 + sign + number;
        document.getElementById("inputtext").innerHTML=out;
        num2=number;
        }
    }
    else{
        number=Math.floor(number/10);
        document.getElementById("inputtext").innerHTML=number;
    }
}