/* jshint esversion: 11 */

let loadScreen = document.getElementById("container");
let startScreen = document.getElementById("title-page");
let startBtn = document.getElementById("start-btn");
let gameContainer = document.getElementById("game-section");
let gameParagraph = document.getElementById("game-paragraph");
let startTitle = document.getElementById("title");
let subTitle = document.getElementById("sub-title");
let inventoryScreen;

// Audio file variables
let doorCreek = document.getElementById("door_creek");
let doorUnlock = document.getElementById("door_unlock");
let heels = document.getElementById("heels");
let heelsLong = document.getElementById("heels_long");
let heelsShort = document.getElementById("heels_short");
let audioLevel = true;

let option1; 
let option2;

let glitch = document.getElementsByClassName("box");
let volumeUp = document.getElementsByClassName("volume-container")[0]

// Player variables
let health = document.getElementsByClassName("health-info")[0];
let time = 0;
let injuries = [];
let pockets = [""];


function removeBtn(){
    let oldbtn1 = document.getElementsByClassName("option1")[0];
    let oldbtn2 = document.getElementsByClassName("option2")[0];

    oldbtn1.remove()
    oldbtn2.remove()
}

function createNewBtn(){
    option1 = document.createElement("button");
    option2 = document.createElement("button");

    gameContainer.appendChild(option1)
    gameContainer.appendChild(option2)

    option1.classList.add("option1", "game-btn")
    option2.classList.add("option2", "game-btn")

    option1.innerText = "test"
    option2.innerText = "test"

}


// Function to allow the player to toggle the sound on and off
function soundToggle(){
    let audio = document.getElementsByTagName("audio")
    let soundToggle = document.getElementById("sound-toggle");

    for (sound in audio) {
        audioLevel = audio.muted = false
    }

    soundToggle.addEventListener("click", function() {
        if (this.classList.contains("fa-volume-mute")) {
            this.classList.remove("fa-volume-mute");
            this.classList.add("fa-volume-up");
            audioLevel = audio.muted = true
            console.log(audioLevel)
        } else {
            this.classList.add("fa-volume-mute");
            this.classList.remove("fa-volume-up");
            audioLevel = audio.muted = false
            console.log(audioLevel)
        }
    });
}

window.addEventListener("load", function(){newGame()});

let count = 10;

// Function to set the scene for a new game
function newGame() {
    console.log("New game")
    loadScreen.style.backgroundImage="url(assets/img/background_01.jpg)";
    health.classList.add("hidden")
    soundToggle()
    // Link for glitch effect tutorial used https://www.youtube.com/watch?v=CtmHKGX754s
    // for (let i = 0; i < count; i++){
    // let glitchBox = document.createElement("div");
    // glitchBox.className = "box";
    // loadScreen.appendChild(glitchBox);
    // }

    // setInterval(function(){
    // for (let i = 0; i < glitch.length; i++){
    //     glitch[i].style.left = Math.floor(Math.random() * 50) + "vw";
    //     glitch[i].style.top = Math.floor(Math.random() * 75) + "vh";
    //     glitch[i].style.width = Math.floor(Math.random() * 200) + "px";
    //     glitch[i].style.height = Math.floor(Math.random() * 50) + "px";
    //     glitch[i].style.backgroundPosition = Math.floor(Math.random() * 50) + "px";
    // }
    // }, 200)

    // volumeUp.addEventListener("click", soundToggle);
};

// Fuction to start the game
startBtn.addEventListener("click", function(){
    // for (let i = 0; i < glitch.length; i++){
    //     glitch[i].classList.add("hidden")
    // }
    // glitch = 0;
    startScreen.classList.add("hidden")
    loadScreen.style.backgroundImage="url(assets/img/starting_room.jpg)";
    startGame()
});

// First game scene - gives the player a choice wether to try to escape or wait and see what happens
function startGame(){
    glitch = 0;
    injuries = [];
    time = 0;

    console.log("The game has started")
    gameParagraph.innerText = "You wake up dazed and confused, you look around and see that your in a small dimly lit room. \
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

    createNewBtn();

    option1.innerText = "Stay where you are, what if your here for a reason?"
    option2.innerText = "This doesnt feel right, try and break out."

    option1.addEventListener("click", stay)
    option2.addEventListener("click", leave)
}

