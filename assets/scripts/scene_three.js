/* jshint esversion: 11 */

function goLeft() {
    removeBtn();

    loadScreen.style.backgroundImage="url(assets/img/atrium.jpg)";
    console.log("go left");
    
    gameParagraph.innerHTML = `Turning left you walk down the corridor which opens up into a large atrium style room. It seems to be set up as a waiting or reception area with benches in
                                neat rows going down each side. In the centre there is a small garden with bushes and flowers. The other side of the flower bed a lift, the doors of which
                                start to slowly open.. `; 

    setTimeout(function(){
        if (!labCoat) {
            setTimeout(function(){
                gameParagraph.innerHMLT = `Out walks a man hes wearing a white lab coat and is holding a device in his hand which he is tapping away at, he steps out of the lift and into the atrium
                                           he lifts his head and his eyes lock with yours across the room. 'Hey what are you doing out of your room?' He shouts and takes a couple of steps forward. Before 
                                           you have time to react he does something on his device and an alarm starts blaring 'Alert. Alert. Subject has breached containemnt.. Alert. Alert. Subject has 
                                           breached containemnt.. <br> You quickly turn and sprint down the corridor back the way you just came, your feet slapping on the floor with each step. Your heart 
                                           is racing, sweat is dripping down your back but you push on you need to go faster.. Your legs are burning and you blindly follow the coridor and skid round corners
                                           attempting to get away.. You can hear footsteps behind you and they are slowly gaining on you. The alarm is still going off and you know its bringing more people 
                                           to the chase. <br> You feel helpless, you dont know where your going you just know you dont want to get caught.. you skid round a corner into a new corridor which
                                           is empty appart from a set of doors at the end. Your pray that they are unlocked and you dont slow down as you go bareling into them.. Only to be knocked to the floor dazed 
                                           and winded, you dont take a second to get your breath back before jumping up and grabing the handle. You push the door but nothing.. You pull the door and nothing happens,
                                           you then use all your strength to shoulder barge them but they dont move. Locked.`;
                setTimeout(function(){
                    chaseFunction();
                    console.log("chase");
                },35000);
            }, 5000);
        } else {
            gameParagraph.innerHTML = `Out walks a man hes wearing a white lab coat and is holding a device in his hand which he is tapping away at, as he steps into the atrium he lifts his head and looks at 
                                        you before quickly dismissing you and walking across the floor and disapearing behind a wall. You poke your head around and see that to the left of the room is a set of 
                                        double metal doors which are now slowly closing behind the man. Looking around the room you see you have two options, follow the man through the door or go into the lift...
                                        <br> What do you do?`;
            createNewBtn(); 
            option1.innerText = "Follow the man";
            option2.innerText = "Go into the lift";
        
            option1.addEventListener("click", followLabCoat, {once : true});
            option2.addEventListener("click", dontfollowLabCoat, {once : true});              
        }
    }, 4000);
}

function chaseFunction() {
    
    gameParagraph.innerHTML = ` You spin on your heal and are about to double back but the path is blocked, for the first time your come face to face with whoever it was that was hunting you down 
                                You cant see their faces because they are wearing some kind of military gear that includes a helmet that covers their face. They all have weapons though, which are curently pointed at you.. You look down and 
                                see half a dozen red dots all over your body... <br> 'Move out of the way I can handle this' You hear a voice shout out and the wall of military people parts to allow them through. Out walks a man wearing a lab coat 
                                you note that this is a different man to the one that came out of the lift.. You dont know where he went. 'Lets all just calm down and take a minute shall we' He says raising his hands in the air palms pointing at you 
                                in a reasuring motion. 'Just come with me and I can get you back to your room.. Nobody needs to get hurt' He says as he slowly starts walking towards you. <br> You dont understand, why are they acting like your the threat 
                                when theyre the ones who locked you up and currently have guns pointed at your head. 'I just want to go home' You say, you take a step back and hit into the doors behind you. 'We know that cant happen, you have an imporant 
                                job to do here and you cant leave until you finish it, Lets get you back to your room hey? Im sure youll feel more settled then' The man says, hes still walking towards you and he is now within reaching distance. <br> You look 
                                to the left and right of him and realise that there is a gap and if your quick you might be able to dodge around him. Youve just started to move, one foot is off the ground when you feel a grip around the top of your arm 
                                'I dont think so, why does it always have to be the hard option with your kind..' The man has grabed hold of your arm and there is no way to get free, you look at him. Hes middle aged with slightly thinning black hair 
                                under his lab coat he is wearing some kind of scrubs, he has a small brown stain on the front of the top just below the collar. <br> As your taking in his appearence you feel a sharp pain in the side of your kneck, you turn 
                                your head to the side and see the man pulling away a needle from your kneck 'There, that will make you feel bette' he says to you before turning his head to address the guards behind you.. You notice that they have 
                                been working their way down the corridor and only stand a few feet away from you now 'Get them back to their room, and make sure sure they dont get out again'.. thats the last thing you hear before everything goes black... `;

    setTimeout(function(){
        window.location.reload();
    }, 60000);
}

