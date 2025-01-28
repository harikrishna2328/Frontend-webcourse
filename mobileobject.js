const mobile1 = {
  brand: "Oppo",
  price: 32000,
  color: "Grey",
};

console.log(mobile1);
console.log(mobile1.color);

const mobile2 = {};

(mobile2.brand = "Apple"),
  (mobile2.price = 1500000),
  (mobile2.color = "Whitecream");

console.log(mobile2);
console.log(mobile2.brand);

const mobile3 = {};
(mobile3["brand"] = "Samsung"),
  (mobile3["price"] = 95000),
  (mobile3["color"] = "Black");

console.log(mobile3);
console.log(mobile3["price"]);
