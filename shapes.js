function ShapeMaker(name, sides, color){
  this.name = name;
  this.sides = sides;
  this.color = color;
}

ShapeMaker.prototype.getInfo = function(){
  return('I am a ' + this.color + ' ' + this.name + ' with ' + this.sides + ' sides!')

};

ShapeMaker.prototype.updateColor = function(color){
  this.color = color
  return({name: this.name, sides: this.sides, color: this.color});

};


// module.exports = ShapeMaker
