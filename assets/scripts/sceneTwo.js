let labCoat;

function leaveRoomOne() {
    console.log("leave")

    let itemsContainer = document.getElementsByClassName("items-container")[0];
    if (itemsContainer) {
        itemsContainer.style.display = "none";
    }

    removeBtn()
    createNewBtn()

    loadScreen.style.backgroundImage="url(assets/img/corridor2.jpg)";
    gameParagraph.innerText = "You decide its time to leave the room and to try and find answers, you slowly crack the door just enough \
                                to peek out and see whats outside. The first thing you register is a blinding light and it takes a minute \
                                for your eyes to register. After a couple of seconds you realise that your looking at a stark white hallway \
                                both the walls and floor are covered in white tiles that seem to be amplifiying the lights from above. You open \
                                the door slightly wider so you can poke your head out for a better view and find that the corridor is deserted. \
                                you have two options \n\ndo you go left or right? "; 

    option1.innerText = "Go Left"
    option2.innerText = "Go Right"

    option1.addEventListener("click", goLeft, {once : true});
    option2.addEventListener("click", goRight, {once : true});
}

function goRight() {
    console.log("goRight")

    removeBtn()
    createNewBtn()

    
    gameParagraph.innerText = "Chosing right you leave the room and slowly shut the door behind you trying to make as little noise as possible\
                                you creep down the corridor straining your ears for any sounds of people but its completely scilent. You notice \
                                that there are doors at regular intervals along that corridor that look exactly like yours \n\n Do you try them? "; 

    option1.innerText = "Try doors there might be other people like you behind them"
    option2.innerText = "Keep going you dont need to worry about other people right now"

    option1.addEventListener("click", tryDoors, {once : true});
    option2.addEventListener("click", keepGoing, {once : true});
}

function tryDoors() {
    console.log("Try Doors")

    removeBtn()
    createNewBtn()

    
    gameParagraph.innerText = "As you walk past the next door you grab the handle and give one quick downward tug.. it doesnt budge. You quickly move to the \
                                next door and do the same but its also locked. You let out a huff but dont let it dishearten you, moveing from one door to the next \
                                you repeat the action are just starting to think that they must all be locked. You grab the next handle expecting the same outcome \
                                but this time instead of resistance the handle pushes all the way down. You take a couple of deep breaths and are debating your next move \
                                hear a noise in the distance. You blood turns to ice in your veins are you realise that you can hear people and they are definitely heading \
                                in this direction \n\n What do you do?  "; 

    option1.innerText = "Go inside the room, you might find answers in there and if not atlease you can hide."
    option2.innerText = "Run! forget whats in the room, those people might be heading there and you dont want to get cornered. "
 

    option1.addEventListener("click", lookInside, {once : true});
    option2.addEventListener("click", run, {once : true});
}

function run(){
    removeBtn()
    gameParagraph.innerText = "You decide to run because who knows whats in that room and it could lead to you getting cornered. you take off down the corridor at a full sprint, you come to a corner and skid \
                                round it and bump into something solid. You fall back and land on your back, the impact taking the wind out of you. Dazed you look up and see two people in lab coats staring down \
                                at you, they are saying something but you dont understand the language their using and you dont stop to ask questions. You quickly scramble to get your arms and legs under you so \
                                you can stand up and run in the opposite direction only to be confronted by another group of people. This time they are wearing what looks to be military uniforms and are holding \
                                weapons you dont want to be introduced to, you turn back around to face the lab coats again figuring you have a better chance of getting past them. You try to rush past them but \
                                they are stronger than they look, one of them grabs you by your upper arm… You try to pull your arm free, not caring if your hurting yourself in the process you just want to get \
                                free because you know if they send you back to that room you might never get out. Your struggling with all your might, you use your other hand to try and pry the lab coats fingers \
                                from your arm but their grip is like steel.. You feel a sharp prick in your neck and you whip your head around and realise that while you were busy with lab coat one, it gave lab \
                                coat two the opportunity to come behind you and inject you with something.. Your not sure what it was but it acts fast, the corridor begins to spin and the lab coats faces start to\
                                swirl and blur and before you know it all you see is darkness.."; 

    setTimeout(function(){
        labCoatDecision() 
    },3000)
}

