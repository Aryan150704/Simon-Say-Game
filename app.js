let gameSequence=[];
let userSequence=[];
let max=0;
let start=false;
let level=0;
let h2=document.querySelector("h2");
let buttons =["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game Started");
        start=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function UserFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSequence=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=buttons[randomIndex];
    let randomButton=document.querySelector(`.${randomColor}`);
    gameSequence.push(randomColor);
    btnFlash(randomButton);
}

function butnPress(){
    console.log(this);
    let btn=this;
    UserFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSequence.push(userColor);
    checkAns(userSequence.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",butnPress);
}

function checkAns(indx){
    if(gameSequence[indx]===userSequence[indx]){
        if(userSequence.length==gameSequence.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        
        h2.innerHTML=`Game Over!! Your Score was <b>${level-1}</b> <br>Highest Score : <b>${max}</b><br>Press any Key to start `;
        max=Math.max(max,level);
        reset();
    }
    console.log(userSequence);
    console.log(gameSequence);
}
function reset(){
    start=false;
    gameSequence=[];
    userSequence=[];
    level=0;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },150);
}