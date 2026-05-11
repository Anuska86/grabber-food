type Pizza = {
  id: number;
  name: string;
  price: number;
};

let cashInRegister = 100;
let nextPizzaId = 1;
let nextOrderId = 1;

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { id: nextOrderId++, name: "Margherita", price: 8 },
  { id: nextOrderId++, name: "Pepperoni", price: 10 },
  { id: nextOrderId++, name: "Hawaiian", price: 10 },
  { id: nextOrderId++, name: "Veggie", price: 9 },
];

const orderHistory: Order[] = [];

function addNewPizza(newPizzaObj: Pizza): void {
  newPizzaObj.id = nextOrderId++;

  menu.push(newPizzaObj);
}

function placeOrder(pizzaName: string): Order | undefined {
  let choosenPizza = menu.find((newPizzaObj) => newPizzaObj.name === pizzaName);

  if (!choosenPizza) {
    console.error(`$(pizzaName) does not exist in the menu`);
    return;
  }

  cashInRegister += choosenPizza.price;

  let newOrder: Order = {
    id: nextOrderId++,
    pizza: choosenPizza,
    status: "ordered",
  };

  orderHistory.push(newOrder);

  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  let order = orderHistory.find((order) => order.id === orderId);

  if (!order) {
    console.error(`${orderId} was not found in the orderHistory`);
    return;
  }

  order.status = "completed";
  return order;
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase(),
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError("Parameter identifier should be a string or a number");
  }
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
placeOrder("Pepperoni");
completeOrder(1);
placeOrder("Anchovy");
placeOrder("Veggie");
completeOrder(2);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderHistory);