function followLabCoat(){
    removeBtn();
    createNewBtn();

    option1.classList.add("hidden");
    option2.classList.add("hidden");

    gameParagraph.innerHTML = `Deciding to follow him you slowly creep towards the doors which have closed by the time you get there, you push on them but they dont move.. You scan around the doorway and notice 
                                a small keypad to the side it has a section for you to scan a keycard..`;

    
    setTimeout(function(){
        if(doorPass) {
            gameParagraph.innerHTML = `After frowning at the doors for a second you remember the keycard that you picked up and are thankful to past you for deciding to pick it up. You bring it up to the panel and after 
                                        a short pause it lets of a high pitched beep before turning green and the doors start to slide open. You bounce on the balls of your feet and adrenaline fills your veins as your 
                                        prepared to be confunted with whatever is on the other side, getting ready to fight if needbe..`;

            option1.classList.remove("hidden");
            option1.innerText = "Continue..";
            option1.addEventListener("click", keyCardDoor);

        } else {
            gameParagraph.innerHTML = `You press your hand to the panel and press some of the buttons hoping to accidently stumble the right combination but since you dont have a key card the door doesnt budge.
                                        since you cant get through the door you spin on your heal and and decide to try the lift isntead.`;

            option2.classList.remove("hidden");
            option2.innerText = "Continue..";
            option2.addEventListener("click", dontfollowLabCoat);
        }
    });
    
}

