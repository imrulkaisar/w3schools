/* 
 * JavaScript Classes
 * ---------------------------
 * A class is type of function, but instead of using ""function"" keyword we use ""class"" keyword
 * The properties is assigned inside a constructor() method
 * You cannot call a static method on the object (mycar), but on the class (Car):
 * To create a class inheritance, use the ""extends"" keyword
 * Unlike the function, and other JavaScript decleartions, class declearations are not hoisted. That means that you must declear a class before you can use it. 
 * The syntax in classes must be written in "strict mode"
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


class Model extends Car {
    constructor(brand, mod){
        super(brand);        	// super() method refers to the parent class.
	this.model = mod	// By calling the super() method in the constructor method, we call the parent's constructor
    }				// method and get access to the parent's properties and methods 
}

  // Model class extends the class Car

///////////////////////////////////


/* 
 * Gettters and Setters
 * ---------------------------
 * It can be smart to use getters and setters for your properties, expecially if you want to do something special with the value before returning them, or before you set them.
 * To add getters and setters in the class, use the ""get"" and ""set"" keywords
 * If the getter is a method, you don't use parentheses when you want to get the property value. 
 *
 * */


class Car {
    constructor(brand){
        this.carName = brand;
    }

    get cnam() {                // the name of the getter/setter method cannot be the same as the name of the property
        return this.carName;
    }

    set cnam(x) {
        this.carName = x; 
    }
}


mycar = new Car("Toyota");
mycar.carName = "Valvo";    // setting new carName with setter
console.log(mycar.cnam);  // Valvo 
