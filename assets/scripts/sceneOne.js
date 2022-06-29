/* jshint esversion: 11 */

let loadScreen = document.getElementById("container");
let startScreen = document.getElementById("title-page");
let startBtn = document.getElementById("start-btn");
let gameContainer = document.getElementById("game-section");
let gameParagraph = document.getElementById("game-paragraph");
let startTitle = document.getElementById("title");
let subTitle = document.getElementById("sub-title");
let mobileScreen = document.getElementById("small_screen")
let inventoryScreen;

// Audio file variables
let audioContainer = document.getElementById("volume-container");
let doorCreek = document.getElementById("door_creek");
let doorUnlock = document.getElementById("door_unlock");
let heels = document.getElementById("heels");
let heelsLong = document.getElementById("heels_long");
let heelsShort = document.getElementById("heels_short");
let audioMute = false;

let option1; 
let option2;

let glitch = document.getElementsByClassName("box");
let volumeUp = document.getElementsByClassName("volume-container")[0]

// Player variables
let health = document.getElementById("health-info");
let time = 0;
let injuries = [];
let pockets = [""];

// Function that runs on page load to check if screen is too small and if not set game page
// window.addEventListener("load", function(){
//     newGame()
//     checkScreenSize()
// });

window.onload= function(){
    newGame()
    checkScreenSize()
}


// Function to check if screen is too small to play
function checkScreenSize(){
    let width = window.innerWidth;

    if (width < 900) {
        mobileScreen.classList.remove("hidden")
        startScreen.classList.add("hidden")
        audioContainer.classList.add("hidden")
        gameParagraph.classList.add("hidden")
    }
}


// Function to remove old buttons
function removeBtn(){
    let oldbtn1 = document.getElementsByClassName("option1")[0];
    let oldbtn2 = document.getElementsByClassName("option2")[0];

    oldbtn1.remove()
    oldbtn2.remove()
}

// Function to create new buttons
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
        audioMute = audio.muted = false
    }

    soundToggle.addEventListener("click", function() {
        if (this.classList.contains("fa-volume-mute")) {
            this.classList.remove("fa-volume-mute");
            this.classList.add("fa-volume-up");
            audioMute = audio.muted = false
        } else {
            this.classList.add("fa-volume-mute");
            this.classList.remove("fa-volume-up");
            audioMute = audio.muted = true
        }
    });
}


let count = 10;

// Function to set the scene for a new game
function newGame() {
    loadScreen.style.backgroundImage="url(assets/img/background_01.jpg)";
    startScreen.classList.remove("hidden")
    soundToggle()
    // Link for glitch effect tutorial used https://www.youtube.com/watch?v=CtmHKGX754s
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
    }, 200)
};

// Fuction to start the game
startBtn.addEventListener("click", function(){
    for (let i = 0; i < glitch.length; i++){
        glitch[i].classList.add("hidden")
    }
    glitch = 0;
    startScreen.classList.add("hidden")
    loadScreen.style.backgroundImage="url(assets/img/starting_room.jpg)";
    audioContainer.classList.add("hidden")
    
    startGame()
});

// First game scene - gives the player a choice wether to try to escape or wait and see what happens
function startGame(){
    glitch = 0;
    injuries = [];
    time = 0;

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
    removeBtn()
    createNewBtn()

    option1.classList.add("hidden")
    option2.classList.add("hidden")
    

    gameParagraph.innerText = "You decide to stay where you are, you lie back down starting up at the ceiling you take a few minutes to compose yourself. \
                          Through sheer stubbornness you manage to slow your heart rate back down and bring your breathing under control. You try and remember where you \
                          are and how you got here but every time you try you get a sharp intense pain in the side of your head, so you soon stop trying. After a couple \
                          of minutes, you hear a sound, you sit up and strain your ears to try and figure out where its coming from, you realize its footsteps and they \
                          sound like they are coming in this direction. You sit up, heart pounding and ears are vibrating with the blood rushing to them.. \n\nWhat do you do?" 

    if (audioMute === false) {
        setTimeout(function(){
            heelsShort.play();
            heelsShort.volume = 0.3;
        },6000)
    }
    
    setTimeout(function(){
        option1.classList.remove("hidden")
        option2.classList.remove("hidden")

        
        option1.innerText= "Wait and see who it is, You might get answers";
        option2.innerText= "Look for an escape, You dont feel good about this";

        option1.addEventListener("click", finalStay);
        option2.addEventListener("click", leave);
    }, 13000)

};

