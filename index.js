const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(newPizzaObj) {
  menu.push(newPizzaObj);
}

function placeOrder(pizzaName) {
  let choosenPizza = menu.find((newPizzaObj) => newPizzaObj.name === pizzaName);
  cashInRegister += choosenPizza.price;

  let newOrder = { pizza: choosenPizza, status: "ordered" };

  orderQueue.push(newOrder);

  return newOrder;
}