function keyCardDoor() {
    removeBtn();
    createNewBtn();
    const paragraphArray = [`The doors slide open you find yourself in a room that is a cross between a science lab and an operating theatre. Down the left sided there is a long metal counter top with two metal 
                            inks at either end.. Down the right-hand side are work stations with stools placed neatly under them. On top of the stations are various sized microscopes with jars and dishes placed 
                            next to them. You walk forward slightly and see that they each contain a jell like substance. You see the man you followed walk through a door at the back of the room and you slowly 
                            creep after him. You manage to catch the door as is closing and peek round into a dimly lit room, there are chairs set out in rows all facing a large class window. Your not sure whats 
                            on the other side because the view is currently obscured by a thick black curtain. Your heart rate increases as you realize that a few of the chairs are occupied by more people in lab 
                            coats but they dont seem to have noticed you.. their focus is on the window. Not wanting the light thats creeping in through the open door to alert the others of your presence you 
                            creep in the room letting the door close softly behind you and sit in the chair closest to the door, you hunch down trying to make yourself as small as possible..`, 

                            `Suddenly you hear a small squeaking noise and your attention is directed to the curtain thats covering the window, its slowly raising to give you your first glimpse into the room beyond.
                            The room is set up like an operating theatre. The walls and floors are covered in a light blue tile and you can see there is a drain in the centre of the floor. Along the walls are 
                            various medical instruments and machines and in the centre of the room is an operating bed. The room is currently empty but it doesnt take long for a set of double doors to swing 
                            open and in comes two people wearing light green scrubs. Followed closely behind them are two people wearing military gear, between them is a man.. the military people are gripping him 
                            by his upper arms and walking him into the room despite his protests. He is kicking and trying to lash out at them attempting to exit the room.. As the military people move the man over 
                            to the hospital bed the people in scrubs walk over to one of the sinks and start to wash their hands… The military people lift the man up by his arms as if he weighs nothing and put him
                            onto the operating bed, one of them pins him down by his shoulders while the other uses the straps attached to the bed to secure him to the table, one over his chest and one around his
                            upper thighs. They then move onto the straps that attach his wrists to the bed, while the military men move around each other securing the man to the bed like a well oiled machine and
                            you get the impression this isnt the first time theyve done this. 
                             `,

                             `It doesnt take long for the man to be secured to the bed and be unable to move, stepping away from the bed, they line up shoulder to shoulder and look at the surgeons. 
                             The surgeons have finished washing their hands and have now placed on rubber gloves and aprons, they look to the military people and nod… this causes the military people to turn on their 
                             heal and walk out from the room.. obviously their jobs here is done..You cant take your eyes of the scene playing out in front of you and without realising what your doing you have 
                             raised out of your chair slightly and gripped the back of the chair in front with white knuckles. A static noise enters the room and you quickly whip your head around searching for the 
                             source and spot speakers lining the ceiling. 'Ok everyone, thanks for joining us today. Today we will be demonstrating how to insert an implant into the subjects' one of the surgeons 
                             says, its hard to know which one because they both have masks on. As they talk they both move into position so one is stood at either side of the bed. The man laying on it is still 
                             thrashing attempting to break free of his restraints, his head is whipping back and forth as he tries to keep an eye on what both doctors are doing. 
                             `,

                             `You look around the room at the people in lab coats who are sat around you expecting to see the same horror that is on your face reflected back at you but instead they just sit blank 
                             faced staring straight a head. A couple of them are even whispering amongst themselves, but nobody seems to be shocked at what going on in front of them. You want to scream how can this 
                             be normal and how can they just sit back and let it happen. 'This subject arrived a couple of days ago and you can see that he is particularly riled up so its important we get the 
                             implant in as soon as possible to protect everyone here' one of the doctors reaches his hand out and the other one places a mask into it. The doctor then places it over the mans face 
                             and holds it there and a few seconds later the man stops struggling and goes limp..'For those of you who havent seen it this is what the implant looks like As the surgeon is talking he 
                             holds up a rectangle device no bigger than 5 cm long, it has a long wire tail coming off the end 'It gets inserted just above the ear and this wire here' he says pointing to the tail 
                             section 'This moves through the scull and attaches to the brain stem. This then allows us to control the chip and by effect the subject. It contains the translator technology so we can 
                             communicate, we can also remotely activate it so if they become unruly we can either cause a small shock or knock them out keeping the situation under control' As hes talking he has 
                             taken out a razor and has starting to shave the side of the mans head just above his ear.`,

                            `  'Its completely painless and the subject will recover enough withing a few hours to being their
                            testing, ok lets start shall we? Scalpel please' He says and once again holds out his hand for the other surgeon to place a scalpel in..
                            You think you might pass out, or throw up.. or both. Sliding of the chair you creep to the door and exit back into the room you just left. You crouch down and place your forehead to 
                            the cool tile floor and take a few deep breaths. Is this what they did to you? What sort of people are they? 
                            Wanting to get as far away as possible from the situation happening behind you, you run back through the door and out into the atrium`
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
            option2.innerText = "Continue.."; 
            option2.addEventListener("click", lab01);
        }
    });

}

function dontfollowLabCoat(){
    removeBtn();
    createNewBtn();
    gameParagraph.innerHTML = `You make your way across the atrium towards the lift, The doors have closed so you reach out and press the button on the wall to the left of the doors 
                                You start biting your nails as you wait for the lift to open, Scanning the room from left to right you keep an eye out for anyone else coming this way... With a ding the lift arrives and the 
                                doors open letting out a slight cool breeze. You walk inside and the lift dips slightly, you look at the panel on the wall and see that for most of the floors you need a key in order to activate 
                                the button, the only two which dont require a key is the atrium where you currently are and the last button labeled B, which you figure should be basement. <br> Which option do you choose?`;

    
    option1.innerText = "Go and check out the basement?";
    option2.innerText = "Youve changed your mind, follow the guy in the lab coat";

    option1.addEventListener("click", liftDownOption, {once : true});
    option2.addEventListener("click", followLabCoat, {once : true});
}


