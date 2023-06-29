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
   console.log(`The ${this.name}'s perimeter is ${this.sides * this.sideLength}`);
  } 


}
    


class Square extends Shape {
  
constructor(sideLength)
{
  super('square',4,sideLength);
}
  
 calcArea(){
  const area = (this.sideLength * this.sideLength);
  console.log(`The ${this.name}'s area is ${this.sideLength * this.sideLength} squared`);

}


}

const square = new Square(4);
square.calcPerimeter();
square.calcArea();




    