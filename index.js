const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;

function addNewPizza(newPizzaObj) {
  menu.push(newPizzaObj);
}

function placeOrder(pizzaName) {
  let choosenPizza = menu.find((newPizzaObj) => newPizzaObj.name === pizzaName);
  cashInRegister += choosenPizza.price;

  let newOrder = { id: nextOrderId++, pizza: choosenPizza, status: "ordered" };

  orderQueue.push(newOrder);

  return newOrder;
}

function completeOrder(orderId) {
  let order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}
