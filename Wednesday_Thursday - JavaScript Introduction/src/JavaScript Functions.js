//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
  return n1 + n2;
}

//Function Expression
var sub = function(n1, n2) {
  return n1 - n2;
};

//Callback example
// 3)
var cb = function(n1, n2, callback) {
  try {
    if (typeof n1 != "number" || typeof n2 != "number") {
      throw new Error("Not a number");
    } else if (typeof callback != "function") {
      throw new Error("Not a function");
    }
    return (
      "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2)
    );
  } catch (error) {
    console.error(error);
  }
};

function mul(n1, n2) {
  return n1 * n2;
}

// 2)

//console.log( add(1,2) )     // What will this print?
//console.log( add )          // What will it print and what does add represent?
//console.log( add(1,2,3) ) ; // What will it print
//console.log( add(1) );	  // What will it print
//console.log( cb(3,3,add) ); // What will it print
//console.log( cb(4,3,sub) ); // What will it print
//console.log(cb(3,3,add())); // What will it print (and what was the problem)
//console.log(cb(3,"hh",add));// What will it print

// 4)

//console.log(cb(3, 3, mul));

// 5)
/*
console.log(
  cb(3, 3, function(n1, n2) {
    return n1 / n2;
  })
);
*/



//  Callbacks (with map, filter and forEach)


// 1)
let names = ["Lars", "Jan","Bo", "Peter", "Frederik"];

let shortNames = names.filter(name => name.length <= 3);
/*
for(let name of shortNames){
    console.log(`shortnames: ${name}`);
}
for(let name of names){
    console.log(`normal: ${name}`);
}
*/

// 2)

let upperNames = names.map(name => name.toUpperCase());
//console.log(upperNames) 

// 3)