//Final stay function - function runs when the player has decided to stay for the final time, ends the game
function finalStay() {
    console.log("final stay")
    removeBtn()
    createNewBtn()
    gameParagraph.innerText = "You sit up and get ready to face whatever is coming through that door.  The footsteps get louder until they stop outside your door, theres a jingling sound then a \
                                key is inserted into a lock. You cant take your eyes away from the door, theyre stinging, screaming at you to blink but you cant make yourself do it. With a click of \
                                a lock the door starts to open…" 
    
    const paragraphArray = [
        "In comes a Woman. Shes wearing a black skirt suit with a white lab coat over the top, her ginger hair is pulled up in a bun on top of her head, you scan your eyes downward\
         and see that she is wearing black high heels, and think to yourself that the sound of them hitting the tile floor will haunt your nightmares for years to come. Scanning back\
         to her face her lips part and she gives you an almost feral looking smile. ..She says something to you but you dont understand what shes saying, its in a language youve never heard \
         before. You frown at her but she doesnt seem to notice your confusion and continues to talk as she makes her way to the side of the bed. She comes to a stop so shes facing the bed. \
         Shes holding some sort of device against her chest, shes looking at \you expectantly so you assume she asked you a question.. ",

        "'I dont know what your saying' Your not even sure she can understand you since you cant understand her but she seems to know what your saying because she says something before tapping\
         on the device shes holding. 'There is that better' She say smiling down at you. You dont know what you expected but it definitely wasnt that 'What just happened? How come I can understand you?'\
        …Its the chip silly, they must have given you more juice than usual its really fried your brain.. well never mind nothing a good sleep wont cure  as shes talking she reaches down into her lab \
        coat pocket and pulls out a syringe containing a purple iridescent liquid.  You move back to the edge of your bed, your wrists screaming in protest as the leather digs in.\
        'Whats going on? Why am I here' You say as you frantically look around the room hoping to spot an escape route that you missed before, but you know its too late maybe you should have taken the chance\
         while you had it …",

        "The woman looked at you and sighed, 'Fine' She let out a small huff before lowering the syringe and siting on the edge of the bed. 'I dont know why Im explaining this since youll remember everything\
        again once youve had a little nap.. I guess I have time to kill and you seem to think im the bad guy so…' She said held up the syringe and waved wiggled it between her fingers… So the government from\
        my planet, this one your on sent out a spaceship to look for life on other planets. It was supposed to be a routine mission, one that they conduct a couple of times each year just to explore the galaxy.\
        Well on this one particular mission they ended up finding something new, your home planet. The astronauts landed and were instructed to try and make contact with your people, well that went about as \
        well as you can figure when none of us speak the same language. The story goes though that your people became hostile and started trying to attack our people so they were given orders to fight back. \
        Thats when they discovered that your people…",

        "'But while you look like us you have one very big difference, you guys are special you see..' She leaned in closer so her face was only a few inches from mine  'You guys have powers' she whisperers. \
        She straightens back up and you let out a sigh of relief as there is now some distance between you two. 'So they were given orders to take a few of you back home with them, the government couldnt just \
        leave a potential weapon like that behind right' She asks you and you can tell from her face that she expects you to agree with her, that she isnt being totally ridiculous right now by wanting you to side \
        with her on the fact that they took your people as prisoners to be used as some sort of weapon…",

        "'Your crazy, I dont know what game your trying to play.. but I want to get out of here right now' you reply as you pull on your wrist straps praying that they come lose. 'Sorry no can do, you need to stay \
        here until we unlock the key to whatever it is that grants you guys your powers so that we can replicate it and give it to our people… Right im bored' the woman stands up suddenly and brushes her lab coat \
        down. 'Storytimes over, and anyway youll remember it all once you wake up, Night night' She says as she brings the syringe toward you. You try to move out of the way but its useless and you feel the prick of \
        the needle in your arm. The room goes slightly fuzzy and then everything turns black.."

    ];

    option2.classList.add("hidden")
    option1.innerText = "Continue.."; 

    let textIndex = 0;

    option1.addEventListener("click", function(){
        gameParagraph.innerText = paragraphArray[textIndex];
        textIndex++;

        if(textIndex === paragraphArray.length) {
            console.log("last")
            setTimeout(function(){
                    removeBtn()
                    window.location.reload();
            }, 10000)
        }
    });

    
    // setTimeout(function(){
    //     window.location.reload();
    // }, 50000)

    // if (audioMute === false) {
    //     setTimeout(function(){
    //         doorCreek.play()
    //         doorCreek.volume = 0.4;
    //     }, 3000)
    //     setTimeout(function(){
    //         doorUnlock.play()
    //         doorUnlock.volume = 0.2;
    //     }, 3400)
    // }

};


