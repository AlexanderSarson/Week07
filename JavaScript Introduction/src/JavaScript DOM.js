// 3)

function printListNames(array) {
  let listNames = array.map(name => (name = `<li>${name}</li>`));
  return `<ul>${listNames.join("")}</ul>`;
}
let names = ["Alexander", "Bo"];
//console.log(printListNames(names));

// 4)
var cars = [
  { id: 1, year: 1997, make: "Ford", model: "E350", price: 3000 },
  { id: 2, year: 1999, make: "Chevy", model: "Venture", price: 4900 },
  { id: 3, year: 2000, make: "Chevy", model: "Venture", price: 5000 },
  { id: 4, year: 1996, make: "Jeep", model: "Grand Cherokee", price: 4799 },
  { id: 5, year: 2005, make: "Volvo", model: "V70", price: 44799 }
];

let newerCar = cars.filter(car => car.year > 1999);
//console.log(newerCar);
let volvos = cars.filter(car => car.make == "Volvo");
//console.log(volvos);
let price = cars.filter(car => car.price < 5000);
//console.log(price);

// 4a)
function printSQL(array) {
  let newArr = array.map(
    car =>
      (car = `INSERT INTO cars (id,year,make,model,price) VALUES ( ${car.id}, ${
        car.year
      }, ${car.make},${car.model}, ${car.price});`)
  );
  return newArr.join("\n");
}
//console.log(printSQL(cars));

// Asynchronous Callbacks

// 1)
var msgPrinter = function(msg, delay) {
  setTimeout(function() {
    console.log(msg);
  }, delay);
};

/*
Order:
console.log("aaaaaaaaaa");
console.log("dddddddddd");
console.log("ffffffffff");
msgPrinter ("eeeeeeeeee",1000);
msgPrinter ("bbbbbbbbbb",2000);
*/
// 2)
/*
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");
*/

// this and constructor functions

// 1)
/*
function Person(name){
  this.name = name;
  var self = this;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+self.name);  //Explain this
  },2000);
}
*/

function Person(name) {
  this.name = name;
  console.log("Name: " + this.name);
  setTimeout(
    function() {
      console.log("Hi  " + this.name); //Explain this
    }.bind(this),
    2000
  );
}

//call it like this (do it, even if you know it’s silly ;-)
//Person("Kurt Wonnegut");  //This calls the function
//var p = new Person("Kurt Wonnegut");
//console.log("I'm global: " + name);  //Explain this

// 4)
/*
var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);
*/

// JavaScript Objects

// 1)

let person = {
  name: "Alexander",
  birthday: 1989,
  hobby: "fodbold",
  email: "xx@hotmail.com"
};

delete person.birthday;
person.mad = "pizza";
/*
for(prop in person){
  console.log(prop,person[prop]);
}
*/

// 2)
function Person2(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getDetails = function() {
    return `${this.firstName} ${this.lastName} ${this.age}`;
  };
}

let testPerson = new Person2("Alex", "Sars", 1989);
console.log(testPerson.getDetails());
