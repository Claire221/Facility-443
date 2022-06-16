let gameScreen = document.getElementsByClassName("container")[0];
let gameSection = document.getElementsByClassName("game-section")[0];
let startBtn = document.getElementsByClassName("btn")[0];
let titlePage = document.getElementsByClassName("title-page")[0]
let gameText = document.getElementById("game-paragraph");
let button1 = document.getElementsByClassName("btn-1")[0];
let button2 = document.getElementsByClassName("btn-2")[0];
let button3 = document.getElementsByClassName("btn-3")[0];
let health = document.getElementsByClassName("health-info")[0];
let injuries = [];
let time = 0;
let pockets = [];

let button1Click = false;
let button2Click = false

window.addEventListener("load", function(){newGame()});


function newGame() {
    gameScreen.style.backgroundImage="url(assets/img/background_01.jpg)";
    health.classList.add("hidden")
    
};

startBtn.addEventListener("click", function(){
    titlePage.style.display = "none";

    gameScreen.style.backgroundImage="url(assets/img/starting_room.jpg)";
    startGame()
});

function startGame(){
    injuries = [];
    time = 0;
    gameText.classList.add("game-text")
    gameText.innerText = "You wake up dazed and confused, you look around and see that your in a small dimly lit room. \
                        Looking at the ceiling there white tiles.. well you assume they use to be white but they are more grey now \
                        with some mould growing in the cracks, taking in a deep breath your nostrils fill with an antiseptic smell \
                        and your head begins to thud. After waiting a minute for your head to clear you sit up and get a clear view \
                        of the room your in. Your in one of two single size beds, the other is empty but the covers aren’t made, has \
                        someone been there recently? Looking around the room you see the walls and floor match the tiles of the ceiling \
                        giving the room a sterile feel. In the middle of the wall opposite you is a solid metal door. Turning to your left \
                        you see a counter with a sink and to the right a wardrobe is tucked away in the corner. You try to stand but you \
                        realise that your arms are tied to either side of the bed by thick leather straps, your can feel your heartbeat \
                        speed up in your chest and you start to find it hard to catch your breath and a feeling of dread has settled in your stomach, \
                        you notice there is a small metal trolly next to the bed on it there is a small pad of paper, a pen, a scaple and a pair of tweezers \
                        \n\nWhat do you do?"

    button1.classList.remove("hidden")
    button1.innerText = "Stay where you are, what if your here for a reason?";

    button2.classList.remove("hidden")
    button2.innerText = "This doesnt feel right, try and break out.";
        
    button1.addEventListener("click", stay, {once : true});
    button2.addEventListener("click", leave, {once : true});

    console.log("Start Game")
}
