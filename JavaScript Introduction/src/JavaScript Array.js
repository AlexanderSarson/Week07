// a)

let boys = ["Peter", "lars", "Ole"];
let girls = ["Janne", "hanne", "Sanne"];

// b)
let all = boys.concat(girls);

//console.log(all);

// c)
let comma = all.join();
//console.log(comma);

let hyphen = all.join("-");
//console.log(hyphen);

// d)

all.push("Lone", "Gitte");
//console.log(all);

// e)
all.unshift("Hans", "Kurt");
//console.log(all);

// f)

all.shift();
//console.log(all);

// g)
all.pop();
//console.log(all);

// h)

all.splice(3, 2);
//console.log(all);

// i)
all.reverse();
//console.log(all);

// j)
all.sort();
//console.log(all);

all.sort(function(a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});

//console.log(all);

// l)
let map = all.map(name => name.toUpperCase());
console.log(map);

// m)

let filter = all.filter(word => word.charAt(0) == "L" || word.charAt(0) == "I");

console.log(filter);