function lookInside() {
    console.log("Look Inside")
    loadScreen.style.backgroundImage="url(assets/img/starting_room.jpg)";
    removeBtn()
    createNewBtn()

    const paragraphArray = [
                                "Quickly throwing the door open you jump inside and shut the door behind you, you lean up against the back of the door and try to slow your heart rate \
                                so you can listen to see where they are going. You sigh in relief when you realize that the footsteps disappear as fast as they appeared. You turn around for \
                                the first time and your presented with a room exactly the same as the one that you just left. From the layout to the grime, you worry for a second that your going \
                                crazy and are back in the room you just woke up in. There is one thing that's different about this room though, and its the same thing you find your eyes drawn to. ",

                                "Sitting on one of the beds, strapped down exactly how you were is a young woman. She cant be older than 24, she has long dark hair which you cant tell if its her \
                                natural colour or caused by a build up of dirt and grime. She's wearing what looks like a long white t shirt that you think goes down to her knees but its hard to tell \
                                because she's sitting down. Her skin is pale and she has bruises and marks all over her arms, you have to swallow down the bile rising up your throat as you realise that \
                                some of them are needle marks. The last and most peculiar thing about her is she has glowing blue eyes, you would thing they would scare you but they dont. Instead you \
                                feel a rush of safety and comfort when you look at her.",

                                "You take two quick steps closer to the bed \n\n 'Hi, Do you know where we are? I woke up in a room down the hall \
                                and I dont know whats going on.. I dont know who I am or why Im here and when I try to remember I get a blinding pain right here' \n\n You say as you point to the side \
                                of your head the girl stares back at you with wide eyes, she whispers something but you dont catch what she says. \n\n What did you say? I cant hear you' you say as you lean in closer\ ",

                                "\n\n 'You shouldnt be here' the girl whispers again you pull away slightly and turn to look at her face again, you give her a puzzled look \n\n 'I dont know where to go \
                                do you know where we are? what are we doing here?' you say and gesture are the room \n\n 'Were bad people' the woman replies, her voice shaking slightly \n\n 'What do you mean \
                                bad people? I dont remember anything' You reply, getting slightly frustrated. You need to get out of here and if this woman doesnt explain things faster your going to get caught \
                                \n\n  'They found us and brought us here, they say were wrong.. that we should exist. We go against nature' \n\n go against nature? what does she mean? you try to remember anything \
                                from before you woke up but you instantly get that pain in the side of you head again. Your knees buckle and you have to hold onto the side of the bed to stop yourself from hitting \
                                the floor. \n\n 'Found us where? what do you mean we go against nature?' You ask her, subconsciously you have reached out and grasped the womans forearm you slightly shake it out of \
                                desperation as you talk to her",

                                "'Home' replies the woman \n 'Home? isnt this out home?' you ask, your eyes pleading with her to give you answers but by the way your heart rate has picked up you already know them, you \
                                just havent admitted it to yourself yet \n 'No, this isnt out home.. Well maybe for some of us who might have grown up here, but for the rest of us we were stolen. The people from this \
                                planet arrived at ours in a space ship, they came with their guns and their explosions when we fought back and they realized what we can do they stole us away. Said that they couldn’t leave \
                                a weapon like that behind, think of how they can use us. So they brought us here, they are trying to replicate the gene that gives us our gifts to use on their people. Not having much luck though\
                                /n/n She lets out a small laugh as she says the last sentence but you hardly notice, you can hardly hear anything except the blood rushing to your ears. How can it be? You were stollen? Why cant \
                                you remember that? and how can you be from another planet when you've recognized the words the people here are saying? ",

                                "'Why dont I remember any of that? and how come I can understand what theyre saying when I hear them in the corridor?' /n/n She doesnt say anything but she turns her head to the side \
                                and you straighten in shock. The side of her head just above her ear a small patch of her hair is completely shaved, you hadnt noticed it before because the hair on top is long enough to \
                                cover it. You lean forward slightly to have a better look and see that there is a small pink scar running through the centre of the patch. \n\n 'This is why you dont remember who you are \
                                and this is why you can understand them' As shes talking she lets go of her hair and it covers the patch back up so you would never know its there",

                                "She turns and looks at you \n\n 'Its some kind of chip, they realised that we couldnt communicate with them so they implanted one of these in us all so they could give us instructions better, its faster than trying to teach us new languages \
                                they can program it to any language and poof were fluent. They also use them to control us, there is a small wire that runs from the chip directly into out brain so if we misbehave they can give us a quick \
                                zap to get us back inline' The woman explains this very calmly like the revelation isnt completely making your world implode. \n\n You lift your hand up to the side of your head, your almost to scared to check \
                                but as you run your fingers over the spot just above your ear you feel the scar \n\n 'Yep, and you must have really pissed someone off to get fried this bad, but dont worry everything will come back in a few days\
                                its never permanent. \n\n Your just about to as her more questions when you hear the door handle turn. You look at the Woman in horror, her expression mirrors yours 'Hide' she whispers \n\n Where do you hide?"
                            ];
    
    option2.classList.add("hidden")
    option1.innerText = "Continue.."; 

    let textIndex = 0;

    option1.addEventListener("click", function(){
        gameParagraph.innerText = paragraphArray[textIndex];
        textIndex++;

        if (textIndex === paragraphArray.length) {
            removeBtn()
            createNewBtn()
            option1.innerText = "Hide under the bed"; 
            option2.innerText = "Hide in the cupboard"; 

            option1.addEventListener("click", hideUnderBed)
            option2.addEventListener("click", hideInCupboard)
        }

    });

}

