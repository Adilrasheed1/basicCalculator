let changes=document.querySelector('#btn');
let background=document.querySelector('#container');
let theme="dark";
function colorChange(){
    if(theme=="dark"){
        background.style.backgroundColor='white';
        theme="white";
    }
    else{
        background.style.backgroundColor='black';
        theme="dark";
    }
}