function liftDownOption() {
    removeBtn();
    createNewBtn();
    gameParagraph.innerHTML = `You reach out and press the button labeled B, the doors start to close and an anouncement states that the lifts going down.. As you stand there you start to think about what might be waiting for
                                you at the end of this lift. Will it open up into a room of lab coat guys and youll be trapped? or will you finally get some answers to what the hell is going on here. As the lift is movign
                                you start to tapp your foot in anticipation of the answer. It doesnt take long before the lift comes to a stop and the doors open with a ding. You step out of the lift and see that you have
                                entered what looks like a cafeteria.. its not very big, there are 4 tables each eith 4 white plastic chairs around them. To the left is a kitchen area with a fridge, some counter top and a sink
                                abover the coutner are some cabinets.  to the right are a couple of vending machines and another potted plant.. On the walls are posters and notices. Directly ahead of you is am archway you cross
                                the room to take a closer look and you see it leads to another corridor you look both ways and see that its only a short corridor, just a few feet. on the wall there is a sign on the wall with two
                                arrows, the left arrow is labled training rooms and the right arrow is labeled Ward <br> Which do you Choose?`;
    
        
    option1.innerText = "Go to the Ward";
    option2.innerText = "Go to the Training rooms";
                            
    option1.addEventListener("click", ward, {once : true});
    option2.addEventListener("click", trainingRooms, {once : true});
    // all the floors need a special key but the basement 

    // if player picked up key they can insert it, before they pick a number the lift starts to move - specialKeyOption()

    // else player can go to the basement - basementOption()
}

function trainingRooms() {
    removeBtn();
    createNewBtn();

    gameParagraph.innerHTML = `Turning left you walk down the corridor and through the double doors the corridor on the other side looks idential to all the others youve been through and you wonder how the people 
                                here dont get lost. As you walk down you see there are rooms on either side each has a large glass viewing window. Each room seems to be laid out the same, there is a desk to the left
                                of the room and then in the centre of the room is an empty table. The first few are empty and your starting to think that down here might be deserted but but you hear noise from 
                                further down the corridor. You go down to investigate and see that one of the rooms isnt empyt, theres a person in a labcoat sat at a computer with their back to you, they have what looks 
                                like a document on the screen but there is too much text for you to pick out what its saying. A young woman who is stood in the center of the room her head is down so you cant see her face.
                                She has wires connected to her head and is staring at a can that has been placed on the table infront of her.  All of a sudden the can flys across the room and hits into the viewing window
                                you jump back in suprise barely containing the scream thats threatening to escape. The woman slowly raises her haid and looks up at the person in the labcoat and her eyes are glowing blue. 
                                You notice that She is breathing hard and she looks exhasted, your eyes are then drawn down to see that the floor is covered in crumpled up cans.. How long has she been doing this you think? 
                                'Again' You jump as the man at the computer barks out an order 'And dont take so long this time' he says to her barely glancing away from his screen. You see the womans shoulders drop and she
                                takes in a deep breath as if getting ready to preform again. Her eyes then flick to you, her eyes go widw with shock and your not sure if you hear her gasp or if you imagined ita 
                                Her eyes flick back to the labcoat person seemingly checkign he isnt paying attention before quickly looking back at you and mouthing at you to run, you dont need telling twice you quickly 
                                turn on your heel and sprint back down the corridor, you fly through the doors which causes them to slap against the wall..You run through the cafeteria area and straight to the lift, and 
                                repeatedly press the button on the wall as if that will help it arrive quicker.. After what feels like forever, but couldnt have been more than a couple of seconds the lift finally arrives. 
                                You charge into the lift before the doors have finished opening and repeatedly press the button for the atrium. `;
   
    option1.innerText = "Continue";
    option2.classList.add("hidden");
                            
    option1.addEventListener("click", lab01, {once : true});
}

