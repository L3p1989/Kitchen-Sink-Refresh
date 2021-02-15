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