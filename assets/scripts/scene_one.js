/* jshint esversion: 11 */

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
let volumeUp = document.getElementsByClassName("volume-container")[0];

// Player variables
let healthBar = document.getElementById("health-info");
let time = 0;
let injuries = [];
let pockets = [""];

// Function that runs on page load to check if screen is too small and if not set game page
window.onload= function(){
    newGame();
};


// Function to check if screen is too small to play
addEventListener('resize', checkScreenSize)
function checkScreenSize(){
    let width = window.innerWidth;

    if (width < 900) {
        mobileScreen.classList.remove("hidden");
        startScreen.classList.add("hidden");
        audioContainer.classList.add("hidden");
        gameParagraph.classList.add("hidden");
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
    let audio = document.getElementsByTagName("audio");
    let soundToggle = document.getElementById("sound-toggle");

    for (sound in audio) {
        audioMute = audio.muted = false;
    }

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
    startGame();
});

// First game scene - gives the player a choice wether to try to escape or wait and see what happens
function startGame(){
    glitch = 0;
    injuries = [];
    time = 0;

    gameParagraph.innerHTML = `You wake up with a sudden start your heart racing, you were having a bad dream but the minute you opened your eyes you forget what the dream was about.. 
                                You think you were getting chased by something but you cant remember what or who it was. You go to sit up only for your head to start spinning so you quickly
                                like back down and look up at the white ceiling tiles.. well you assume they use to be white but they are now more of a grey colour with some mould growing in
                                the cracks, taking in a deep breath your nostrils fill with an antiseptic smell making them burn slightly. Once your headache has cleared you slowly sit up, you
                                go to move your hand to wipe your forehead and realize that you cant move them, Slightly scared now you look down and see that your wrists are tied down on the
                                bed by thick leather straps… <br>
                                You thought your heart was beating fast before but it suddenly gets a lot faster. You look around the room your in. Your sat on one of two single size beds, the other 
                                is empty but the covers arent made, as if someone has recently left. You take in the walls and floor and note that the tiles are the same kind that on the ceiling giving
                                the room a sterile feel. In the middle of the wall opposite you is a solid metal door… <br>
                                Turning to your left you see a counter top with a sink similar to what you would find in a kitchen and to the right a wardrobe is tucked away in the corner. You notice there 
                                is a small metal trolly next to the bed on it there is a small pad of paper, a pen, a scalpel and a pair of tweezers. As your taking in the room a sick feeling settles in your
                                stomach as you realize you have no idea where you are or how you got here. 
                                \n\n What do you do?`;

    createNewBtn();

    option1.innerText = "Stay where you are, what if your here for a reason?";
    option2.innerText = "This doesnt feel right, try and break out.";

    option1.addEventListener("click", stay);
    option2.addEventListener("click", leave);
}

//stay function - after the player decides to wait this is the first chance they get to chaine their mind and still leave
function stay() {
    removeBtn();
    createNewBtn();

    option1.classList.add("hidden");
    option2.classList.add("hidden");
    

    gameParagraph.innerhTML = `You decide to stay where you are, after all who knows if whats outside this room is any better than being here.  You sit there and take a few deep breaths to compose 
                                yourself and figure out what your next plan is. Through sheer stubbornness you manage to slow your heart rate back down and bring your breathing under control… <br>
                                You try and remember where you are and how you got here but every time you try you get a sharp intense pain in the side of your head, so you soon stop trying. After a 
                                couple of minutes, you hear a sound, your ears peak up and it feels like you just took an electric shock to the spine. Slowly you turn your head, so your ear is in the 
                                direction of the sound so you can try and figure out what the noise is…<br>
                                You realize its footsteps and they sound like they are coming in this direction…You freeze.. <br>
                                What do you do?`;
     

    if (audioMute === false) {
        setTimeout(function(){
            heelsShort.play();
            heelsShort.volume = 0.3;
        },6500);
    }
    
    setTimeout(function(){
        option1.classList.remove("hidden");
        option2.classList.remove("hidden");

        
        option1.innerText= "Wait and see who it is, You might get answers";
        option2.innerText= "Look for an escape, You dont feel good about this";

        option1.addEventListener("click", finalStay);
        option2.addEventListener("click", leave);
    }, 6500);

}