function ward() {
    removeBtn();
    createNewBtn();

    option1.classList.add("hidden");
    option2.classList.add("hidden");

    gameParagraph.innerhTML = `You turn right down the corridor and enter a room thats set up like a hospital ward. There are beds down each side, some have curtains pulled around them obscuring the view. 
                                You start to walk down the centre isle between the beds, you dont get very far when you hear a noise coming from behind one of the curtains. You reach out and grab the fabric,
                                and slowly pull the curtain to the side so you can peak inside. Lying in one of the beds is a man, he has a bandage around the top of his head and over one eye.. He is hooked 
                                up to a machine on the wall that is giving of a steady beep noise. You pull the curtain open more and step forward slightly so you can get a better view. As you do this the man 
                                opens his good eye and looks at you. He looks surprised at your presents 'How did you get out? You shouldnt be here' He croaks, he attempts to sit up slightly.. winces in pain 
                                and gives up.. 'You need to leave before they come back' he says, 'What happened to you' you ask him you take a step forward and teach out your hand as if to touch him but you 
                                let it drop to your side instead 'Who do you think? Apparently I wasnt preforming as expected' He says before starting to cough uncontrollably. You look around searching for 
                                a way to help and spot a glass of water on the table beside his bed, you pick it up and press it to his lips allowing him to take a small sip.. He turns his head to the side
                                indicating that hes had enough so you put it back on the table. 'You need to leave now, they only left to go check something.. they could be back any second' As he says this 
                                you hear a door bang from somewhere further into the building 'Run!' He says.. you dont need telling twice, you turn around and run out the the cubicle pushing the curtain 
                                aside as you go… You run back down the corridor where you just came from. You run through the cafeteria area and straight to the lift, and repeatedly press the button on the wall 
                                as if that will help it arrive quicker..After what feels like forever, but couldnt have been more than a couple of seconds the lift finally arrives. You charge into the lift 
                                before the doors have finished opening and repeatedly press the button for the atrium. `;

    setTimeout(function(){
        console.log("ward");
        option1.classList.remove("hidden");
        option1.innerText = "Continue..";
        option1.addEventListener("click", lab01, {once : true});
    }, 2000);                      

}


function lab01() {
    removeBtn();
    createNewBtn();

    gameParagraph.innerHTML = `Arriving ack in the atrium you scan the room figuring out your next move. You see door tucked away in the corner that you hadnt seen before, There is a small metal sign next to the door labelled 'lab 1'
                                Rushing over you open the door and slip inside, overhead lights flicker on as you enter and your met by a cool breeze of air conditioning. There are 
                                4 different stations set up with various vial and microscopes on top of them.  You spot a computer desk tucked into the corner to the left of your room
                                and you rush over to it. You reach out and wiggle the mouse hoping to bring it to life, you hear a fan kick in and tap your foot impatiently as you wait 
                                for the screen to turn on. As your waiting you see that under the desk is a set of 3 draws, do you look inside?  `;

    setTimeout(function(){
        option1.innerText = "Search the draws for anything useful";
        option2.innerText = "Focus on the computer";

        option1.addEventListener("click", checkDraws, {once : true});
        option2.addEventListener("click", searchPc, {once : true});
    }, 2000);


}

function checkDraws() {
    removeBtn();
    createNewBtn();

    gameParagraph.innerText = "Inside you find an ID Badge, a Keycard and a vial of blue iridescent liquid.. "; 

    option1.innerText= "Check back to the computer";
    option1.addEventListener("click", function(){
        itemsContainer.style.display = "none";
        searchPc()
    });


    let itemsContainer = document.createElement("div");
    let vialItem = document.createElement("img");
    let idItem = document.createElement("img");
    let keyCardItem = document.createElement("img");

    vialItem.src="assets/img/vial.jpg";
    idItem.src="assets/img/id_card.jpg";
    keyCardItem.src = "assets/img/key_card2.jpg";
    
    vialItem.alt="Vial";
    idItem.alt="Id Card";
    keyCardItem.alt="Key Card";

    itemsContainer.classList.add("items-container");
    vialItem.classList.add("draw-items-img", "vial");
    idItem.classList.add("draw-items-img", "idCard");
    keyCardItem.classList.add("draw-items-img", "keyCard");



    itemsContainer.appendChild(vialItem);
    itemsContainer.appendChild(idItem);
    itemsContainer.appendChild(keyCardItem);
    loadScreen.appendChild(itemsContainer);

    vialItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add");
        addToInventory("Vial");
        inventoryScreen.classList.add("hidden");
        showInventory();
    });
    idItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add");
        addToInventory("ID Card");
        inventoryScreen.classList.add("hidden");
        showInventory();
    });
    keyCardItem.addEventListener("click", function(){
        this.classList.toggle("inventory-add");
        addToInventory("Key Card");
        inventoryScreen.classList.add("hidden");
        doorPass = true;
        showInventory();
    });

    option2.classList.add("hidden");
}

