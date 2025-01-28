//Creating a movie object literal
const movie1 = {
  name: "Spiderman",
  price: 500,
  language: "English",
};

//calling of movie1 object literal
console.log("this is spiderman movie1 details callin;-", movie1);
console.log("this is movie1 price calling;-", movie1.price);

//Creating empty object then adding properties
const movie2 = {};
(movie2.name = "Singham Again"),
  (movie2.price = 300),
  (movie2.language = "Hindhi");

//calling empty then adding properties
console.log("this is singham movie2 details calling;-", movie2);
console.log("this is movie2 language calling;-", movie2.language);

//Creating object using square bracket notation
const movie3 = {};
movie3["name"] = "Pushpa";
movie3["price"] = 350;
movie3["language"] = "Telugu";

// calling object using square bracket notation
console.log("this is movie3 details calling;-", movie3);
console.log("this is movie3 name calling;-", movie3["name"]);
