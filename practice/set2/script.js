let gamefield=document.querySelector('#gamecontainer');
let userchoice=document.querySelectorAll('.btns');
let msg=document.querySelector(".message");

function userChoice(userchoice){
const choices=['rock','paper','scissor'];
const computerChoice=choices[Math.floor(Math.random()*3)];

if(userchoice=== computerChoice){
    
   msg.innerHTML=`computer choice is ${computerChoice} <br>`;
   msg.innerHTML+=`\n match tied`
   msg.classList.remove("message");
}else if((userchoice==="rock" && computerChoice==="scissor") || ( userchoice==="scissor" && computerChoice==="paper") ||(userchoice==="paper" && computerChoice==="rock")){
    msg.innerHTML=`computer choice is ${computerChoice}<br>`;
    msg.innerHTML+=`user won`
        msg.classList.remove("message");
}
     

else if((userchoice==="scissor" && computerChoice==="rock" ) || (userchoice==="paper"&& computerChoice==="scissor"  ) || ( userchoice==="rock" && computerChoice==="paper")) {
    msg.innerHTML=`computer choice is ${computerChoice}<br>`;
    msg.innerHTML+=`\n computer won `;
    msg.classList.remove("message");
}
       

}