function searchPc () {
   

    removeBtn();
    createNewBtn();

    gameParagraph.innerHTML = `The computer finally comes to life, on the desktop is some software icons and a folder labelled subjects.. you click on it and as you wait for the folder to open you quickly 
                                glance over your shoulder to make sure nobody is trying to sneak up on you. The file opens and you gasp in horror as you see hundreds of sub folders each labelled subject - 
                                with an identifying number. You start to scroll down until one of the numbers jumped out amongst the rest, you move your mouse and hover it over the folder labelled subject 443. 
                                You take a steadying breath before double clicking on the folder. It opens up and inside are various document files, you click the first one labelled Subject 441 - Info. It 
                                opens up into a document containing a small picture of yourself along with other information such as your height and weight age. there is also a section labelled powers and but 
                                there is no text in the box. You continue down the page and come to a small paragraph of text 'Subject 443 has been in the facility for the last 3 years and has seemed to make
                                little to no progress despite out best efforts. They seem unwilling to help our cause and often lash out and become combative resulting in them needing sedating as to not put 
                                the staff in risk.`; 

    option1.innerText = "Subject 443 - Known Associates";
    option2.innerText = "Subject 443 - Medical";

    option1.addEventListener("click", subjectInfo);
}

function subjectInfo() {
    removeBtn();
    createNewBtn();

    
    gameParagraph.innerHTML = `Subject 443 entered the program with no known associates.
                                <br>
                                note - Subject 443 has started interacting with other subejcts, staff have described that subjects have been seen `; 

    option1.innerText = "Subject 443 - Medical";
    option2.innerText = "Move on";

    option2.addEventListener("click", escape);

}

function subjectTreatment() {
    removeBtn();
    createNewBtn();

    gameParagraph.innerHTML = `Initial Health Tests 05/04/56
                               <br> Subject 443 seems to be in imaculate health, all blood tests have come back clear and the results are better than we could hope for. I believe that subject 443 is a prime subject for
                               the project.
                               <br> Note 1 15/06/56- Subject 443 has started showing some resistance to the program and has started reacting hostile to staff members during testing. Not incidents to report but something
                               to keep an eye on.
                               <br> Note 2 20/06/56 - Subject 443 refused to participate in testing today despite the doctors best efforts, they became agitated when the doctor tried to talk them round. Subject 443 was given
                               3mg of Miazatron in order to calm them down and return them to their room. Effects only lasted 20 minutes, subejct 443 showed no negative side effects.
                               <br> Note 3 - 22/06/56 - During testing Subject 443 became highly distressed during testing and refused to participate. Subject 443 started throwing equipment round the room so in order to protect
                               all staff members Subject 443 was given 6mg of Miazatron to sedate them and return them to their room. Effects lasted 1 hour, subejct 443 showed no negative side effects. 
                               <br> Note 4 - 30/06/56 - Subject 443 once again became combatitive during testing, Subject 443 was seen interacting with other subjects trying to get them to refuse testing too. Despite security
                               being called subject 443 refused to participate and was given 12mg of Miazatron to protect all staff involved.Effects  lasted 1 hour 30 minutes, subejct 443 showed no negative side effects and 
                               was returned to testing once they came round. `
}