//stay function - after the player decides to wait this is the first chance they get to chaine their mind and still leave
function stay() {
    console.log("Stay")
    removeBtn()
    createNewBtn()

    option1.classList.add("hidden")
    option2.classList.add("hidden")
    

    gameParagraph.innerText = "You decide to stay where you are, you lie back down starting up at the ceiling you take a few minutes to compose yourself. \
                          Through sheer stubbornness you manage to slow your heart rate back down and bring your breathing under control. You try and remember where you \
                          are and how you got here but every time you try you get a sharp intense pain in the side of your head, so you soon stop trying. After a couple \
                          of minutes, you hear a sound, you sit up and strain your ears to try and figure out where its coming from, you realize its footsteps and they \
                          sound like they are coming in this direction. You sit up, heart pounding and hears vibrating with the blood rushing to them.. \n\nWhat do you do?" 

    // option1.innerText = "Wait and see who it is, You might get answers"
    // option2.innerText = "Look for an escape, You dont feel good about this"

    // option1.addEventListener("click", wait);
    // option2.addEventListener("click", leave);

    if (audioLevel === true) {
        setTimeout(function(){
            heelsShort.play();
            heelsShort.volume = 0.7;
        },6000)
    }
    
    setTimeout(function(){
        option1.classList.remove("hidden")
        option2.classList.remove("hidden")

        
        option1.innerText= "Wait and see who it is, You might get answers";
        option2.innerText= "Look for an escape, You dont feel good about this";

        option1.addEventListener("click", wait);
        option2.addEventListener("click", leave);
    }, 13000)

};

//Wait function - Gives the player one last chance to try and escape, if they stay it leads to the end screen and game over
function wait() {
    console.log("wait")
    removeBtn()
    createNewBtn()

    gameParagraph.innerText = "You decide to wait and see who it is, hoping they will give you answers as to why you’re here. \
                              As you lay there you can hear the footsteps getting closer, your palms start to sweat.  Are you sure this was the best decision? \
                             \n\nWhat do you do?" 
    
    option1.classList.add("hidden")
    option2.classList.add("hidden")


    if (audioLevel === true) {
        setTimeout(function(){
            heelsShort.play();
            heelsShort.volume = 0.8;
        },500)
    }

    setTimeout(function(){
        option1.innerText= "You've made up your mind to wait, you dont know if its any better outside anyway";
        option2.innerText= "Maybe it wasnt the best decision to stay, try and break free before they get here";
    
        option1.classList.remove("hidden")
        option2.classList.remove("hidden")

        option1.addEventListener("click", finalStay)
        option2.addEventListener("click", tryToEscape)

    }, 8000)
}


//Final stay function - function runs when the player has decided to stay for the final time, ends the game
function finalStay() {
    console.log("Final Stay")
    removeBtn()
    
    gameParagraph.innerText = "You made the decision to stay and that’s what you’ll do. You sit up and get ready to face whatever is coming through that door. \
                          The footsteps get louder until they stop outside your door, there’s a jingling sound then a key is inserted into a lock. \
                          You cant take your eyes away from the door, they’re stinging, screaming at you to blink but you cant make yourself do it. \
                          With a click of a lock the door starts to open and in comes a Woman. She’s wearing a black skirt suit, her ginger hair is \
                          pulled up in a bun on top of her head, you scan your eyes downward and see that she is wearing black high heels, and think \
                          to yourself that the sound of them will haunt your nightmares for years to come.\
                          Scanning back to her face her lips part and she gives you an almost feral looking smile. \
                          “Hello, we didn’t expect for you to be awake so soon” \
                          She says as she starts walking over to the bed side. Your head turns to track her movements and subconsciously you scoot to the \
                          edge of your bed, your wrists screaming in protest as the leather digs in. \
                          “Never mind we can soon fix that”\
                          She says with a short laugh that could almost be disguised as an exhale, she reaches into her suit pocket and pulls out a \
                          syringe containing a purple iridescent liquid.\
                          You finally find your voice, “Who are you? Why am I here?” you ask her, your eyes repeatedly darting from the syringe in her hand to her face. \
                          “Who am I? you mean to say that after spending all this time together you have forgotten who I am” her voice is sickly sweet she’s looking at \
                          you the way a mother might look at their child after they have stolen some sweets from the cupboard, like she’s holding back a smile. She starts \
                          tapping the syringe to get rid of any bubbles.\
                          “Don’t worry, we will have this all figured out in a Jiffy” she raises the syringe and presses the plunger to a small amount of liquid leaks \
                          out of the top of the needle and runs down the side..."; 

    // option1.classList.add("hidden")
    // option2.classList.add("hidden")

    setTimeout(function(){
        window.location.reload();
    }, 40000)

    setTimeout(function(){
        doorCreek.play()
        doorCreek.volume = 0.4;
    }, 1000)

    setTimeout(function(){
        doorUnlock.play()
        doorUnlock.volume = 0.2;
    }, 1400)
}


