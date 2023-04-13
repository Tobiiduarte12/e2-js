const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", " Tomate", " Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", " Tomate", " Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", " Tomate", " Aceitunas", " Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      " Tomate",
      " Queso Azul",
      " Parmesano",
      " Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", " Tomate", " Aceitunas", " Anchoas", " Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", " Tomate", " Anana"],
  },
];

// ***************** ejercicios *********************

// a) pizzas con id impares

const impares = pizzas.filter((pizza) => pizza.id % 2 !== 0);
console.log(impares);

// b) ¿hay alguna pizza que valga menos de $600?

const pizzaBarata = pizzas.map((pizza) => {
  if (pizza.precio < 600) {
    console.log(`la ${pizza.nombre} tiene un costo de $${pizza.precio} y sus ingredientes son: ${pizza.ingredientes}.`);
  }
  return pizza.precio < 600;
})

// console.log(pizzaBarata);

// c) nombre de cada pizza con su respectivo precio

const nameAndPrice = pizzas.forEach((pizza) => console.log(`${pizza.nombre} cuesta $${pizza.precio}`))

// d) todos los ingredientes de cada pizza

const ingredients = pizzas.map((pizza) => {
  console.log(`${pizza.nombre} tiene los siguientes ingredientes: ${pizza.ingredientes}` );
  return pizza.ingredientes
})

// console.log(ingredients);