//Final stay function - function runs when the player has decided to stay for the final time, ends the game
function finalStay() {
    heelsShort.pause();
    console.log("final stay");
    removeBtn();
    createNewBtn();
    gameParagraph.innerhTML = `You sit up and get ready to face whatever is coming through that door.  The footsteps get louder until they stop outside your door, theres a jingling sound then a 
                                key is inserted into a lock. You cant take your eyes away from the door, theyre stinging, screaming at you to blink but you cant make yourself do it. With a click of
                                a lock the door starts to open…`;
    
    const paragraphArray = [
        `In comes a Woman. Shes wearing a black skirt suit with a white lab coat over the top, her ginger hair is pulled up in a bun on top of her head, you scan your eyes downward and see that she is 
        wearing black high heels, and think to yourself that the sound of them hitting the tile floor will haunt your nightmares for years to come. Scanning back to her face her lips part and she gives
        you an almost feral looking smile... <br>
        'Your awake, finally! Ive been waiting for hours' She says, she has some kind of accent but you dont recognise it. You stare blankly back at her, your not sure if your too scared to talk or your
        so frozen your physically unable to.. 
        'What cat got your tongue? Normally I cant get you to shut up, forever asking questions.... its quite annoying actually' she says the last sentence under her breath but you still catch it, as shes
        talking to you shes tapping away at some kind of electronic device thats in her hand... <br>
        'Ive never seen you before..  why am I here?' You ask her, maybe shes got the wrong person and thinks your someone else? This could all be a massive misunderstanding and once she realises that she
        will let you go and youll be home in time for dinner.. What time is it anyway? You quickly scan the room but there isnt a clock in sight.`,

        `She frowns at you, moving from the end of the bed to stand in front of the cupboards to the left of it. She glances behind her to check that there isnt anything on the side before leaning back
        against it.<br>
        'I assure you there is no mistake, you are exactly where your meant to be.. I dont think youve ever had memory loss before though.. let me make a note of that on your chart' Shes frowning slightly
        as she starts pressing more buttons on the device in her hand..<br>
        'Do you know what dosage they gave you?' as soon as she says the sentence she lets out a short bark of a laugh <br>
        'Never mind that' she says slashing her hand through the air as if she can physically erase the sentence 'If youve got amnesia im sure you dont remember' she says as she looks up through her eyebrows at you..<br>
        You stare blankly at her and she raises her eyebrows indicating she wants you to answer that question.
        'No.. I dont remember anything' you reply a lump forming in your throat.`,

        `'Well never mind hey! Im sure it will all come back after a good sleep.. probably' she says with a shrug. Giving the indication that she doesnt actually care either way if your memory does come back or not... <br>
        She then reaches down into her lab coat pocket and pulls out a needle and syringe containing a purple iridescent liquid. She starts walking over towards the bed and your heart rate picks up as your realise
        whats about to happen, You move back to the edge of your bed, your wrists screaming in protest as the leather digs in <br>
        'Wait! Wait!' You shout at her in panic,Your not sure whether its because you caught her of guard or shes just interested in what you have to say but she comes to a stop..<br>
        'What now?' she asks with a sigh. <br>
        'What am I doing here? who are you?' You say as you frantically look around the room hoping to spot an escape route that you missed before, but you know its too late maybe you should have taken the chance while
        you had it...`,

        `The woman looks down at you and for a moment you see something flash across her face, compassion? Empathy? Regret? Your not sure but its gone before you can figure it out...<br>
        'Fine' She says letting out another small huff, lowering the syringe she moves to sit on the edge of the bed. 'I dont know why Im explaining this since youll remember everything again once youve had a
        little nap..' she says as she reaches out and gives the top of your head two small pats.Maybe you should have let her put you to sleep, this lady seems like shes spent a bit too long.. where ever it is
        you are and not enough time outside with other people… <br>
        'I guess I have time to kill and you seem to think im the bad guy so…' As she talks she wiggles the needle and syringe between her fingers… 'Its a long story so ill give you the abbreviated version..
        So the government from my planet, this one your on.. right now.. They sent out a spaceship to look for life on other planets. It was supposed to be a routine mission, one that they conduct a couple of times
        each year you know? just to explore the galaxy… see whats out there all that fun stuff ...Well on this one particular mission they ended up finding something new.. your home planet. The astronauts landed 
        and were instructed to try and make contact with your people, well that went about as well as you can figure when none of us speak the same language'<br> You frown at her because obviously you do because your 
        talking right now, but your dont interrupt her.. your to desperate to hear the end of the story and you dont want her going off on a tangent...`,

        `'The story goes though that your people became hostile and started trying to attack our people so they were given orders to fight back. Thats when they discovered that your people are different, while you
        look like us you and seem to act like us we are not the same at all.. you guys are special you see..' She leaned in closer so her face was only a few inches from yours <br> 'You guys have powers' she
        whisperers… <br>
        She straightens back up and you let out a sigh of relief as there is now some distance between you two. 'So they were given orders to take a few of you back home with them, the government couldnt just leave
        a potential weapon like that behind right?' She asks you and you can tell from her face that she expects you to agree with her, that she isnt being totally ridiculous right now by wanting you to side with her
        on the fact that they took your people as prisoners to be used as some sort of weapon…<br> 'Your crazy, I dont know what game your trying to play.. but your lying, I can understand you and we are the same ..
        I want to get out of here right now' you reply as you pull on your wrist straps praying that they come lose.`, 

        `'Crazy!' she laughs 'Youre the one that can move things with your mind and im crazy! I dont care if you believe, youll see for yourself once you wake up' As she talks she starts to stand up dusting the
        invisible dirt of her lab coat as she does so. \n'And for the record you we can only understand eachother because of your implant' She says tapping the side of her head 'its translating our whole conversasion
        right now.. Weve had the technology for ages, we use a version to communicate between the different languages.. obviously we dont have the implanted version though' she says as if the thought of having one is
        completely ridiculous.. <br>
        'We just have to be close enough together and it translates everything for us, saves us having to study you know? Since weve got more important jobs to do' \nAs shes talking you lift one hand up to the side of
        your head, the side that you felt the pain when you tried to remember why you were here. Touching it is slightly tender and you can feel a rough scar running down the side of it, about 3 inches in length.<br>
        'More important jobs like unlocking the key to whatever it is that grants you guys your powers so that we can replicate it and give it to our people..' She says under her breath 'Right im bored' she 
        says suddenly 'Storytimes over, and anyway youll remember it all once you wake up, Night night' She says as she brings the syringe toward you. You try to move out of the way but its useless and you feel the
        prick of the needle in your arm. The room goes slightly fuzzy and then everything turns black..`

    ];

    option2.classList.add("hidden");
    option1.innerText = "Continue.."; 

    let textIndex = 0;

    option1.addEventListener("click", function(){
        gameParagraph.innerText = paragraphArray[textIndex];
        textIndex++;

        if(textIndex === paragraphArray.length) {
            console.log("last");
            option1.classList.add("hidden");
            option2.classList.remove("hidden");
            option2.innerText = "Restart Game"; 
            option2.addEventListener("click", function(){
                window.location.reload();
            });
        }
    });



    if (audioMute === false) {
        setTimeout(function(){
            doorCreek.play();
            doorCreek.volume = 0.4;
        }, 2000);
        setTimeout(function(){
            doorUnlock.play();
            doorUnlock.volume = 0.2;
        }, 2400);
    }

}


