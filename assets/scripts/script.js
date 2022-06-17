// Game scene variables
let gameScreen = document.getElementsByClassName("container")[0];
let gameSection = document.getElementsByClassName("game-section")[0];
let startBtn = document.getElementsByClassName("btn")[0];
let titlePage = document.getElementsByClassName("title-page")[0]
let gameText = document.getElementById("game-paragraph");
let button1 = document.getElementsByClassName("btn-1")[0];
let button2 = document.getElementsByClassName("btn-2")[0];
let button3 = document.getElementsByClassName("btn-3")[0];
let glitch = document.getElementsByClassName("box");

// Player variables
let health = document.getElementsByClassName("health-info")[0];
let time = 0;
let injuries = [];
let pockets = [];

// Audio variables
let heelsShortSound = new Audio("assets/sound/heels_short.mp4");
let heelsLongSound = new Audio("assets/sound/heels_short.mp4");
let doorCreek = new Audio("assets/sound/door_creek.mp4");
let doorUnlock = new Audio("assets/sound/door_unlock.mp4");

window.addEventListener("load", function(){newGame()});

let count = 10;
function newGame() {
    // gameScreen.style.backgroundImage="url(assets/img/background_01.jpg)";
    health.classList.add("hidden")
 
    // Link for glitch effect tutorial used https://www.youtube.com/watch?v=CtmHKGX754s
    for (let i = 0; i < count; i++){
    let glitchBox = document.createElement("div");
    glitchBox.className = "box";
    gameScreen.appendChild(glitchBox);
    }

    setInterval(function(){
    for (let i = 0; i < glitch.length; i++){
        glitch[i].style.left = Math.floor(Math.random() * 50) + "vw";
        glitch[i].style.top = Math.floor(Math.random() * 75) + "vh";
        glitch[i].style.width = Math.floor(Math.random() * 200) + "px";
        glitch[i].style.height = Math.floor(Math.random() * 50) + "px";
        glitch[i].style.backgroundPosition = Math.floor(Math.random() * 50) + "px";
    }
    }, 200)
};

startBtn.addEventListener("click", function(){
    for (let i = 0; i < glitch.length; i++){
        glitch[i].classList.add("hidden")
        console.log(glitch[i])
    }
    console.log(glitch)
    glitch = 0;
    titlePage.style.display = "none";

    gameScreen.style.backgroundImage="url(assets/img/starting_room.jpg)";
    startGame()
});