function hideUnderBed() {
    removeBtn()
    gameParagraph.innerText = "Heart pounding you run and drop to the floor, you manage to squeeze yourself into the small gap under the bed and with barely a second to spare you hear the door opening.\
                               Someone walks and stops at the end of the bed. You cant see what they look like the only thing you can see is a pair of shiny black high heel shoes. They start talking to \
                               the woman but you cant understand what theyre saying. Your so scared you think you might throw up, you close your eyes and send a silent prayer out to the universe begging \
                               for person to just leave again…"; 

    
    let fate = Math.floor(Math.random() * 2)

    if (fate >= 0 && fate <1) {
        setTimeout(function(){
            getCaught()
            console.log(fate)
        },3000)
    } else {
        setTimeout(function(){
            labCoatDecision() 
        },3000)
    }
}

function hideInCupboard() {
    removeBtn()
    gameParagraph.innerText = "Heart pounding you cross the room and throw the cupboard doors open, you cram yourself inside and pull the door closed behind you leaving a small gap that you can look out through \
                               You see the door open and in walks a Woman, she cant be much older than the one sat on the bed. Shes wearing light green scrubs and a white lab coat that comes down to her knees \
                               she starts talking to the woman sat on the bed but you dont understand what shes saying. A bead of sweat starts to slide down your face but your too scared to move incase you make \
                               a sound. The new woman is pressing the screen of the device as shes talking to the woman on the bed who is currently shaking her head. Suddenly the woman on the bed gets up and starts walking \
                               towards the door as she passes the cupboard your in she quietly whispers 'get help' your eyes flick over to the woman in the lab coat but shes distracted with the device and thankfully didnt hear..."; 

    
    let fate = Math.floor(Math.random() * 2)

    if (fate >= 0 && fate <1) {
        setTimeout(function(){
            getCaught()
            console.log(fate)
        },3000)
    } else {
        setTimeout(function(){
            labCoatDecision() 
        },3000)
    }
}

function labCoatDecision() {
    createNewBtn()

    
    gameParagraph.innerText = "After a few more minutes both the woman and the person in high heels leave the room. \
                                You let out a breath of relief, you stay still an extra few seconds to make sure they arent coming back before you slide out from under the bed. As you get \
                                up you notice that someone has left a lab coat on the bed.. Do you put it on? "; 

    option1.innerText = "Put the lab coat on"
    option2.innerText = "Leave it where it is"
 
    option1.addEventListener("click", function(){
        labCoat = true
        chooseLabCoat()
    });
    option2.addEventListener("click", function(){
        labCoat = false
        chooseLabCoat()
    });
}