//leave room function - allows the player to decide if want to cut the straps or try and break free
function leave() {
    heelsShort.pause();
    removeBtn();
    createNewBtn();

    gameParagraph.innerHTML = `As you sit there something in your gut is screaming at you to get out, not one to ignore your instincts,
                          You frantically look around the room in search of anything that can help you. Your eyes land on the metal tray next to you and
                          the scalpel thats on there, it doesnt look very sharp but it might just be sharp enough to cut through the leather.
                          <br> What do you do?`; 
    
    option1.innerText= "The restraints might just be lose enough for you to squeeze your hand through, It might hurt ";
    option2.innerText= "Use the scaple to cut through, it will take longer though.";

    option1.addEventListener("click", injuryRoll, {once : true});
    option2.addEventListener("click", cutStrap, {once : true});

}

//Function that runs to determine if the player gets an injury from trying to escape or not
function injuryRoll(){
    removeBtn();
    createNewBtn();


    let roll = Math.random() ;

    if(roll < 0.5) {
        injuries.push("No injury");
        healthBar.innerText=injuries;
        healthBar.classList.remove("hidden");
        setTimeout(function(){
            healthBar.classList.add("hidden");
        }, 2000);
    } else {
        injuries.push("Left Hand - Sprained wrist ");
        healthBar.innerText=injuries;
        healthBar.classList.remove("hidden");
    }
    

    gameParagraph.innerText = `You decide to free your left hand first, thinking that once youve done that you can undo the restrains on your right one.
                          You twist, pull and bend your hand trying to get it through the strap. After some tugging you realise your slowly getting
                          somewhere and it only takes you a few minutes to free your hand from the strap. Once free you quickly untie your other hand
                          and are able to finally stand up from the bed. Taking a look at your left hand you inspect for an inury <br> ${injuries}`;
                          
    option1.classList.add("hidden");
    option2.innerText= "Move on";

    option2.addEventListener("click", searchRoom, {once : true});
}

