
# Facility 443

## Site Overview
    
Facility 443 is a fully immersive choose your own adventure horror game. 
You wake up in a room you don’t recognize daze and confused and its your choices that will determine if you get out alive or not. While you explore the environment you can pick up items that will help you determine what’s going on and help you break out of the facility. 
Do you focus on getting answers and figuring out what’s going on or do you get out as fast as possible? With danger behind every corner, footsteps chasing you and a menacing voice counting down to an event that you’re not sure you want to stick around to see one wrong decision could end it all. 

    
![Responsive](/documentation/testing/responsive.jpg)

Live site [Live Site](https://claire221.github.io/Facility-443/).


## UX

For the design of the game I wanted it to stick to the horror theme of the game, I wanted each state of the game to have an image representing the setting that the story is describing so that the player can fully immerse themselves in the experience and picture themselves in the scene. I want the images to have lots of dark patches such as a partially open doorway on a dark corridor to give the feeling that anything could come from any direction at any time. 
For the text and buttons Im keeping them simple so they don’t distract from the story imagery. 

### User Stories
 
- As a user I want a game that is easy to pick up and play
- As a user I want the UI to be simple and intuitive, so I don’t need instructions on how to play
- As a user I want to be scared or creeped out
- As a user I want the storyline to be easy to follow and understand
- As a user I want the decisions I can make to be easily understandable


### Colour Scheme

 Because the game is a horror game I wanted to stick to that theme for the colour scheme, so use a lot of dark colours. For the text I want to keep the colours simple so they don’t distract from the imagery on the screen. For the story text I used a white colour so it stands out from the background and is easy to read and for the buttons I used the same blue colour that’s in the loading screen. 

 ![Color Scheme](/documentation/testing/color_pallete.jpg)


### Typography
    
For the Typography I wanted to play on the facility side of the game, so I focused on finding something with clean lines that looked clinical. 

For the landing page titles I used a thick bold font to make them stand out on the page.

![Title Fonts](/documentation/testing/title_fonts.jpg)


For the rest of the text throughout the game I went with a light weight simple font. I wanted something that was easy to read and wouldnt be too distracting from the story.
![TExt Fonts](/documentation/testing/text_fonts.jpg)

### Wireframes

My first step for this project was to sketch out a basic plan for what I wanted the game screen to look like. I decided to use Balsamiq to create some rough wireframes so that I could refer back to them throughout the design process.

#### Load Screen Wireframes

![Load page wireframes](/documentation/wireframes/loadScreen_Wireframe.jpg)

#### Game Screen Wireframes

![Load page wireframes](/documentation/wireframes/gameScreen_Wireframe.jpg)

## Features

The aim of this project was to make a fully immersive choose your own adventure game. I wanted to incorporate both visual and audio elements to help bring the story to life and make the player feel like they are living through the story.

### Game Loading Screen

For the landing page I wanted to keep the design simple because I wanted the story of the game to be a mystery. For the background I used a dimly lit hallway with open doors leading into dark rooms, I wanted to give the impression that the player doesnt know whats awaiting around each corner. 

![Game Loading Screen](/documentation/testing/load_screen.jpg)

### Game Pages

For the game pages I wanted the focus to be on the story so I kept them simple and minimal. Each one has a background that reflects the environment that the storyline is portraying.

![Game Pages](/documentation/testing/game_pages.jpg)

For the storyline text I enclosed it into a container which a semi transparent background so that you could still see the image in the background but you could also read the text easily. 

![Game Paragraph](/documentation/testing/game_paragraph.jpg)

For the options button on the page I wanted to encorporate the blue colour that is used throughout the story and also on the loading screen background. To do this I added a thin border to each button and also styled the text in the same colour. 
For the hover state I changed the background colour from black to a semi transparent version of the game theme colour. 

![Game Buttons](/documentation/testing/game_buttons.jpg)

When the player gets the option to search different areas I wanted a screen to pop up with the options. For the design I used a black box with the items inside, I used a dark backgrounds so that the inventory items stood out. 

![Inventory Items](/documentation/testing/items_image.jpg)

### Interactive Features

#### Sound Toggle

I wanted to add sound effects and background music to my game to make it more immersive but I know that not everyone enjoys playing games with sound so I added a sound toggle feature that allows the player to decide if they would like to play with sound or not. If the player doesnt want to play with sound all they have to do it press the sound icon on the game start screen to turn it off.

![Sound toggle on](/documentation/testing/sound_toggle.jpg)
![Sound toggle off](/documentation/testing/sound_toggle_off.jpg)

#### Guard Timer

As part of the gameplay I decided to add a feature where at the start of the game a random time is chosen and starts counting down. Once it reaches zero a pop up comes up warning the player that the guards have realized they have escaped and have started looking for them. Another random time is generated which starts another count down, once that timer reaches zero the player gets a pop up telling them that the guards have found them and its game over.

![Guard Alert](/documentation/testing/guard_alert.jpg)

#### Inventory

Throughout the game there are various areas which players can search for items that might help them as they progress through the game. For each area I created a div that will show the different items that they can pick up.

Wardrobe item options

![Wardrobe item](/documentation/testing/inventory_options.jpg)

Cupboard item options

![Cupboard item](/documentation/testing/cupboard_inventory.jpg)

Lab office item options

![Lab item](/documentation/testing/labs_inventory.jpg)

When the player selects an item the item gets a border around so that the player knows its been selected, the text paragraph then changes to say that the item has been added to the players inventory. 

![Inventory Select](/documentation/testing/selected_item.jpg)

If the player clicks on the same item again the border will dissapear and the text paragrah will say that the item has been removed from the players inventory.

![Inventory Select](/documentation/testing/deselect_item.jpg)


If the player presses i at any time then a list will pop up showing them what they currently have in their inventory. 

![Inventory List](/documentation/testing/inventory_list.jpg)

#### Lab Coat

I added a mechanic where when the player enters one of the rooms there is a enemy in the same room, if the player picked up a labcoat prior to entering the room then the enemy ignores them and assumes that they are on the same side but if the player didnt pick up the labocat then the enemy realises that they are an escaped subject and catches them, returning them to their room and ending the game. 

If you have the labcoat.

![Labcoat Text](/documentation/testing/labcoat_paragraph.jpg)


If you dont have the labcoat.

![No Labcoat Text](/documentation/testing/no_labcoat_paragraph.jpg)

#### Key Cards

Another mechanic I added was that the player has an option to follow someone through a door but the door is locked and they are only able to get through if they picked up a keycard which they can use to unlock the door. 

If you have the key card.

![Labcoat Text](/documentation/testing/has_keypass.jpg)


If you dont have the key card.

![No Labcoat Text](/documentation/testing/no_keycard.jpg)


#### Screen Sizing


### Features Left to Implement

I would like to add a feature where players could design their character at the beginning of the game. They would be able to chose their gender, basic appearance ect which would then change some of the narrative in the game to reflect their character. Currently I have kept narrative gender neutral to try and reflect all players so the game uses gender neutral pronouns and descriptions, But this would change depending on how the player created their character.
Also when the character is looking through the PC at the documentation relating to them with their information on the information would then change to describe the character that they have created.
I would also like to add a play mode where you can choose to play as either the person trying to escape from the facility or the guard trying to track them down. For the story I wanted to portray that both characters feel like they are the good guy but the other character sees them as the villain so I think that being able to play as either side would give you a look into why that particular character sees themselves as the good guy and the opposing character the villain. 


## Technologies Used

Throughout the project I used a variety of technologies.

- I used HTML and CSS to create and style the website.
- I used Javascript to create the interactive elements of the website
- I used github to create a repository for my project.[Github Website](https://github.com/)
- I used gitpod as the development environment.[Gitpod Website](https://gitpod.io/)
- I used github pages to host the website [Github Pages Website](https://github.com/)
- I used Balsamiq to design my wireframes [Balsamiq Website](https://balsamiq.com/)
- I used photoshop to edit some of my images [Photoshop Website](https://www.adobe.com/uk/products/photoshop.html)
- I used Jest to conduct my testing  [Jest Website](https://jestjs.io/)

## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 
 - In the [GitHub repository](https://claire221.github.io/Facility-443/), navigate to the Settings tab 
 - From the source section drop-down menu, select the **Main** Branch, then click "Save".
 - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://github.com/Claire221/Facility-443)

### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://claire221.github.io/Facility-443.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://claire221.github.io/Facility-443/)


### Content

For the glitch effect on the game landing page I followed a youtube video that can be found [Here](https://www.youtube.com/watch?v=CtmHKGX754s)

### Media

Throughout the game I used various different background images.

- [Landing Page Background](https://www.oneyoufeed.net/dark-hallways/)
- [Cupboard Background](https://free3d.com/3d-model/horror-lab-2547.html)
- [Lab Coat](https://www.turbosquid.com/3d-models/3d-lab-coat-1808406)
- [Hangar Background](https://www.deviantart.com/axeman3d/art/Vehicle-Hangar-300754670)
- [Lab Background](https://americasfrontlinenews.com/post/are-randomized-controlled-trials-really-the-gold-standard)
- [Lift Background](https://www.regenbogen.de/nachrichten/regional/baden-pfalz/20180725/hausmeister-verpruegelt)
- [Padlock](https://shopsonline.cheapsales2022.ru/category?name=3d%20lock)
- [Protien Bar](https://www.turbosquid.com/Search/3D-Models/protein)
- [Viewing Area Background](https://choice.npr.org/index.html?origin=https://www.npr.org/transcripts/522783564)
- [Ward Background](https://www.irishtimes.com/news/health/first-death-from-coronavirus-recorded-in-northern-ireland-1.4206780)
- [Atrium Page Background](https://www.nfpa.org/-/media/Images/Blog-Images/Blog-Post-Attachments/NFPA-Today/Atrium.ashx?h=400&w=800&la=en&hash=D209DBDBD58742A3FAEBE382605DF342)
- [Corridor Page Background](https://www.turbosquid.com/pl/3d-models/hallway-doors-3d-model/918331)

