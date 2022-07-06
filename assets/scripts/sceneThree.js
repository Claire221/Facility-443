
function goLeft() {
    removeBtn()


    loadScreen.style.backgroundImage="url(assets/img/atrium.jpg)";
    console.log("go left")


    // if (option1) {
    //     removeBtn
    // }

    
    gameParagraph.innerText = "Turning left you walk down the corridor which opens up into a large atrium style room. It seems to be set up as a waiting or reception area with benches in \
                                neat rows going down each side. In the centre there is a small garden with bushes and flowers. The other side of the flower bed a lift, the doors of which \
                                start to slowly open.. "; 

    setTimeout(function(){
        if (!labCoat) {
            setTimeout(function(){
                gameParagraph.innerText = "Out walks a man hes wearing a white lab coat and is holding a device in his hand which he is tapping away at, he steps out of the lift and into the atrium \
                                           he lifts his head and his eyes lock with yours across the room. 'Hey what are you doing out of your room?' He shouts and takes a couple of steps forward. Before \
                                           you have time to react he does something on his device and an alarm starts blaring 'Alert. Alert. Subject has breached containemnt.. Alert. Alert. Subject has \
                                           breached containemnt.. \n\n You quickly turn and sprint down the corridor back the way you just came, your feet slapping on the floor with each step. Your heart is racing, sweat is dripping down your back but you push on \
                                           you need to go faster.. Your legs are burning and you blindly follow the coridor and skid round corners attempting to get away.. You can hear footsteps behind you and they are slowly gaining on you \
                                           The alarm is still going off and you know its bringing more people to the chase. \n\n You feel helpless, you dont know where your going you just know you dont want to get caught.. you skid round a corner \
                                           into a new corridor which is empty appart from a set of doors at the end. Your pray that they are unlocked and you dont slow down as you go bareling into them.. Only to be knocked to the floor dazed \
                                           and winded, you dont take a second to get your breath back before jumping up and grabing the handle. You push the door but nothing.. You pull the door and nothing happens, you then use all your strength to shoulder \
                                           barge them but they dont move. Locked."
                setTimeout(function(){
                    chaseFunction()
                    console.log("chase")
                },35000)
            }, 5000)
        } else {
            gameParagraph.innerText = "Out walks a man hes wearing a white lab coat and is holding a device in his hand which he is tapping away at, as he steps into the atrium he lifts his head and looks at \
                                        you before quickly dismissing you and walking across the floor and disapearing behind a wall. You poke your head around and see that to the left of the room is a set of \
                                        double metal doors which are now slowly closing behind the man. Looking around the room you see you have two options, follow the man through the door or go into the lift...\
                                         \n\n What do you do?"
            createNewBtn()   
            option1.innerText = "Do you follow the man.."
            option2.innerText = "Go into the lift"
        
            option1.addEventListener("click", followLabCoat, {once : true});
            option2.addEventListener("click", dontfollowLabCoat, {once : true});              
        }
    }, 4000)
}

function chaseFunction() {
    
    gameParagraph.innerText = " You spin on your heal and are about to double back but the path is blocked, for the first time your come face to face with whoever it was that was hunting you down \
                                You cant see their faces because they are wearing some kind of military gear that includes a helmet that covers their face. They all have weapons though, which are curently pointed at you.. You look down and \
                                see half a dozen red dots all over your body... \n\n 'Move out of the way I can handle this' You hear a voice shout out and the wall of military people parts to allow them through. Out walks a man wearing a lab coat \
                                you note that this is a different man to the one that came out of the lift.. You dont know where he went. 'Lets all just calm down and take a minute shall we' He says raising his hands in the air palms pointing at you \
                                in a reasuring motion. 'Just come with me and I can get you back to your room.. Nobody needs to get hurt' He says as he slowly starts walking towards you. \n\n You dont understand, why are they acting like your the threat \
                                when theyre the ones who locked you up and currently have guns pointed at your head. 'I just want to go home' You say, you take a step back and hit into the doors behind you. 'We know that cant happen, you have an imporant \
                                job to do here and you cant leave until you finish it, Lets get you back to your room hey? Im sure youll feel more settled then' The man says, hes still walking towards you and he is now within reaching distance. \n\n You look \
                                to the left and right of him and realise that there is a gap and if your quick you might be able to dodge around him. Youve just started to move, one foot is off the ground when you feel a grip around the top of your arm \
                                'I dont think so, why does it always have to be the hard option with your kind..' The man has grabed hold of your arm and there is no way to get free, you look at him. Hes middle aged with slightly thinning black hair \
                                under his lab coat he is wearing some kind of scrubs, he has a small brown stain on the front of the top just below the collar. \n\n As your taking in his appearence you feel a sharp pain in the side of your kneck, you turn \
                                your head to the side and see the man pulling away a needle from your kneck 'There, that will make you feel bette' he says to you before turning his head to address the guards behind you.. You notice that they have \
                                been working their way down the corridor and only stand a few feet away from you now 'Get them back to their room, and make sure sure they dont get out again'.. thats the last thing you hear before everything goes black... ";

    setTimeout(function(){
        window.location.reload();
    }, 60000)
}

