//Creating an array of 3 student objects

const students = [
  {
    name: "sai pallavi",
    age: 23,
    grade: "Topper",
  },

  {
    name: "suresh kumar",
    age: 22,
    grade: "avarage",
  },

  {
    name: "akshay",
    age: 24,
    grade: "failure",
  },
];

//calling of array of 3 student objects
console.log("calling of students details;-", students);
console.log("calling of 1st student name;-", students[0].name);
console.log("calling of 2nd student grade;-", students[1].grade);
console.log(
  "calling of 3rd student age & grade;-",
  students[2].age,
  students[2].grade
);

//Creating an array of 3 mobile objects
const mobiles = [
  {
    brand: "apple",
    price: 145000,
    color: "natural titanium",
  },
  {
    brand: "samsung",
    price: 99000,
    color: "titanium violet",
  },
  {
    brand: "one plus",
    price: 62000,
    color: "glacial white ",
  },
];

//calling an array of 3 mobile objects
console.log("calling of mobile details;-", mobiles);
console.log("calling of 1st index brand;-", mobiles[0].brand);
console.log(
  "calling of 2nd index brand & price;-",
  mobiles[1].brand,
  mobiles[1].price
);
console.log(
  "calling of 3rd index brand & color;-",
  mobiles[2].brand,
  mobiles[2].color
);
