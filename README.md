# Simple Pac Man Exercise - Full Stack with MERN MIT/xPro

## Description

This coding exercise tasks the student to complete a giving code. The expected result
is to show a Pac Man moving from left to right, reversing when it hits the edges of
the screen, and while doing that opening and closing the mouth. 

The code has a series of instructions in **scripts.js** which guide the student
through the exercise. The tasks to complete are two: Complete the run function, and 
create the checkPageBounds functions.

## Run Function

The run function allows the image element to move accross the screen, while 
oscilating through an image array, which contains two arrays inside, one for the 
focus, and the ther one for the direction. 

The run function gets the element image, and sets the image width, calculates the
function while limiting its result between 0 and 1, due to the length of the array.

Then it calls the unction checkPageBounds, by passing the initial direction (0), 
the image width, the current position (pos), and the pageWidth. Then we get the image 
source through the array of images by passing the direction we want the image to be on
and the focus of the image.

We take into account the direction of the image to check if the Pac Man is still
moving forward, if this is true, we add 20 pixels to its current position, and will move the pacman 20 pixels to the right. Otherwise, we subtract 20 pixels to the current position and the pacman moves to the left. 

Finally, we use the setTimeout to call the **Run** function inside itselt, every
200ms, this will create a looping sense, since the function is calling itself 
indefinitely.

## checkPageBounds Function

This function needs the direction, imageWidth, pos, and pageWidth to work.
* direction: the current direction the image is moving to (0 or 1).
* imageWidth: the width of the image in integer
* pos: the current positon of the image in the document.
* pageWidth: the window inner width

Essentially this function will change the direction of the Pac Man if it hits one of
the edges.

If the imageWidth + the pos is greater than or equal to the pageWidth and the Pac Man
is moving forward (direction = 0), then we change the direction to 1, to reverse it.

If the position is equals to the initial position (0), and we are moving backwards
(direction = 1), then we change the direction to 0, to reverse it.

Finally we return this new direction.

### Link to the Pac Man git Page: https://anthgrim.github.io/SimplePacman/starter01.html

#### Note: starter01.html needs to be added at the end of the link in order to work