function followLabCoat(){
// -	You sneak behind them and follow them they lead you down a staircase you otherwise would have missed, it goes on for a while. At the bottom of the stairs is a set of double doors, you follow them through and it leads you into a viewing area with a glass wall at the front which looks into what looks like an operating theatre. The person walks through and goes through a door to the left of the glass wall.  You stay and watch as they bring out someone and strap them to the bed..
}

function keyCardDoor() {

}

function dontfollowLabCoat(){
    gameParagraph.innerText = "You decide not to follow him and instead make your way across the atrium towards the lift. The doors have closed so you reach out and press the button on the wall to the left of the doors \
                                You start biting your nails as you wait for the lift to open, Scanning the room from left to right you keep an eye out for anyone else coming this way... With a ding the lift arrives and the \
                                doors open letting out a slight cool breeze. You walk inside and the lift dips slightly, you look at the panel on the wall and see that for most of the floors you need a key in order to activate \
                                the button, the only two which dont require a key is the atrium where you currently are and the last button labeled B, which you figure should be basement. \n\n Which option do you choose?"

    createNewBtn()
    
    option1.innerText = "Go and check out the basement?"
    option2.innerText = "Youve changed your mind, follow the guy in the lab coat"

    option1.addEventListener("click", liftDownOption, {once : true});
    option2.addEventListener("click", followLabCoat, {once : true});
}


function liftDownOption() {
    removeBtn()
    createNewBtn()
    gameParagraph.innerText = "You reach out and press the button labeled B, the doors start to close and an anouncement states that the lifts going down.. As you stand there you start to think about what might be waiting for \
                                you at the end of this lift. Will it open up into a room of lab coat guys and youll be trapped? or will you finally get some answers to what the hell is going on here. As the lift is movign \
                                you start to tapp your foot in anticipation of the answer. It doesnt take long before the lift comes to a stop and the doors open with a ding. You step out of the lift and see that you have \
                                entered what looks like a cafeteria.. its not very big, there are 4 tables each eith 4 white plastic chairs around them. To the left is a kitchen area with a fridge, some counter top and a sink \
                                abover the coutner are some cabinets.  to the right are a couple of vending machines and another potted plant.. On the walls are posters and notices. Directly ahead of you is am archway you cross \
                                the room to take a closer look and you see it leads to another corridor you look both ways and see that its only a short corridor, just a few feet. on the wall there is a sign on the wall with two \
                                arrows, the left arrow is labled training rooms and the right arrow is labeled Ward \n\n Which do you Choose?"
    
        
    option1.innerText = "Go to the Ward"
    option2.innerText = "Go to the Trainign rooms"
                            
    option1.addEventListener("click", liftDownOption, {once : true});
    option2.addEventListener("click", followLabCoat, {once : true});
    // all the floors need a special key but the basement 

    // if player picked up key they can insert it, before they pick a number the lift starts to move - specialKeyOption()

    // else player can go to the basement - basementOption()
}

function trainingRooms() {
    removeBtn()
    createNewBtn()

    gameParagraph.innerText = "Turning left you walk down the corridor and through the double doors the corridor on the other side looks idential to all the others youve been through and you wonder how the people \
                                here dont get lost. As you walk down you see there are rooms on either side each has a large glass viewing window. Each room seems to be laid out the same, there is a desk to the left\
                                of the room and then in the centre of the room is an empty table. The first few are empty and your starting to think that down here might be deserted but but you hear noise from \
                                further down the corridor. You go down to investigate and see that one of the rooms isnt empyt, theres a person in a labcoat sat at a computer with their back to you, they have what looks \
                                like a document on the screen but there is too much text for you to pick out what its saying. A young woman who is stood in the center of the room her head is down so you cant see her face.\
                                She has wires connected to her head and is staring at a can that has been placed on the table infront of her.  All of a sudden the can flys across the room and hits into the viewing window\
                                you jump back in suprise barely containing the scream thats threatening to escape. The woman slowly raises her haid and looks up at the person in the labcoat and her eyes are glowing blue. \
                                You notice that She is breathing hard and she looks exhasted, your eyes are then drawn down to see that the floor is covered in crumpled up cans.. How long has she been doing this you think? \
                                'Again' You jump as the man at the computer barks out an order 'And dont take so long this time' he says to her barely glancing away from his screen. You see the womans shoulders drop and she\
                                takes in a deep breath as if getting ready to preform again. Her eyes then flick to you, her eyes go widw with shock and your not sure if you hear her gasp or if you imagined ita \
                                Her eyes flick back to the labcoat person seemingly checkign he isnt paying attention before quickly looking back at you and mouthing at you to run, you dont need telling twice you quickly \
                                turn on your heel and sprint back down the corridor, you fly through the doors which causes them to slap against the wall.."
    removeBtn()
    createNewBtn()
   
    option1.innerText = "Continue"
    option2.classList.Add("Hidden")
                            
    option1.addEventListener("click", liftUpOption, {once : true});
}