//Function that runs if the player chooses to cut the strap, adds time to countdown
function cutStrap() {
    removeBtn();
    createNewBtn();

    time = Math.floor(Math.random() * 10) + 2 ;
    
    gameParagraph.innerText = `You decide to avoid potential injury and cut through the straps restraining your wrists. Using your right hand,
                         you reach towards the tray your fingertips brush against the scalpel handle. You try and extend your arm as far
                         as it can go, the leather straps biting into your wrists. Managing to gain an extra crucial few millimetre your
                         fingertips just extend over the handle of the scalpel. A sweat has broken out over your brow you start to move
                         your fingers and try and roll the scalpel closer towards you, the first time your fingers just slip of the handle.
                         Letting out a huff you wipe your fingers on the bed to clean of any sweat or grime that might be there and try again. 
                         This time you are gentler and try and coax the handle closer, and slowly it starts to roll towards you. 
                         Finally, you have it in your hand, you flip it around and slot the blade along your wrist inside of the restraint. 
                         You slowly start moving the knife back and forth along the strap, you can hear the leather creaking as the blade runs 
                         along it and after a few minutes you start to see a grove appear. <br> It took ${time} minutes's`; 

    option1.classList.add("hidden");
    option2.innerText= "Move on";
                     
    option2.addEventListener("click", searchRoom, {once : true});
}


//Search room function - alows the player to decide if they want to search the room theyre in or leave to move on
function searchRoom() {
    removeBtn();
    createNewBtn();

    // gameScreen.style.backgroundImage="url(assets/img/room1_search.jpg)";

    gameParagraph.innerHTML = `Standing up you finally get to look at the room from a vertical position and its just as grubby and grimy as it
                          was from when you were lying down. You now need to decide if your going to search the room for anything useful
                          or get out of there as fast as you can?`; 

    option1.classList.remove("hidden");
    option2.classList.remove("hidden");

    option1.innerText= "Search the room, you dont know what you might find";
    option2.innerText= "You've waisted long enough, lets get out of here";

    option1.addEventListener("click", lookForSupplies, {once : true});

    option2.addEventListener("click", leaveRoomOne, {once : true});

}