function chooseLabCoat() {
    removeBtn()
    if (labCoat === true) {
        gameParagraph.innerText = "You put the lab coat on, its heavier than you expected and the material is slightly itchy against your skin. You put your hands in the pockets on either side but they \
        are both empty..."; 
    }
    else {
        gameParagraph.innerText = "You decide to leave the labcoat where it is, who knows if whoever left it there and and will happen if they come back and its missing.."; 
    }

    setTimeout(function(){
        gameParagraph.innerText = "You walk over to the door and rest your ear against the cool metal surface, you strain your hearing to see if you can hear anyone in the corridor outside but you cant hear anything \
                            Your not sure if the resons is because they have left or if the metal is too thick to let sounds through but you figure you cant stay where you are so you have no choice but to go out \
                            there. You reach out and grab the handle, taking a few deep breaths to settle your nerves you then quickly push the handle down and fling the door open before you can chicken out... The corridor is empty.. ";   
    }, 3000)

    setTimeout(function(){
        goLeft()    
    }, 6000)
}


function getCaught(){
    removeBtn()
    gameParagraph.innerText = "Luck mustnt be on your side because next thing you know your standing face to face with the person who just walked in, they pull out a radio and say something into it. You look around \
                                the room looking for an escape but your only option is to go out of the door you came in. You look over to the woman on the bed and shes looking at you with wide eyes, she gives a small \
                                not as if she knows your plan and thats the only permission you need. You rush toward the person who just walked in at full speed barging into their shoulder as your run past. You grab the \
                                door handle and pull the door open. You get a breif glimpse of the corridor before your vision is obsucred by a wall of black. Confused you look up and are confrunted by a wall of peeople dressed \
                                in some kind of military gear. You decide that if your going down your going down fighting so you dont slow down as you hit the wall of people head on, your wriggle and push at them trying to find a \
                                gap big enough to squeese through but they are like a solid force and nothing you do is making them move... And then its too late, you feel a pinch in your neck and a cool sensation running down your throat \
                                the room starts to spin and your vision is going blury... someone grabs your arm just before your start to fall and the world turns black..";

    setTimeout(function(){
    window.location.reload();
    }, 30000) 
}


function keepGoing() {
    console.log("run")

    removeBtn()
    
    gameParagraph.innerText = "You decide that your top priority right now is getting the hell out of here. You walk down the planning what to do next, if you could just find a phone maybe \
                                you could call for help?.. but you dont know where you are.. maybe find a computer then? Then you can find out where you are.. As your planning your next moves \
                                you realise that you can hear a noise in the distance. Your freeze and ice runs down your spine as you realise that you can hear people and they are heading in this \
                                direction. Throwing your plan out the window you take off down the corridor at a full sprint, you come to a corner and skid round it and bump into something solid. \
                                You fall back and land on your back, the impact taking the wind out of you. Dazed you look up and see two people in lab coats staring down at you, they are saying something \
                                but you dont understand the language their using and you dont stop to ask questions. You quickly scramble to get your arms and legs under you so you can stand up and run in \
                                the opposite direction only to be confronted by another group of people. This time they are wearing what looks to be military uniforms and are holding weapons you dont want to\
                                be introduced to, you turn back around to face the lab coats again figuring you have a better chance of getting past them. You try to rush past them but they are stronger than \
                                they look, one of them grabs you by your upper arm… You try to pull your arm free, not caring if your hurting yourself in the process you just want to get free because you know \
                                if they send you back to that room you might never get out. Your struggling with all your might, you use your other hand to try and pry the lab coats fingers from your arm but \
                                their grip is like steel.. You feel a sharp prick in your neck and you whip your head around and realise that while you were busy with lab coat one, it gave lab coat two the \
                                opportunity to come behind you and inject you with something.. Your not sure what it was but it acts fast, the corridor begins to spin and the lab coats faces start to swirl \
                                and blur and before you know it all you see is darkness.."; 

    setTimeout(function(){
        window.location.reload();
    }, 30000) 
}
