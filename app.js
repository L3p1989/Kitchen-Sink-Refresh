// assigns myName a string of L3p
var myName = "L3p";
// logs myName
console.log(myName);
// assigns const allStates a numeric value of 50
const allStates = 50;
// logs allStates
console.log(allStates);
// assigns x numeric value of 5
let x = 5;
// assigns y numeric value of 4
let y = 4;
// assigns sum the value of x + y
var sum = x + y;
// logs sum
console.log(sum);
// creates function sayHello() that shows an alert that says "Hello World!"
function sayHello() {alert("Hello World!")};
// calls sayHello()
sayHello();
// creates function checkAge that alerts, if age is less than 21, string stating not able to view page
function checkAge(name, age) {if (age < 21) {alert(`"Sorry ${name}, you aren't old enough to view this page!"`)}}
// call checkAge multiple times with different values
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
// Array of Vegetables
var veggies = ["Brocoli", "Lettuce", "Carrots", "Potatoes"];
// Loop through veggies array
for (i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
};
// Pet Object
var pet = {name: "Saoirse", breed: "Siberian Husky"};
// log pet object in console
console.log(pet);
// array of 5 objects
let peoples = [person1 = {name: "Charles", age: 21}, person2 = {name: "Abby", age: 27}, person3 = {name: "James", age: 18}, person4 = {name: "John", age: 17}, person5 = {name: "L3p", age: 31}];
// checkAge for peoples
for (i = 0; i < peoples.length; i++) {
    checkAge(peoples[i].name, peoples[i].age);
};
// creates function getLength, that will return the number of letters in a string. If even spits out log with even message. If odd spits out odd message
function getLength(str) {
    var n = str.length
    if (n % 2 === 0) {
        console.log('The world is nice and even!')
    } else {console.log( 'The world is an odd place!')}
};
