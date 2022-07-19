/* jshint esversion: 11 */
let alertContainer;
let alertParagraph;
let closeAlertBtn;
// Countdown Function to when guards know your missing
function timer() {

    let setTimer =  setInterval(function() {
        countDown--;
        console.log(`Alert in ${countDown}`)
        if (countDown === 0) {
            console.log("Time Out")
            clearInterval(setTimer) 
            if (audioMute === false) {
                    alert.play();
                    alert.volume = 0.5;
            }

            createElements()

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
                alert.pause();
                
                alertContainer.removeChild(alertParagraph);
                alertContainer.removeChild(closeAlertBtn);
                loadScreen.removeChild(alertContainer);

                gameParagraph.classList.remove("hidden");
                option1.classList.remove("hidden");
                option2.classList.remove("hidden");

                guardSearch();
            })
        }
    },1000)


}
// Countdown Function to see if guards find you
 function guardSearch() {
    // let guardTimer = Math.floor(Math.random() * 180000);
    let guardTimer = 4;

    let setGuardTimer =  setInterval(function() {
        guardTimer--;
        console.log(`Alert in ${guardTimer}`)
        if (guardTimer === 0) {
            console.log("Time Out")
            clearInterval(setGuardTimer) 

            // if (audioMute === false) {
            //         alert.play();
            //         alert.volume = 0.5;
            // }
                    
            createElements();

            alertParagraph.innerHTML = `Your blood turns to ace in your veins as you hear a voice shout out from behind you
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
                window.location.reload();
            })
        }
    },1000)


 }

 function createElements() {
    alertContainer = document.createElement("div");
    alertParagraph = document.createElement("p");
    closeAlertBtn = document.createElement("btn");

    alertContainer.setAttribute("id","game-section");
    alertParagraph.setAttribute("id","game-paragraph");
    alertParagraph.classList.add("game-paragraph-background")
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