//Function that runs if the player chooses to escape
function tryToEscape() {
    removeBtn()
    createNewBtn()

    gameParagraph.innerText = " You have decided to try and escape.."
    let survival = Math.random();
    if (survival > 0.5) {
        gameParagraph.innerText = "Luck was on your side today and you manage to get away"; 
        option1.innerText = "RUN!" 
        option2.classList.add("hidden")
        option1.addEventListener("click", leave, {once : true});
    } else {
        gameParagraph.innerText = "You get caught..."; 
        removeBtn()
        setInterval(function(){
            window.location.reload();
        },3000);
    }


    
}

//leave room function - allows the player to decide if want to cut the straps or try and break free
function leave() {
    console.log("Leave")
    removeBtn()
    createNewBtn()

    gameParagraph.innerText = "As you sit there something in your gut is screaming at you to get out, not one to ignore your instincts, \
                          You frantically look around the room in search of anything that can help you. Your eyes land on the metal tray next to you and \
                          the scalpel that’s on there, it doesn’t look very sharp but it might just be sharp enough to cut through the leather. \
                          \n\nWhat do you do?"; 
    
    option1.innerText= "The restraints might just be lose enough for you to squeeze your hand through, It might hurt ";
    option2.innerText= "Use the scaple to cut through, it will take longer though.";

    option1.addEventListener("click", injuryRoll, {once : true});
    option2.addEventListener("click", cutStrap, {once : true});

}

//Function that runs to determine if the player gets an injury from trying to escape or not
function injuryRoll(){
    console.log("Injury Roll")
    removeBtn()
    createNewBtn()


    let roll = Math.random() 
    // health.classList.remove("hidden")

    if(roll < 0.5) {
        injuries.push("No injury")
        // health.innerText=injuries
    } else {
        injuries.push("left Hand - Sprained wrist ")
        // health.innerText=injuries
    }
    

    gameParagraph.innerText = `You decide to free your left hand first, thinking that once you’ve done that you can undo the restrains on your right one. \
                          You twist, pull and bend your hand trying to get it through the strap. After some tugging you realise your slowly getting \
                          somewhere and it only takes you a few minutes to free your hand from the strap. Once free you quickly untie your other hand \
                          and are able to finally stand up from the bed. Taking a look at your left hand you inspect for an inury \n\n ${injuries}`;
                          
    option1.classList.add("hidden")
    option2.innerText= "Move on";

    option2.addEventListener("click", searchRoom, {once : true});
}

//Function that runs if the player chooses to cut the strap, adds time to countdown
function cutStrap() {
    console.log("Cut strap")

    removeBtn()
    createNewBtn()

    time = Math.floor(Math.random() * 10) + 2 ;
    
    gameParagraph.innerText = `You decide to avoid potential injury and cut through the straps restraining your wrists. Using your right hand, \
                         you reach towards the tray your fingertips brush against the scalpel handle. You try and extend your arm as far \
                         as it can go, the leather straps biting into your wrists. Managing to gain an extra crucial few millimetre your \
                         fingertips just extend over the handle of the scalpel. A sweat has broken out over your brow you start to move \
                         your fingers and try and roll the scalpel closer towards you, the first time your fingers just slip of the handle. \
                         Letting out a huff you wipe your fingers on the bed to clean of any sweat or grime that might be there and try again. \
                         This time you are gentler and try and coax the handle closer, and slowly it starts to roll towards you. \
                         Finally, you have it in your hand, you flip it around and slot the blade along your wrist inside of the restraint. \
                         You slowly start moving the knife back and forth along the strap, you can hear the leather creaking as the blade runs \
                         along it and after a few minutes you start to see a grove appear. \n\n It took ${time} minutes's`; 
    option1.classList.add("hidden")
    option2.innerText= "Move on";
                     
    option2.addEventListener("click", searchRoom, {once : true});
}


//Search room function - alows the player to decide if they want to search the room theyre in or leave to move on
function searchRoom() {
    console.log("Search room")

    removeBtn()
    createNewBtn()

    // gameScreen.style.backgroundImage="url(assets/img/room1_search.jpg)";

    gameParagraph.innerText = "Standing up you finally get to look at the room from a vertical position and its just as grubby and grimy as it \
                          was from when you were lying down. You now need to decide if your going to search the room for anything useful \
                          or get out of there as fast as you can?"; 

    option1.classList.remove("hidden")
    option2.classList.remove("hidden")

    option1.innerText= "Search the room, you dont know what you might find";
    option2.innerText= "You've waisted long enough, lets get out of here";

    option1.addEventListener("click", lookForSupplies, {once : true});

    option2.addEventListener("click", leaveRoomOne, {once : true});

};