//Look for supplies function - Lets the player choose where they want to search for supplies
function lookForSupplies() {
    removeBtn();
    createNewBtn();

    gameParagraph.innerText = `You scan the room, its pretty empty and only contains the two beds, a wardrobe, a counter with cupboards
                               underneath and the trolley next to your bed where you found the scalpel.You know you dont have enough time
                               to search both the wardrobe and cupboard so must choose one. <br> Which do you pick??`; 
    

    option1.innerText= "Look inside the wardrobe for anything userful";
    option2.innerText= "The cupboards might have something in them, check there";


    option1.addEventListener("click", checkWardrobe, {once : true});
    option2.addEventListener("click", checkCupboard, {once : true});
}

function checkWardrobe() {
    loadScreen.style.backgroundImage="url(assets/img/wardrobe_open.jpg)";

    gameParagraph.innerHTML = `You walk over to the wardrobe, its rusted from the years spent in this damp room..
                            there is a faint metalic scent radiating from it..You reach out and slowly pull the wardrobe door open,
                            the hinge gives out a low wine as you do so, the
                            wardrobe consitst of a metal railing with a shelf underneath on the railing there are a few metal hangers
                            and one white lab coat, you not how striking the white is against the grubbiness of the surrounding area.
                            on the shelf below is an old cardboard box, the lid warbed from water damage and thers a small hole in the
                            left corner from what you presume is mice`; 
    
    option1.innerText= "Inspect the items";
    option1.addEventListener("click", wardrobeItems, {once : true});
    option2.classList.add("hidden");

}

//Wardrobe items function - Adds 3 images to the screen, the player can click on them to run the "inventory-add" function
function wardrobeItems() {
    removeBtn();
    createNewBtn();

    gameParagraph.innerHTML = `Inside you find an old shoe, and a Key Card, handing up one the back of one of the doors is an old labcoat. `; 

    option1.innerText= "Leave Room";
    option1.addEventListener("click", leaveRoomOne);


    let itemsContainer = document.createElement("div");
    let shoeItem = document.createElement("img");
    let keyCardItem = document.createElement("img");
    let labCoatItem = document.createElement("img");

    shoeItem.src="assets/img/shoe.jpg";
    keyCardItem.src="assets/img/keycard.jpg";
    labCoatItem.src = "assets/img/labcoat.jpg";
    
    shoeItem.alt="Shoe";
    keyCardItem.alt="Key Card";
    labCoatItem.alt="Lab Coar";

    itemsContainer.classList.add("items-container");
    shoeItem.classList.add("wardrobe-items-img", "shoe");
    keyCardItem.classList.add("wardrobe-items-img", "key-card");
    labCoatItem.classList.add("wardrobe-items-img", "labcoat");



    itemsContainer.appendChild(shoeItem);
    itemsContainer.appendChild(keyCardItem);
    itemsContainer.appendChild(labCoatItem);
    loadScreen.appendChild(itemsContainer);

    shoeItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add");
        addToInventory("Shoe");
        inventoryScreen.classList.add("hidden");
        showInventory();
    });
    keyCardItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add");
        addToInventory("Key Card");
        inventoryScreen.classList.add("hidden");
        showInventory();
        doorPass = true;
    });
    labCoatItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add");
        addToInventory("Lab Coat");
        inventoryScreen.classList.add("hidden");
        labCoat = true;
        showInventory();
    });

    option2.classList.add("hidden");
}
/* Basic inventory system - If a player clicks on an eligible item it will change colour and a message will display saying its been added to inventory. If they click it again it will go back to
its normal display and be removed from the inventory */ 
function addToInventory(item) {
    if (pockets.length > 0){
        if (pockets.includes(item)){
            pockets.pop(item);
            gameParagraph.innerText = `${item} removed to your inventory`;
        } else {
            pockets.push(item);
            gameParagraph.innerText = `${item} added to your inventory, Press B to view inventory`;
        }
    } 

}

