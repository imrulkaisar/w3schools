/* 
 * JavaScript Classes
 * ---------------------------
 * A class is type of function, but instead of using ""function"" keyword we use ""class"" keyword
 * The properties is assigned inside a constructor() method
 * You cannot call a static method on the object (mycar), but on the class (Car):
 * */



class Car {
    constructor(brand){
        this.carName = brand;
    }
    
    present() {
	return "I have a " + this.carName;
    }
}
myCar = new Car("Toyota");
console.log( myCar.present() );

///////////////////////////////////

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  mycar = new Car("Ford");
  
  //Call 'hello()' on the class Car:
  document.getElementById("demo").innerHTML = Car.hello();
  
  //and NOT on the 'mycar' object:
  //document.getElementById("demo").innerHTML = mycar.hello();
  //this would raise an error.

//////////////////////////////




