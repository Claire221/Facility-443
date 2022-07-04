
function goLeft() {
    removeBtn()
    createNewBtn()

    loadScreen.style.backgroundImage="url(assets/img/atrium.jpg)";
    console.log("go left")

    createNewBtn()
    if (option1) {
        removeBtn
    }

    
    gameParagraph.innerText = "You go left.. it leads to an atrium style building.. is a person if your wearing a lab coat then they ignore you else they chase you"; 

    setTimeout(function(){
        if (!labcoat) {
            chaseFunction
        } else {
            gameParagraph.innerText = "Do you follow lab coat?..."
        }
    }, 2000)


    option1.innerText = "Follow"
    option2.innerText = "dont follow"

    option1.addEventListener("click", followLabCoat, {once : true});
    option2.addEventListener("click", dontfollowLabCoat, {once : true});
}

function chaseFunction() {
    // someone shouts for you to stop, an alarm goes off and your chased and caught - game over
}

function followLabCoat(){
// -	You sneak behind them and follow them they lead you down a staircase you otherwise would have missed, it goes on for a while. At the bottom of the stairs is a set of double doors, you follow them through and it leads you into a viewing area with a glass wall at the front which looks into what looks like an operating theatre. The person walks through and goes through a door to the left of the glass wall.  You stay and watch as they bring out someone and strap them to the bed..
}



function dontfollowLabCoat(){
    // you walk into the atrium there is a lift and a door with key card acesses 

    // try the door - if you have keycard you can get through - keyCardDoor()

    // go in the lift - liftOption
}

function keyCardDoor() {

}

function liftDownOption() {
    // all the floors need a special key but the basement 

    // if player picked up key they can insert it, before they pick a number the lift starts to move - specialKeyOption()

    // else player can go to the basement - basementOption()
}

function specialKeyOption() {

}

function basementOption() {
    // you step out into a canteen looking room - a sign says ward one way and training rooms the other

    // Training rooms - liftUpOption()
        // you enter a long corridor that hasrooms on either side, there are windows looing into them. 
        // The first few are empty but you hear noise from further down so go and investigate. When you get there 
        // it’s a small room with, theres a person in a labcoat sat at a computer with their back to you, you cant 
        // see what they are typing. They are watching a young woman who is stood in the center of the room her head 
        // is down so you cant see her face. She has wires connected to her head and is staring at a can that has been 
        // placed on a table infront of her.  All of a sudden the can flys across the room, she looks up at the person 
        // in the labcoat and her eyes are glowing blue. Again, don’t take so long this time he says to her. Her eyes 
        // then flick to you and she looks shocked. She then looks back at the labcoat person before quickly looking 
        // back at you and mouthing at you to run, you don’t need telling twice and run back to the lift 

    // Ward - liftUpOption()
        // You follow the corridor and enter a room that’s set up like a hospital ward, there are beds down each side some have 
        // curtains pulled around them but others don’t. you start walking down the centre between the beds and stop when you hear a 
        // noise coming from behind the curtain.  You decide to look so slowly pull the curtain back. In bed in a person … they tell 
        // you that if you know whats good for you youll run 
}

function liftUpOption() {
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