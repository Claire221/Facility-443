# Testing

"Click to return back to the [README.md](README.md)"

## Browser Compatibility

I tested my game against the top 3 web browsers - Google chrome, Firefox and Microsoft Edge. I started by testing that the game loaded as expected, that all the images and styles work displaying correctly. I then went into the devtools and changed the responsive dimensions to test how the game looked for different screen sizes. 

| Browser        | Screen Size | Image                                                       |
| -------------- | ----------- | ----------------------------------------------------------- |
| Chrome         | Desktop     |![Chrome Desktop](/documentation/testing/chrome-desktop.jpg) |
| Firefox        | Desktop     |![Firefox Desktop](/documentation/testing/chrome-desktop.jpg)|
| Microsoft Edge | Desktop     ||
| -------------- | ----------- | ----------------------------------------------------------- |
| Chrome         | Ipad        |![Chrome Ipad](/documentation/testing/chrome-ipad.jpg)       |
| Firefox        | Ipad        |![Firefox Ipad](/documentation/testing/firefox-ipad.jpg)     |
| Microsoft Edge | Ipad        |![Microsoft Edge Ipad](/documentation/testing/edge-ipad.jpg) |
| -------------- | ----------- | ----------------------------------------------------------- |
| Chrome         | Mobile      |![Chrome Ipad](/documentation/testing/chrome-ipad.jpg)       |
| Firefox        | Mobile      |![Firefox Ipad](/documentation/testing/firefox-ipad.jpg)     |
| Microsoft Edge | Mobile      |![Microsoft Edge Ipad](/documentation/testing/edge-ipad.jpg) |



## Code Validation

### HTML testing

Once I had finished my game I ran my code through a HTML validator to ensure that it was correct.
![HTML Validator ](/documentation/testing/html_validator.jpg)

### CSS testing

Once I had finished my game I ran my CSS code through a CSS validator to ensure that it was correct. When I first ran my code through the validator my code failed because I had an error with one of my positioning styles.

![HTML Validator ](/documentation/testing/css_validator_error.jpg)

I then fixed the issue and re ran my code through the validator to make sure that it was all correct.

![HTML Validator ](/documentation/testing/css_validator.jpg)

### JavaScript testing

Once I had finished my game I ran each of my JavaScript script files through a JavaScript validator to ensure that it was correct.

#### Scene One

![Scene one JavaScript Validator](/documentation/testing/scene_one_validator.jpg)

#### Scene Two

![Scene two JavaScript Validator](/documentation/testing/scene_two_validator.jpg)

#### Scene Three

![Scene three JavaScript Validator](/documentation/testing/scene_three_validator.jpg)

#### Stage Functions



## User Story Testing
- As a user I want the UI to be simple and intuitive, so I don’t need instructions on how to play
![Chrome Desktop](/documentation/testing/game_pages.jpg)

- As a user I want to be scared or creeped out
![Chrome Desktop](/documentation/testing/load_screen.jpg)

- As a user I want the storyline to be easy to follow and understand
![Chrome Desktop](/documentation/testing/game_paragraph.jpg)

- As a user I want the decisions I can make to be easily understandable
![Chrome Desktop](/documentation/testing/game_buttons.jpg)


## Unfixed Bugs
list out any unfinished bugs you might have, where applicable... if none, don't just put "I have no bugs"... put something like: "There are no remaining bugs that I am aware of."

## Mechanics Testing

Throughout the game I have various mechanisms in place such as an inventory system and also areas where the player cant access unless they have certain items so I wanted to check that they were all working correctly.

### Inventory

#### Wardrobe Items

During the game the player is given the option to search a wardrobe and pick up some items that might help them later in the game.

First I wanted to check that the inventory loaded as expected.

![Wardrobe Items](/documentation/testing/wardrobe_items.jpg)

I then tested that if the player clicks on an item the item gets highlighted and the paragraph text changes to notify the player that the item has been added to their inventory.

![Wardrobe Selected Items](/documentation/testing/selected_item.jpg)

Finally I tested that if the player clicks on the same item again the highlight is removed and the paragraph updates to notify the player that the item has been removed from their inventory. 

![Wardrobe De-selected Items](/documentation/testing/deselect_item.jpg)


#### Cupboard Items

The player also gets the chance to search a cupboard to items so I checked that this function was working properly. 

To start with I checked that the cupboard items loaded correctly

![Cupboard Items](/documentation/testing/cupboard_items.jpg)

I then checked that they get highlighted when the player clicks on them and the paragraph texts updates to notify the player that the item was added to the inventory

![Cupboard Selected Items](/documentation/testing/cupboard_added.jpg)

Lastly I checked that if they player clicks on the same item twice it removes it from their inventory, updating the text paragraph and removing the highlight.

![Cupboard De-selected Items](/documentation/testing/cupboard_removed.jpg)

#### Computer Draw Items

The player also gets the opportunity to search the draws in one of the offices so I wanted to check that the function was working corectly.

To start with I checked that the draw items loaded correctly and the text updated to notify the player what was inside.

![Draw Items](/documentation/testing/draws_items.jpg)

I then made sure that if a play clicks on an an item a highlight is added and the paragraph text updates to say its been added to the players inventory.

![Draw Selected Items](/documentation/testing/draws_added.jpg)

Finally I made sure that if the player reclicks on an item the highligh its removed and the text updated to say that the item has been removed from their inventory. 

![Draw De-selected Items](/documentation/testing/draws_removed.jpg)

### Inventory 

In the game there is a basic inventory system which the player can access by press the i key

To test that it was working first I wanted to test that if the player had an empty inventory and pressed the i key that the inventory list would be empty.

![Empty Inventory](/documentation/testing/empty_inventory.jpg)

I then check that if something was added to the inventory the inventory list was updated

![Add to Inventory](/documentation/testing/inventory_add.jpg)

Finally I checked that if the player removed an item from their inventory it was removed from the inventory list and was no longer visible.

![Remove from Inventory](/documentation/testing/inventory_remove.jpg)

### Key Cards

During the game the player encounters a locked door, if they have a keycard they can open the door but if they dont have it then they have to continue the story down a different path. I wanted to check that this feature was working corectly.

I began by testing that if the player got to the door and didnt have the key they wouldnt be able to open it.

![No door card](/documentation/testing/no_keycard.jpg)

I then checked that if the player has the key in their inventory and they go to the door it would open and they could go through.

![Player has door card](/documentation/testing/has_keypass.jpg)

### Lab Coat

At one point in the game the player enters a room and as they enter an enemy also enters from the oposit end and glances over to the player. If the player has a labcoat in their inventory then the enemy ignores the player and assumes they are both on the same side. If the player doesnt have the labcoat the enemy sees that they are an escaped subejct and captures them, returning them to their room and ending the game. 

I started by checking that if the player doesnt have the lab coat in their inventory the enemy captures them, returning them to their room and ending the game.

![Player doesnt have the labcoat](/documentation/testing/no_labcoat_paragraph.jpg)


I then checked that if the player had the lab coat in their inventory the enemy would ignore them and they are then free to continue the game.

![Player has the labcoat](/documentation/testing/labcoat_paragraph.jpg)

### atomated jest testing

### screenshopt of jest terminal

## screenshots of tests and description