function ward() {
    removeBtn()
    createNewBtn()

    gameParagraph.innerText = "You turn right down the corridor and enter a room thats set up like a hospital ward. There are beds down each side, some have curtains pulled around them obscuring the view. \
                                You start to walk down the centre isle between the beds, you dont get very far when you hear a noise coming from behind one of the curtains. You reach out and grab the fabric,\
                                and slowly pull the curtain to the side so you can peak inside. Lying in one of the beds is a man, he has a bandage around the top of his head and over one eye.. He is hooked \
                                up to a machine on the wall that is giving of a steady beep noise. You pull the curtain open more and step forward slightly so you can get a better view. As you do this the man \
                                opens his good eye and looks at you. He looks surprised at your presents 'How did you get out? You shouldnt be here' He croaks, he attempts to sit up slightly.. winces in pain \
                                and gives up.. 'You need to leave before they come back' he says, 'What happened to you' you ask him you take a step forward and teach out your hand as if to touch him but you \
                                let it drop to your side instead 'Who do you think? Apparently I wasnt preforming as expected' He says before starting to cough uncontrollably. You look around searching for \
                                a way to help and spot a glass of water on the table beside his bed, you pick it up and press it to his lips allowing him to take a small sip.. He turns his head to the side \
                                indicating that hes had enough so you put it back on the table. 'You need to leave now, they only left to go check something.. they could be back any second' As he says this \
                                you hear a door bang from somewhere further into the building 'Run!' He says.. you dont need telling twice, you turn around and run out the the cubicle pushing the curtain \
                                aside as you go… You run back down the corridor where you just came from."

}

function basementOption() {
    
    // you step out into a canteen looking room - a sign says ward one way and training rooms the other


    // Ward - liftUpOption()
        // You follow the corridor and enter a room that’s set up like a hospital ward, there are beds down each side some have 
        // curtains pulled around them but others don’t. you start walking down the centre between the beds and stop when you hear a 
        // noise coming from behind the curtain.  You decide to look so slowly pull the curtain back. In bed in a person … they tell 
        // you that if you know whats good for you youll run 
}

function liftUpOption() {
    removeBtn()
    createNewBtn()

    gameParagraph.innerText = "You run through the cafeteria area and straight to the lift, and repeatedly press the button on the wall as if that will help it arrive quicker..";

   
    option1.innerText = "Continue"
    option2.classList.Add("Hidden")

    // You run back up the stairs and are back in the atrium building. You see a door that you had missed before with a sign above it saying labs,
    //  you go through and enter into a big room that’s set with different work stations. You find a pc and try to turn it on..
    // As your waiting for it to load you open the draw and find some items - an ID badge, another keycard and a vial of some liquid
    // on the pc you find a file  it has all you information explaining why your there.  As your looking at the screen the door opens and a young person comes in, they look 
    //  at you she says something you don’t understand , you say you don’t understand and she presses a button on her device so you can understand her. 
    //  She seems scared of you, your shocked because why would you be scared of them they’re the monsters. As shes talking shes looking at a yellow 
    //  button on the wall, you don’t know what it does but you don’t want her to press it *roll to see if she makes it or if you stop her

    // if you stop her 
        //if you do stop her you reach for something and pick up a heavy canister which you use to hit her over the head knocking her out – you get a 15 + delay on the time

    // If you dont stop her
        // if you don’t stop her an alarm goes off and you are chased for the next section

    // You see a door at the far end of the lab that you run to and go through, There is a staircase leading up or down.
}

function stairsUp() {
    // You run upstairs but it only leads to the roof, the guards chase you up there and corner you..
}   

function stairsDown() {
    // You go down a long way.. you end up in what appears to be an underground cargo area with a garage doors on one end
    // You run over if you picked up the keycard you can open the doors
        // You have escaped - if you also picked up the vial the text changes to say you can hand it over as evidence

    // if you didnt pick up the keycard it gives you the option to go back and get it otherwise you cant escape 
        // you run to head out but get caught by the guards
}