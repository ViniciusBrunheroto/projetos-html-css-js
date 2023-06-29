class Shape {
// only models shapes for which all sides are the same length
  name;
  sides;
  sideLength;
  
  constructor(name,sides,sideLength){
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  }

  calcPerimeter() {
   const perim = (this.sides * this.sideLength);
   console.log('The perimeter is '+ perim);
  }

}

square = new Shape('square',4,5);
square.calcPerimeter();

triangle = new Shape('triangle',3,3);
triangle.calcPerimeter();

    