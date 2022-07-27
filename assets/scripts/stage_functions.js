/* jshint esversion: 11 */
//  * @jest-environment jsdom

let loadScreen = document.getElementById("container");
let startScreen = document.getElementById("title-page");
let startBtn = document.getElementById("start-btn");
let gameContainer = document.getElementById("game-section");
let gameParagraph = document.getElementById("game-paragraph");
let startTitle = document.getElementById("title");
let subTitle = document.getElementById("sub-title");
let mobileScreen = document.getElementById("small_screen");
let inventoryScreen;
let labCoat = false;
let doorPass = false;
let exitDoorPass = false;
let countDown = Math.floor(Math.random() * 5000);

// Audio file variables
let audioContainer = document.getElementById("volume-container");
let backgroundMusic = document.getElementById("background");
let doorCreek = document.getElementById("door_creek");
let doorUnlock = document.getElementById("door_unlock");
let heels = document.getElementById("heels");
let heelsLong = document.getElementById("heels_long");
let heelsShort = document.getElementById("heels_short");
let bareFeetShort = document.getElementById("bare_feet_short");
let doorHandle = document.getElementById("door_handle");
let heartBeat = document.getElementById("heart_beat");
let alertAlarm = document.getElementById("alert");

let audioMute = false;

let option1; 
let option2;

let glitch = document.getElementsByClassName("box");
let volumeUp = document.getElementsByClassName("volume-container")[0];

// Player variables
let healthBar = document.getElementById("health-info");
let time = 0;
let injuries = [];
let pockets = [""];