//Look for supplies function - Lets the player choose where they want to search for supplies
function lookForSupplies() {
    console.log("Look for supplies")

    removeBtn()
    createNewBtn()

    gameParagraph.innerText = "You scan the room, its pretty empty and only contains the two beds, a wardrobe, a counter with cupboards \
                          underneath and the trolley next to your bed where you found the scalpel.\n\nWhere do you start first?"; 
    
    // button1.classList.remove("hidden")
    // button2.classList.remove("hidden")
    // button3.classList.remove("hidden")

    option1.innerText= "Look inside the wardrobe for anything userful";
    option2.innerText= "The cupboards might have something in them, check there";
    // button3.innerText= "Check the trolley by the bed";

    option1.addEventListener("click", checkWardrobe, {once : true});
    option2.addEventListener("click", checkCupboards, {once : true});
    // button3.addEventListener("click", checkTrolley, {once : true});
}

//Check wardrobe function - changes the scene to the wardrobe background
function checkWardrobe() {
    console.log("Check wardrobe")
    removeBtn()
    createNewBtn()

    loadScreen.style.backgroundImage="url(assets/img/wardrobe.jpg)";

    gameParagraph.innerText = "You reach out and slowly pull the wardrobe door open, the hinge gives out a low wine as you do so, the \
                          wardrobe consitst of a metal railing with a shelf underneath on the railing there are a few metal hangers \
                          and one white lab coat, you not how striking the white is against the grubbiness of the surrounding area. \
                          on the shelf below is an old cardboard box, the lid warbed from water damage and thers a small hole in the \
                          left corner from what you presume is mice"; 
    
    option1.innerText= "Inspect the items";
    option1.addEventListener("click", wardrobeItems, {once : true});

    // option1.classList.add("hidden")
    // option2.classList.add("hidden")
                          
}

//Wardrobe items function - Adds 3 images to the screen, the player can click on them to run the "inventory-add" function
function wardrobeItems() {
    console.log("Wardrobe items")
    removeBtn()
    createNewBtn()

    gameParagraph.innerText = "You find.. Click on item to add to inventory"; 
    // gameContainer.style.backgroundImage="none";
    // gameContainer.style.backgroundColor = "black";

    let itemsContainer = document.createElement("div");
    let shoeItem = document.createElement("img");
    let keyCardItem = document.createElement("img");
    let PaperItem = document.createElement("img");

    shoeItem.src="assets/img/shoe.jpg";
    keyCardItem.src="assets/img/keycard.jpg";
    PaperItem.src="assets/img/paper.jpg";
    
    shoeItem.alt="Shoe";
    keyCardItem.alt="Key Card";
    PaperItem.alt="Paper";

    itemsContainer.classList.add("items-container")
    shoeItem.classList.add("wardrobe-items-img", "shoe")
    keyCardItem.classList.add("wardrobe-items-img", "key-card")
    PaperItem.classList.add("wardrobe-items-img", "paper")



    itemsContainer.appendChild(shoeItem)
    itemsContainer.appendChild(keyCardItem)
    itemsContainer.appendChild(PaperItem)
    gameContainer.appendChild(itemsContainer)

    shoeItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory("Shoe")
        showInventory()
    });
    keyCardItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory("Key Card")
        showInventory()
    });
    PaperItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory("Paper")
        showInventory()
    });

};
/* Basic inventory system - If a player clicks on an eligible item it will change colour and a message will display saying its been added to inventory. If they click it again it will go back to
its normal display and be removed from the inventory */ 
function addToInventory(item) {
    if (pockets.length > 0){
        if (pockets.includes(item)){
            pockets.pop(item)
            console.log(`${item} removed to your pockets, they now contain ${pockets}`)
            console.log(pockets)
        } else {
            pockets.push(item)
            console.log(`${item} added to your pockets, they now contain ${pockets}`)
            console.log(pockets)
        }
    } 

};

window.addEventListener("keydown", function(event) {
    if (event.key == "b" && pockets.length > 0){
        inventoryScreen.classList.toggle("hidden")
    } else {
        console.log("no inventory")
    }
});
showInventory()

function showInventory(){
    inventoryScreen = document.createElement("div");
    inventoryScreen.classList.add("inventory-screen")
    for (let i = 0; i < pockets.length; i++) {
        let inventoryList = document.createElement("ul");
        let inventoryItem = document.createElement("li")
        
        inventoryItem.innerText = pockets[i]

        inventoryList.classList.add("inventory-list")
        inventoryItem.classList.add("inventory-item")

        inventoryList.appendChild(inventoryItem)
        inventoryScreen.appendChild(inventoryList)
        loadScreen.appendChild(inventoryScreen)

        console.log(inventoryList)
    }
    inventoryScreen.classList.add("hidden")
}

function checkCupboards() {
    console.log("check Cupboards")
}

function checkTrolley() {
    console.log("check trolley")
}

function leaveRoomOne() {
    console.log("leave")
}