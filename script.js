let x=document.querySelectorAll(".btn");
let display=document.querySelector("#display")

function calculate(){
    try{
    display.innerHTML=eval(display.innerHTML);
}
catch (error){
    display.innerHTML="ERROR";
}

}
function appendValue(value){
    display.innerHTML+=value;
}
function clearDisplay(){
    display.innerHTML="";
}