// Creating an array of 5 colors using each method

// Creating array using array literal
const color1 = ["purple", "green", "black", "grey", "red"];

//Creating empty array, then add elements
const color2 = [];
color2[0] = ["yellow"];
color2[1] = ["white"];
color2[2] = ["orrange"];
color2[3] = ["silver"];
color2[4] = ["pink"];

//calling of array literal
console.log("this is array color1 calling", color1);

//calling of emty array then add elements
console.log("this is color2 calling", color2);
console.log("this is pink color calling", color2[4]);

//Creating an array of 5 numbers using each method

//Create array using array literal
const numbers1 = ["9", "19", "29", "39", "49"];

//calling of emty array then add elements
const numbers2 = [];
(numbers2[0] = ["59"]),
  (numbers2[1] = ["69"]),
  (numbers2[2] = ["79"]),
  (numbers2[3] = ["89"]),
  (numbers2[4] = ["99"]);

//calling of arry literal
console.log("numbers1 calling", numbers1);

//calling of emty array then add elements
console.log("numbers2 calling", numbers2);
console.log("this is 79 calling", numbers2[2]);
