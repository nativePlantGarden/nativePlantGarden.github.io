let name = 'Olivia';
console.log(name);

//object literal that defines a 'person' object as having a name and age
let person = {
    name:'Olivia',
    age:29
}

//if we want to change the variables inside we can do dot notation
person.name="Tim";

//we can also do bracket notation for dynamic programming
let selection = 'name';
person[selection] = 'Julia';

//arrays are dynamic.  We can change the length like we do below.
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';

//this is an example of a function
function greet(name) {
    console.log("Hello " + name);
}

greet(person.name);

let dog = "puffball";
console.log(dog);

//create a secret key value pair in an object
const alice = {
  name: 'alice',
}
Object.defineProperty(alice, 'secret',{ enumerable: false,
value: 'alice in wonderland',})
//this line will NOT log alice's secret
console.log(obj);




function createStars() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 1000; i++) { // Increase the number of stars to 1000
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = '1px';
      star.style.height = '1px';
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      container.appendChild(star);
    }
  }
  createStars();


  const hasPaid = {
    'bob':true,
    'jane':false,
    'rick':true,
    'Uchen':true
  }
  //Object.keys(hasPaid)returns all keys where key/value pair is true
  //this then maps (does X for every key).  This returns an array with the 'key' being 'name' and the value being the names in the list pulled from Objects.keys(hasPaid)
  Object.keys(hasPaid).map(name => ({
    name
  }))
//logs all those names
  console.log(objs);
