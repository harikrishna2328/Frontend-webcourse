//testing primitive datatypes using typeof

//1. String
let game = "cricket";

console.log("typeof game;-", typeof game);

//2. Number
let password = 1234567890;

console.log("typeof password;-", typeof password);

//3. Boolean
let areustudent = true;

console.log("typeof areustudent;-", typeof areustudent);

//4. Null
let girlfriend = null;

//console.log("value of girlfriend;-", value of girlfriend)

console.log("typeof girlfriend;-", typeof girlfriend);

//5. Undefined
let futurejob;

console.log("typeof futurejob;-", typeof futurejob);

//Testing non-primitives datatypes using typeof

//1.Arrays
const speakerbrands = ["jbl", "boat", "philips", "sony", "bose"];

console.log("speaker brands;-", speakerbrands);
console.log("number of speakerbrands;-", speakerbrands.length);

//2. Object
const favmovie = {
  title: "sita ramam",
  year: 2022,
  director: "hanu raghavapudi",
  hero: "dulquer salmaan",
  price: {
    normal: 300,
    premium: 500,
  },
  showtimings: ["6:00 Am", "10:00 AM", "2:00 PM", "6:00 PM"],
};

console.log("favmovie detailes;-", favmovie);
