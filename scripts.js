// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
//This array contains all the PacMan movement images
const pacArray = [
  ['PacMan1.png', 'PacMan2.png'],
  ['PacMan3.png', 'PacMan4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
  setTimeout(Run, 200);
}
// TODO: Add a Javascript setInterval() method that will call the Run() function above every 200 milliseconds. Note: in the video, Dr. Williams uses the setTimeout() method, but here we are going to use a slightly different
// method called setInterval(), so that you can have practice using this method.
// Inside of the Run() function you will also have to add an extra argument "pageWidth", which is declared on line 4 when you call the checkPageBounds() function below. 

// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  //
  // TODO: Complete this to reverse direction upon hitting screen edge
  //
  if(imgWidth + pos >= pageWidth && direction == 0){
      direction = 1;
  }

  if(pos === 0 && direction == 1){
      direction = 0;
  }
  return direction;
}

// //Array of images
// //The first element represents the directions left or right
// //The second element represents the focus mouth opened or mouth closed
// var pos = 0;
// const pacArray = [
//     ['PacMan1.png', 'PacMan2.png'],
//     ['PacMan3.png', 'PacMan4.png']
// ];
// var direction = 0;
// var focus = 0;

// function Run() {
//     let img = document.getElementById("PacMan");
//     let imgWidth = img.width
//     focus = (focus + 1) % 2;
//     direction = checkPageBounds(direction, imgWidth);
//     img.src = pacArray[direction][focus];
//     if (direction) {
//         pos -= 20;
//         img.style.left = pos + "px";
//     } else {
//         pos += 20;
//         img.style.left = pos + 'px';
//     }
//     // Use setTimeout to call Run every 200 millesecs
//     setTimeout(Run, 200);
// }

// function checkPageBounds(direction, imgWidth) {
//     // Complete this to reverse direction on hitting page bounds 
//     let maxWidth = window.innerWidth;
//     let img = document.getElementById("PacMan");
//     if(img.style.left === ''){
//         direction === 0;
//     }else{
//         let imgPos = img.style.left.slice(0,imge.style.left.length - 2);
//         if((imgPos + imgWidth) >= maxWidth){
//             direction === 1;
//         }
//     }
//     return direction;
// }