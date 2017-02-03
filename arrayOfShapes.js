// require('./shapes.js')
var square = new ShapeMaker('square', 4, 'turquoise')
var pentagon = new ShapeMaker('pentagon', 5, 'green')
var octagon = new ShapeMaker('octagon', 8, 'ocre')
var circle = new ShapeMaker('circle', 1, 'purple')
var rectangle = new ShapeMaker ('rectangle', 4, 'black')
var teardrop = new ShapeMaker ('teardrop', 'n/a', 'scarlet')
var rhombus = new ShapeMaker ('rhombus', 4, 'olive')
var rightTriangle = new ShapeMaker ('Right Triangle', 3, 'slate')
var triangle = new ShapeMaker ('triangle', 3, 'peach')
var oval = new ShapeMaker ('oval', 1, 'gold')
var shapes = ["circle", "ellipses", "stadium", "arch", "annulus", "equilateral", "parallelogram", "pentagon", "octagon"];
var colors = ["red", "blue", "yellow", "orange", "green", "purple", "green"];
var sides = [1, 3, 5, 7, 9, 11];


var sillyShapes = [];

function makeSillyShapes(){

  for (var i = 0; i < 10; i++) {
    var randomColors = colors[Math.floor(Math.random()* colors.length)];
    var randomShapes = shapes[Math.floor(Math.random()* shapes.length)];
    var randomSides = sides[Math.floor(Math.random()* sides.length)];
    var randomSillyShape = new ShapeMaker(randomShapes, randomSides, randomColors);
    sillyShapes.push(randomSillyShape);
  }

    // Use your shape constructor function to build 10 random shapes.

    // Figure out how to grab a random item from the array, in order to get a shape, color, and sides
    // for the constructor

    //Dont forget to push your newly made shape into your sillyShapes array.
  }

makeSillyShapes()



function renderShapesToHTML() {
  // You will need to loop through the sillyShapes array
  // and append the HTML to the UL.
  sillyShapes.forEach(function (item) {
    $('#silly-shapes-list').append('<li>' + item.getInfo() + '</li>');
  });
}

renderShapesToHTML();