function escape() {
    removeBtn();
    createNewBtn();

    gameParagraph.innerHTML = `As you push open the door a cool breeze fans over your face, your greeted by a small stairway with a metal staircase going down. Leaning over the banister your try to see how far it 
                                goes down but you can only see darkness. As you go down the air becomes cooler and your wrap your arms around yourself to try and stay warm. You keep your head down focusing taking 
                                one step at a time so you dont accidentally trip and fall into the void below, the sound of your feet hitting the metal steps soon becomes a soundtrack and you start to make a rhythm 
                                out of the sound to distract you from what might be at the bottom. 
                                <br> Eventually your reach the last step and are confronted by another door you grasp the cool metal handle and pull it towards you, the door gives a small suction sound as you pull 
                                it open and more cool air hits your face cooling the sweat that has appeared on your brown. The room beyond looks like a big air hanger the harsh lights above are reflected in the 
                                sleek white floor tiles, just by looking at the tiles you know that if you had shoes on they would squeak against them as you walked across. There are eight long lines of military 
                                vehicles all lined up running the length of the hanger. The left wall seems to be made up of a row of 6 garage type doors and at either end of the row is a doorway, your eyes go 
                                wide and your heartrate picks up as you realize that the only thing standing between you and freedom is one more door. 
                                <br>
                                You can hear people talking and you notice there is a group of people standing around one of the vehicles about halfway down the hanger. You quickly crouch down hide behind the 
                                vehicle infront of you. It seems to be a truck of some kind, the wheels coming up to your hips. You sit back on your heels and make a quick plan, you just need to cross the room and 
                                make it to that door without the people noticing you.. cant be too hard right? You slowly crawl to the front of it so your inline with the front tire and peer around the bonnet, the
                                walk way between this vehicle and the next row is clear. Quickly darting out you keep low and run across the walkway and take cover behind the next car, you repeat this process until 
                                your one row of cars away from the door. 
                                `; 

    option1.innerText = "Continue";
    option2.classList.add("hidden")
    // You go down a long way.. you end up in what appears to be an underground cargo area with a garage doors on one end
    // You run over if you picked up the keycard you can open the doors
        // You have escaped - if you also picked up the vial the text changes to say you can hand it over as evidence
        // or if you looked at the code on the map 

    // if you didnt pick up the keycard it gives you the option to go back and get it otherwise you cant escape 
        // you run to head out but get caught by the guards


    option1.addEventListener("click", function(){
        if (doorPass) {
            gameParagraph.innerHTML = `You quickly slip out from behind the car and move to the final car that will provide you cover, you take a look at the door and notice that there is a small square next to it 
                                       and realize that you need some type of key to exit. Your spirits are just about to drop when you remember the keycard you took from the desk and pray that it matches, you reach 
                                       into your pocket and grip the cool plastic and hold it in your palm so tight the edges dig in but you dont care. 
                                       <br>Doing one more check of the walkway you creep out and stand in front of the door you reach up and press the plastic card against the box and wait.. after a couple of seconds
                                       theirs a faint beep and the sound of the lock being released fills your ears. You let out the breath you were holding and cand stop the grin taking over your face you push the 
                                       door and it opens.  Your hit by a wave of dry heat, not hanging around you leap up and run through the door..  and dont stop running. Your not sure where your heading but you 
                                       know that you need to find help, you need to rescue the other people in the facility and bring down the people in charge.. but who do you trust? Your all alone on an alien 
                                       planet, your not sure how you will do it but determination settles in your gut as you realize that you will do whatever it takes to free the rest of your people. `

                
                setTimeout(function(){
                    option2.classList.remove("hidden")
                    option1.classList.add("hidden")
                    option2.innerText = "New Game";
    
                    option2.addEventListener("click", function(){
                        window.location.reload();
                    });
                }, 2000)
            
        } else {
            gameParagraph.innerHTML = `You quickly slip out from behind the car and move to the final car that will provide you cover, you take a look at the door and notice that there is a small square next to it 
                                        and your pray that you dont need some type of key to exit. Doing one more check of the walkway you creep out and stop in front of the door you place a hand against the cool 
                                        metal and push but the door doesnt move, a sinking feeling fills your gut as you realize the door is locked. Of course it is, why would they just leave the front door wide 
                                        open you think. You lean forward and place your forehead against the cool metal, and you take some deep breaths as your only hope of getting out of here was just squashed. 
                                        Not wanting to give up your only hope is to try and make it back to the office and get the keycard, you have no other choice. You spin on your heel and start making you way 
                                        back across the air hanger….`
        }

        setTimeout(function(){
            option2.classList.remove("hidden")
            option1.classList.add("hidden")
            option2.innerText = "Game Over";

            option2.addEventListener("click", function(){
                window.location.reload();
            });
        }, 2000)
    }) 

}

