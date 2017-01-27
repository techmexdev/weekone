var shapes = ["circle", "ellipses", "stadium", "arch", "annulus", "equilateral", "parallelogram", "pentagon", "octagon"];
var colors = ["red", "blue", "yellow", "orange", "green", "purple", "green"];
var sides = [1, 3, 5, 7, 9, 11];


var sillyShapes = [];

function makeSillyShapes(){

  for (var i = 0; i < 10; i++) {
    // Use your shape constructor function to build 10 random shapes.

    // Figure out how to grab a random item from the array, in order to get a shape, color, and sides
    // for the constructor

    //Dont forget to push your newly made shape into your sillyShapes array.
  }

  return sillyShapes
}

makeSillyShapes()



function renderShapesToHTML() {
  // You will need to loop through the sillyShapes array
  // and append the HTML to the UL.
}

renderShapesToHTML();