//leave room function - allows the player to decide if want to cut the straps or try and break free
function leave() {
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
    removeBtn()
    createNewBtn()

    gameParagraph.innerText = "You scan the room, its pretty empty and only contains the two beds, a wardrobe, a counter with cupboards \
                               underneath and the trolley next to your bed where you found the scalpel.You know you dont have enough time \
                               to search both the wardrobe and cupboard so must choose one. \n\nWhich do you pick??"; 
    

    option1.innerText= "Look inside the wardrobe for anything userful";
    option2.innerText= "The cupboards might have something in them, check there";


    option1.addEventListener("click", checkWardrobe, {once : true});
    option2.addEventListener("click", checkCupboard, {once : true});
}

//Check wardrobe function - changes the scene to the wardrobe background
function checkWardrobe() {
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
    removeBtn()
    createNewBtn()

    gameParagraph.innerText = "Inside you find an old shoe, a scrunched up peice of paper which you pick up and flatten out then realize its blank and a Key Card"; 

    option1.innerText= "Leave Room";
    option1.addEventListener("click", leaveRoomOne)

    option2.classList.add("hidden")

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
    loadScreen.appendChild(itemsContainer)

    shoeItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory("Shoe")
        inventoryScreen.classList.add("hidden")
        showInventory()
    });
    keyCardItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory("Key Card")
        inventoryScreen.classList.add("hidden")
        showInventory()
    });
    PaperItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory("Paper")
        inventoryScreen.classList.add("hidden")
        showInventory()
    });

};

/* Basic inventory system - If a player clicks on an eligible item it will change colour and a message will display saying its been added to inventory. If they click it again it will go back to
its normal display and be removed from the inventory */ 
function addToInventory(item) {
    if (pockets.length > 0){
        if (pockets.includes(item)){
            pockets.pop(item)
            gameParagraph.innerText = `${item} removed to your pockets`
        } else {
            pockets.push(item)
            gameParagraph.innerText = `${item} added to your pockets, Press B to view inventory`
        }
    } 

};

// Adds event listener to B key to open and close inventory
window.addEventListener("keydown", function(event) {
    if (event.key == "b" && pockets.length > 0){
        inventoryScreen.classList.toggle("hidden")
    } else {
        console.log("no inventory")
    }
});
showInventory()

// function that creates the invnetory list
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
    }

    inventoryScreen.classList.add("hidden")
}

function clearScreen() {

}

function checkCupboard() {
    removeBtn()
    createNewBtn()

    loadScreen.style.backgroundImage="url(assets/img/kitchen.jpg)";

    gameParagraph.innerText = "You make your way over to side of the room where the counter and cupboards are, you quickly\
                               scan the top of the counter but appart from a bit of dust its empty. Moving onto the cupboards\
                               below you start opening them, the first few are empty. Fearing that anyone could walk in at any\
                               minute you pick up the pace and search with increased urgency, your just giving up hope when you\
                               open the last cupboard"; 
    
    option1.innerText= "Inspect the items";
    option1.addEventListener("click", checkCupboardItems, {once : true});

    // option1.classList.add("hidden")
    // option2.classList.add("hidden")
                          
}


function checkCupboardItems() {
    removeBtn()
    createNewBtn()

    gameParagraph.innerText = "Inside you find on old bent key, a padlock and a protien bar,  "; 

    option1.innerText= "Leave Room";
    option1.addEventListener("click", leaveRoomOne)

    option2.classList.add("hidden")

    let itemsContainer = document.createElement("div");
    let keyItem = document.createElement("img");
    let padlockItem = document.createElement("img");
    let protienBarItem = document.createElement("img");

    keyItem.src="assets/img/key.jpg";
    padlockItem.src="assets/img/padlock.jpg";
    protienBarItem.src="assets/img/protien_bar.jpg";
    
    keyItem.alt="Ket";
    padlockItem.alt="Padlock";
    protienBarItem.alt="Protien Bar";

    itemsContainer.classList.add("items-container")
    keyItem.classList.add("wardrobe-items-img", "key")
    padlockItem.classList.add("wardrobe-items-img", "padlock")
    protienBarItem.classList.add("wardrobe-items-img", "protien-bar")



    itemsContainer.appendChild(protienBarItem)
    itemsContainer.appendChild(keyItem)
    itemsContainer.appendChild(padlockItem)
    loadScreen.appendChild(itemsContainer)

    keyItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory("Key")
        inventoryScreen.classList.add("hidden")
        showInventory()
    });
    padlockItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory("Padlcok")
        inventoryScreen.classList.add("hidden")
        showInventory()
    });
    protienBarItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add")
        addToInventory("Protien Bar")
        inventoryScreen.classList.add("hidden")
        showInventory()
    });

}
