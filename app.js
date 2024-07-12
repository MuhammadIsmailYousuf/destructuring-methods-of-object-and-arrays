// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Destructuring Assignment
  let { firstName, age } = person;
  
  // Display Data
  document.getElementById("demo").innerHTML =
  " Output => " +  firstName + " is " + age + " years old.";



//-----x-------x------x



  //.....Example 2;
  let data = {
    Name: "Faizan",
    lastName: "Kashif",
    Age: "20",
    Gender: "male"
  };

  //Destructuring Assignment
  let { Name, Age, Gender } = data;

  //Display Data
  document.getElementById('demo2').innerHTML =
  " Output => " + Name + " is " + Age + " years old " + " and " + " Gender " + " is " + Gender + ".";



//Object Destructuring complete;

//Array Destructuring.....
//Example 1;
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring
let [fruit1, fruit2] = fruits;

// Display Primitive Data
document.getElementById("demo3").innerHTML = " Output => " + fruit1 + ", " + fruit2;


//Example 2;
//Create an Array
let arr = ["Laptop", "System", "Monitor", "Keyboard", "Mouse"];

//Destructuring
let [array1 , array2 , array3] = arr;

//Display Data
document.getElementById('demo4').innerHTML = " Output => " + array1 + ", " + array2 + " , " + array3;