// addEventListener('load', (event) => {
    // Function that runs on page load to check if screen is too small and if not set game page
    window.onload= function(){
        newGame();
    };

    // Function to check if screen is too small to play
    addEventListener('resize', checkScreenSize);
    function checkScreenSize(){
        let width = window.innerWidth;

        if (width < 900) {
            mobileScreen.classList.remove("hidden");
            startScreen.classList.add("hidden");
            audioContainer.classList.add("hidden");
            gameParagraph.classList.add("hidden");
        } 

        else {

        }
    }

    // Function to remove old buttons
    function removeBtn(){
        let oldbtn1 = document.getElementsByClassName("option1")[0];
        let oldbtn2 = document.getElementsByClassName("option2")[0];

        oldbtn1.remove();
        oldbtn2.remove();
    }

    // Function to create new buttons
    function createNewBtn(){
        option1 = document.createElement("button");
        option2 = document.createElement("button");

        gameContainer.appendChild(option1);

        option1.classList.add("option1", "game-btn", "btn-fade");
        option2.classList.add("option2", "game-btn");

        setTimeout(function(){
            option2.classList.add("btn-fade");
            gameContainer.appendChild(option2);
        },500);

        option1.innerText = "test";
        option2.innerText = "test";

    }

    // Function to allow the player to toggle the sound on and off
    function soundToggle(){
        let audio = document.querySelectorAll("audio")
        let soundToggle = document.getElementById("sound-toggle");

        audio.forEach(sound => {
            audioMute = sound.muted = false;
        });

        soundToggle.addEventListener("click", function() {
            if (this.classList.contains("fa-volume-mute")) {
                this.classList.remove("fa-volume-mute");
                this.classList.add("fa-volume-up");
                audioMute = audio.muted = false;
            } else {
                this.classList.add("fa-volume-mute");
                this.classList.remove("fa-volume-up");
                audioMute = audio.muted = true;
            }
        });
    }


    let count = 10;

    // Function to restart game when its game over
    function gameOver() {
        window.location.reload();
    }

    // Function to set the scene for a new game
    function newGame() {
        loadScreen.style.backgroundImage="url(assets/img/background_01.jpg)";
        startScreen.classList.remove("hidden");
        soundToggle();
        healthBar.classList.add("hidden");

        // Link for glitch effect tutorial used https://www.youtube.com/watch?v=CtmHKGX754s
        if (window.innerWidth > 900) {
            for (let i = 0; i < count; i++){
                let glitchBox = document.createElement("div");
                    glitchBox.className = "box";
                    loadScreen.appendChild(glitchBox);
                }
            
                setInterval(function(){
                for (let i = 0; i < glitch.length; i++){
                    glitch[i].style.left = Math.floor(Math.random() * 50) + "vw";
                    glitch[i].style.top = Math.floor(Math.random() * 75) + "vh";
                    glitch[i].style.width = Math.floor(Math.random() * 200) + "px";
                    glitch[i].style.height = Math.floor(Math.random() * 50) + "px";
                    glitch[i].style.backgroundPosition = Math.floor(Math.random() * 50) + "px";
                }
                }, 200);
        }
    }

    // Fuction to start the game
    startBtn.addEventListener("click", function(){
        for (let i = 0; i < glitch.length; i++){
            glitch[i].classList.add("hidden");
        }
        glitch = 0;
        startScreen.classList.add("hidden");
        loadScreen.style.backgroundImage="url(assets/img/starting_room.jpg)";
        audioContainer.classList.add("hidden");
        gameParagraph.classList.add("game-paragraph-background");

        if (audioMute === false) {
            backgroundMusic.play();
            backgroundMusic.volume = 0.1;
        }

        startGame();
    });



    let alertContainer;
    let alertParagraph;
    let closeAlertBtn;
    // Countdown Function to when guards know your missing
    function timer() {

        let setTimer =  setInterval(function() {
            countDown--;
            console.log(countDown)
            if (countDown === 0) {
                clearInterval(setTimer); 
                if (audioMute === false) {
                    alertAlarm.play();
                    alertAlarm.volume = 0.5;
                }

                createElements();

                alertParagraph.innerHTML = `Alert! Alert! All staff be aware we have a subject out of containment..  Alert! Alert! All staff be aware we have a subject out of containment.. 
                                            <br> <br>
                                            All staff are to report to level 2 and initiate protocol 45.
                                            <br> <br>
                                            All security are to report to level 3 and initiate protocol 07.
                                            <br> <br>
                                            (You need to be careful, the guards are away that your out of your room and have started a sweep of the building looking for you)
                                            `;
                closeAlertBtn.innerText = "Close";

                closeAlertBtn.addEventListener("click", function(){
                    alertAlarm.pause();
                    
                    alertContainer.removeChild(alertParagraph);
                    alertContainer.removeChild(closeAlertBtn);
                    loadScreen.removeChild(alertContainer);

                    gameParagraph.classList.remove("hidden");
                    option1.classList.remove("hidden");
                    option2.classList.remove("hidden");

                    guardSearch();
                });
            }
        },1000);


    }
    // Countdown Function to see if guards find you
    function guardSearch() {
        let guardTimer = Math.floor(Math.random() * 5000);

        let setGuardTimer =  setInterval(function() {
            guardTimer--;
            if (guardTimer === 0) {
                clearInterval(setGuardTimer);

                if (audioMute === false) {
                    alertAlarm.play();
                    alertAlarm.volume = 0.5;
                }
                        
                createElements();

                alertParagraph.innerHTML = `(The guards have caught up with you)
                                            <br>
                                            Your blood turns to ace in your veins as you hear a voice shout out from behind you
                                            <br>
                                            'Freeze! Put your hands in the air and slowly turn around!'
                                            <br>
                                            You stop what your doing and slowly spin on your heel only to be confronted with a wall of people in military gear. They are all aiming weapons at you and as you glance 
                                            down you see a number of red dots all over your body, You quickly raise your hands in the air palms facing out.
                                            <br>
                                            'Slowly get on your knees, dont do anything stupid'
                                            <br>
                                            One of them barks at you, you cant tell which as they all have face coverings on that only leave their eyes visible. You debate your options, with the amount of weapons on 
                                            you it would be stupid to run, You wouldnt get very far..Seeing no other option you sigh and slowly get onto your knees, you want to ask them whats going on or ask where 
                                            you are but your mouth has gone dry and it feels like your throat is slowly constricting.. You try to say something but it just comes out in a small squeak.
                                            <br>
                                            'Put your hands behind your head' One of them says while slowly walking towards you. You do as he asks and when he reaches you he grabs one of your wrists tightly and ties a 
                                            plastic cord around it, he then grabs your other wrist and does the same so that they are both secured behind your back. 
                                            <br>
                                            'We have successfully detained the subject and are returning them to their room' He says into his radio as he pulls you to your feet. The other security personnel have moved 
                                            to create a walkway between them where he starts to lead you. Someone must reply through the radio because he replies to them in confirmation. 
                                            <br>
                                            'Dont worry this wont hurt' He says to you, your about to ask what hes talking about when you feel a pinch in your neck. There is a cold sensation that runs down your throat 
                                            and then you suddenly find is very hard to stand, it feels like the whole building is spinning. You reach out trying to steady yourself but your hand only finds empty air...
                                            you start to fall. Just before your vision goes black you feel a jolt of someone holding onto your wrists which stops you from hitting the ground face first....
                                            `;

                closeAlertBtn.innerText = "Game Over";

                gameParagraph.classList.add("hidden");
                option1.classList.add("hidden");
                option2.classList.add("hidden");

                closeAlertBtn.addEventListener("click", function(){
                    gameOver() 
                });
            }
        },1000);


    }

    // Function to create alert div
    function createElements() {
        alertContainer = document.createElement("div");
        alertParagraph = document.createElement("p");
        closeAlertBtn = document.createElement("btn");

        alertContainer.setAttribute("id","game-section");
        alertParagraph.setAttribute("id","game-paragraph");
        alertParagraph.classList.add("game-paragraph-background");
        closeAlertBtn.classList.add("game-btn");

        alertContainer.appendChild(alertParagraph);
        alertContainer.appendChild(closeAlertBtn);
        loadScreen.appendChild(alertContainer);

        alertParagraph.innerHTML = `Test `;
        closeAlertBtn.innerText = "Test";

        gameParagraph.classList.add("hidden");
        option1.classList.add("hidden");
        option2.classList.add("hidden");

    }

    /* Basic inventory system - If a player clicks on an eligible item it will change colour and a message will display saying its been added to inventory. If they click it again it will go back to
    its normal display and be removed from the inventory */ 
    function addToInventory(item) {
        if (pockets.length > 0){
            if (pockets.includes(item)){
                pockets.pop(item);
                gameParagraph.innerHTML = `${item} removed to your inventory`;
            } else {
                pockets.push(item);
                gameParagraph.innerHTML = `${item} added to your inventory, Press I to view inventory`;
            }
        } 
    }

// });

// module.exports is required to export the objects and functions to the Jest testing file.
// The if statement prevents this from logging an error in the browser console.
// https://stackoverflow.com/a/68671391
if (typeof module !== "undefined") module.exports = {
    labCoat
};