// Adds event listener to B key to open and close inventory
window.addEventListener("keydown", function(event) {
    if (event.key == "i" && pockets.length > 0){
        inventoryScreen.classList.toggle("hidden");
    } else {
        console.log("no inventory");
    }
});
showInventory();

// function that creates the invnetory list
function showInventory(){
    inventoryScreen = document.createElement("div");
    inventoryScreen.classList.add("inventory-screen");
    for (let i = 0; i < pockets.length; i++) {
        let inventoryList = document.createElement("ul");
        let inventoryItem = document.createElement("li");
        
        inventoryItem.innerText = pockets[i];

        inventoryList.classList.add("inventory-list");
        inventoryItem.classList.add("inventory-item");

        inventoryList.appendChild(inventoryItem);
        inventoryScreen.appendChild(inventoryList);
        loadScreen.appendChild(inventoryScreen);
    }

    inventoryScreen.classList.add("hidden");
}

function clearScreen() {

}

function checkCupboard() {
    removeBtn();
    createNewBtn();

    loadScreen.style.backgroundImage="url(assets/img/kitchen.jpg)";

    gameParagraph.innerHTML = `ou make your way over to side of the room where the counter and cupboards are, you quickly
                               scan the top of the counter but appart from a bit of dust its empty. Moving onto the cupboards
                               below you start opening them, the first few are empty. Fearing that anyone could walk in at any
                               minute you pick up the pace and search with increased urgency, your just giving up hope when you
                               open the last cupboard`; 
    
    option1.innerText= "Inspect the items";
    option1.addEventListener("click", checkCupboardItems, {once : true});

    option2.classList.add("hidden");
                          
}


function checkCupboardItems() {
    removeBtn();
    createNewBtn();

    gameParagraph.innerHTML = `Inside you find on old bent key and a protien bar.. their is also what looks to be a pile of cloths folded on one of the shelves
                                pulling them out to take a closer look you see that its infact an old labcoat.`; 

    option1.innerText= "Leave Room";
    option1.addEventListener("click", leaveRoomOne);

    option2.classList.add("hidden");

    let itemsContainer = document.createElement("div");
    let keyItem = document.createElement("img");
    let labCoatItem = document.createElement("img");
    let protienBarItem = document.createElement("img");

    keyItem.src="assets/img/key.jpg";
    labCoatItem.src="assets/img/labcoat.jpg";
    protienBarItem.src="assets/img/protien_bar.jpg";
    
    keyItem.alt="Ket";
    labCoatItem.alt="Lab Coat";
    protienBarItem.alt="Protien Bar";

    itemsContainer.classList.add("items-container");
    keyItem.classList.add("cupboard-items-img", "key");
    labCoatItem.classList.add("cupboard-items-img", "lab-coat");
    protienBarItem.classList.add("cupboard-items-img", "protien-bar");



    itemsContainer.appendChild(protienBarItem);
    itemsContainer.appendChild(keyItem);
    itemsContainer.appendChild(labCoatItem);
    loadScreen.appendChild(itemsContainer);

    keyItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add");
        addToInventory("Key");
        inventoryScreen.classList.add("hidden");
        showInventory();
    });
    labCoatItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add");
        addToInventory("Lab Coat");
        inventoryScreen.classList.add("hidden");
        showInventory();
        labCoat = true;
    });
    protienBarItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add");
        addToInventory("Protien Bar");
        inventoryScreen.classList.add("hidden");
        showInventory();
    });

}