function startGame(){
    glitch = 0;
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


function stay() {
    // button1.removeEventListener("click", stay)

    gameText.innerText = "You decide to stay where you are, you lie back down starting up at the ceiling you take a few minutes to compose yourself. \
                          Through sheer stubbornness you manage to slow your heart rate back down and bring your breathing under control. You try and remember where you \
                          are and how you got here but every time you try you get a sharp intense pain in the side of your head, so you soon stop trying. After a couple \
                          of minutes, you hear a sound, you sit up and strain your ears to try and figure out where its coming from, you realize its footsteps and they \
                          sound like they are coming in this direction. You sit up, heart pounding and hears vibrating with the blood rushing to them.. \n\nWhat do you do?" 

    button1.innerText= "Wait and see who it is, You might get answers";
    button2.innerText= "Look for an escape, You dont feel good about this";

    button1.addEventListener("click", wait, {once : true});
    button2.addEventListener("click", leave, {once : true});

    console.log("Stay")

    setTimeout(function(){
        heelsShortSound.play()
        heelsShortSound.volume = 0.3
    }, 800)
    
};

function wait() {
    // button1.removeEventListener("click", stay);

    gameText.innerText = "You decide to wait and see who it is, hoping they will give you answers as to why you’re here. \
                          As you lay there you can hear the footsteps getting closer, your palms start to sweat.  Are you sure this was the best decision? \
                          \n\nWhat do you do?" 

    button1.innerText= "You've made up your mind to wait, you dont know if its any better outside anyway";
    button2.innerText= "Maybe it wasnt the best decision to stay, try and break free before they get here";

    button1.addEventListener("click", finalStay, {once : true});
    button2.addEventListener("click", tryToEscape, {once : true});

    setTimeout(function(){
        heelsLongSound.play()
        heelsLongSound.volume = 0.7;
    }, 800)

    console.log("Wait")
}

function finalStay() {
    // button1.removeEventListener("click", wait);

    gameText.innerText = "You made the decision to stay and that’s what you’ll do. You sit up and get ready to face whatever is coming through that door. \
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

    button1.classList.add("hidden")
    button2.classList.add("hidden")

    console.log("Final Stay")

    setTimeout(function(){
        doorCreek.play()
        doorCreek.volume = 0.2;
    }, 1000)

    setTimeout(function(){
        doorUnlock.play()
        doorUnlock.volume = 0.2;
    }, 1400)
}



function tryToEscape() {
    // let survival = 0.6;
    // if (survival > 0.5) {
    //     gameText.innerText = "Luck was on your side today and you manage to get away"; 
    //     button2.innerText = "RUN!" 
    //     button1.classList.add("hidden")
    //     button1.addEventListener("click", leave, {once : true});
    // } else {
    //     setInterval(function(){
    //         console.log("you get caught")
    //     },3000);
    // }
    // gameText.innerText = ""; 

    
}

function leave() {
    // button1.removeEventListener("click", stay);

    gameText.innerText = "As you sit there something in your gut is screaming at you to get out, not one to ignore your instincts, \
                          You frantically look around the room in search of anything that can help you. Your eyes land on the metal tray next to you and \
                          the scalpel that’s on there, it doesn’t look very sharp but it might just be sharp enough to cut through the leather. \
                          \n\nWhat do you do?"; 
    
    button1.innerText= "The restraints might just be lose enough for you to squeeze your hand through, It might hurt ";
    button2.innerText= "Use the scaple to cut through, it will take longer though.";

    button1.addEventListener("click", injuryRoll, {once : true});

    button2.addEventListener("click", cutStrap, {once : true});

    console.log("leave")
}

function injuryRoll(){
    // button1.removeEventListener("click", injuryRoll);

    let roll = Math.random() 
    health.classList.remove("hidden")

    if(roll < 0.5) {
        injuries.push("No injury")
        health.innerText=injuries
    } else {
        injuries.push("left Hand - Sprained wrist ")
        health.innerText=injuries
    }
    

    gameText.innerText = `You decide to free your left hand first, thinking that once you’ve done that you can undo the restrains on your right one. \
                          You twist, pull and bend your hand trying to get it through the strap. After some tugging you realise your slowly getting \
                          somewhere and it only takes you a few minutes to free your hand from the strap. Once free you quickly untie your other hand \
                          and are able to finally stand up from the bed. Taking a look at your left hand you inspect for an inury \n\n ${injuries}`;
                          
    button2.classList.add("hidden")
    button1.innerText= "Move on";

    button1.addEventListener("click", searchRoom, {once : true});

    console.log("Injury Roll")
}

function cutStrap() {
    // button1.removeEventListener("click", cutStrap);

    time = Math.floor(Math.random() * 10) + 2 ;
    
    gameText.innerText = `You decide to avoid potential injury and cut through the straps restraining your wrists. Using your right hand, \
                         you reach towards the tray your fingertips brush against the scalpel handle. You try and extend your arm as far \
                         as it can go, the leather straps biting into your wrists. Managing to gain an extra crucial few millimetre your \
                         fingertips just extend over the handle of the scalpel. A sweat has broken out over your brow you start to move \
                         your fingers and try and roll the scalpel closer towards you, the first time your fingers just slip of the handle. \
                         Letting out a huff you wipe your fingers on the bed to clean of any sweat or grime that might be there and try again. \
                         This time you are gentler and try and coax the handle closer, and slowly it starts to roll towards you. \
                         Finally, you have it in your hand, you flip it around and slot the blade along your wrist inside of the restraint. \
                         You slowly start moving the knife back and forth along the strap, you can hear the leather creaking as the blade runs \
                         along it and after a few minutes you start to see a grove appear. \n\n It took ${time} minutes's`; 
    button2.classList.add("hidden")
    button1.innerText= "Move on";
                     
    button1.addEventListener("click", searchRoom, {once : true});

    console.log("Cut Strap")
}



function searchRoom() {
    // button1.removeEventListener("click", searchRoom);

    gameScreen.style.backgroundImage="url(assets/img/room1_search.jpg)";

    gameText.innerText = "Standing up you finally get to look at the room from a vertical position and its just as grubby and grimy as it \
                          was from when you were lying down. You now need to decide if your going to search the room for anything useful \
                          or get out of there as fast as you can?"; 

    button1.classList.remove("hidden")
    button2.classList.remove("hidden")

    button1.innerText= "Search the room, you dont know what you might find";
    button2.innerText= "You've waisted long enough, lets get out of here";

    button1.addEventListener("click", lookForSupplies, {once : true});

    button2.addEventListener("click", leaveRoomOne, {once : true});

    console.log("Search Room")
};

function lookForSupplies() {
    // button1.removeEventListener("click", lookForSupplies);

    gameText.innerText = "You scan the room, its pretty empty and only contains the two beds, a wardrobe, a counter with cupboards \
                          underneath and the trolley next to your bed where you found the scalpel.\n\nWhere do you start first?"; 
    
    button1.classList.remove("hidden")
    button2.classList.remove("hidden")
    button3.classList.remove("hidden")

    button1.innerText= "Look inside the wardrobe for anything userful";
    button2.innerText= "The cupboards might have something in them, check there";
    button3.innerText= "Check the trolley by the bed";

    button1.addEventListener("click", checkWardrobe, {once : true});
    button2.addEventListener("click", checkCupboards, {once : true});
    button3.addEventListener("click", checkTrolley, {once : true});

    console.log("Look for supplies")
}


function checkWardrobe() {
    gameScreen.style.backgroundImage="url(assets/img/wardrobe.jpg)";

    gameText.innerText = "You reach out and slowly pull the wardrobe door open, the hinge gives out a low wine as you do so, the \
                          wardrobe consitst of a metal railing with a shelf underneath on the railing there are a few metal hangers \
                          and one white lab coat, you not how striking the white is against the grubbiness of the surrounding area. \
                          on the shelf below is an old cardboard box, the lid warbed from water damage and thers a small hole in the \
                          left corner from what you presume is mice"; 
    
    button3.innerText= "Inspect the items";
    button3.addEventListener("click", wardrobeItems, {once : true});

    button1.classList.add("hidden")
    button2.classList.add("hidden")
                          
}

function wardrobeItems() {
    gameText.innerText = "You find.. Click on item to add to inventory"; 
    gameScreen.style.backgroundImage="none";
    gameScreen.style.backgroundColor = "black";

    let itemsContainer = document.createElement("div");
    let shoeItem = document.createElement("img");
    let keyCardItem = document.createElement("img");
    let PaperItem = document.createElement("img");
    let inventoryDisplay = document.createElement("p")

    shoeItem.src="assets/img/shoe.jpg";
    keyCardItem.src="assets/img/keycard.jpg";
    PaperItem.src="assets/img/paper.jpg";
    
    shoeItem.alt="Shoe";
    keyCardItem.alt="Key Card";
    PaperItem.alt="Paper";

    itemsContainer.classList.add("items-container")
    shoeItem.classList.add("wardrobe-tems-img", "shoe")
    keyCardItem.classList.add("wardrobe-tems-img", "key-card")
    PaperItem.classList.add("wardrobe-tems-img", "paper")
    inventoryDisplay.classList.add("inventory-list")


    itemsContainer.appendChild(shoeItem)
    itemsContainer.appendChild(keyCardItem)
    itemsContainer.appendChild(PaperItem)
    gameScreen.appendChild(itemsContainer)
    gameScreen.appendChild(inventoryDisplay)

    inventoryDisplay.innerHTML = "Test";

    shoeItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory()
    });
    keyCardItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory()
    });
    PaperItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory()
    });

};

function addToInventory() {
    // Get elements that have inventory-add class
    let inventory = document.getElementsByClassName("inventory-add")
    let inventoryList = document.getElementsByClassName("inventory-list")[0];

    if (inventory.length > 0) {
        for(let i = 0; i < inventory.length; i++) {
            if (inventory[i].classList.contains("shoe")){
                pockets.push("Shoe")
                inventoryList.innerHTML = pockets
                console.log(pockets)
            } else if (inventory[i].classList.contains("key-card")) {
                pockets.push("Key Card")
                console.log(pockets)
                inventoryList.innerText = pockets
            } else if (inventory[i].classList.contains("paper")) {
                pockets.push("Paper")
                console.log(pockets)
                inventoryList.innerText = pockets
            }
        }
    } else if (inventory) {
        console.log("no inventory")
    }

    // add clicked item to inventory array
    
    // display message saying " item added to inventory"

    // remove item if its clicked again

    // display message saying " item removed to inventory"

};

function checkCupboards() {
    console.log("check Cupboards")
}

function checkTrolley() {
    console.log("check trolley")
}

function leaveRoomOne() {
    console.log("leave")
}
