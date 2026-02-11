var dogs={
    "name":"john",
    "legs":4,
    "tails":1,
    "friends":["everything"]
};

var cat={
    "name":"puttu",
    "legs":4,
    "tails":1,
    "bf":["anil","sunil","vanil"]
};

console.log(cat);
var catname=cat.name;
var dogname=dogs.name;
console.log(catname);//dot oprator
console.log(dogname);//got operator
var bfnames=cat["bf"];
console.log(bfnames);//bracket notation

dogs.name="kutta";//changing a value
console.log(dogs);

dogs["bark"]='woof';
console.log(dogs);

delete dogs.tails;
console.log(dogs);