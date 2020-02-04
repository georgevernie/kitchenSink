//Defines a varible a to a string of characters and uses let to prevent usage of that var name elsewhere.
let name = "Jon"; // Instruction 3
//Defines a const which cannot be changed after the program starts.
const numStates = 50; // Instruction 4
//Declares a variable which adds two numbers.
let add = 5 + 4; // Instruction 5
//Declares an array of veg as per instruction 9
let myFavVeg =["Beans","Tomatoes","Lettuce","Butternut Squash","Avocado"];
for(let v = 0; v < myFavVeg.length; v++){
    console.log(myFavVeg[v]);
}
// Calls function alert Hello World as per instruction 7
sayHello();
//Function calls to checkAge (Name, Age) as per instruction 8
checkAge("Charles",21);
checkAge("Abby",27);
checkAge("James",18);
checkAge("John",17);
//Follows instruction 10
let person = [
    {
        name:"Leo",
        age: 14
    },
    {
        name:"Marvin",
        age: 25
    },
    {
        name:"Henry",
        age: 31
    },
    {
        name:"Betsy",
        age: 43
    },
    {
        name:"Sarah",
        age: 19
    },
];
// Checks each persons age as per instruction 10
for(let x = 0; x < person.length; x++){
    checkAge(person[x].name, person[x].age)
}
//Completes instruction 11
let result = getLength('Hello World');

if(result % 2 == 0){
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
//Declares a sayHello function to call later.
function sayHello(){
    alert("Hello World!");
}
//checkAge is used multiple times throughout the program to check the age of inputs.
function checkAge(name, age){
    if(age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
//Gets the length of an input string
function getLength(anyWord){
    return anyWord.length;
}
//Each comment helps complete instruction 6. 