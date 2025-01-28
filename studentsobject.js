const student1 = {
  name: "Ayesha",
  age: 21,
  grade: "A",
};
console.log(student1.name);

const student2 = {};
(student2.name = "Richard"), (student2.age = 23), (student2.grade = "B");

console.log(student2);
console.log(student2.age);

const student3 = {};

(student3["name"] = "Ravi kumar"),
  (student3["age"] = 24),
  (student3["grade"] = "D"),
  console.log(student3);
console.log(student3["name"]);
