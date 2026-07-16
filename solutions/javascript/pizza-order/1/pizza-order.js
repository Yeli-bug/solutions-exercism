/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
let total = 0;

  //"Formaggio"[  "ExtraSauce",  "ExtraToppings"]
  
  // 1. Calculate base pizza price
   if (pizza === "Margherita") total = 7;
  else if (pizza === "Caprese") total = 9;
  else if (pizza === "Formaggio") total = 10;

  //helper caso base

  function helper(extraList) {
    if(extraList.length === 0){
      return 0;
    }
    
    const first = extraList[0];
    const costExtra = first === "ExtraSauce" ? 1 : 2;

    //recursion
    return costExtra + helper(extraList.slice(1));
    
  }

  return total + helper(extras);
  
 
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  //console.log(pizzaOrders);
  let total = 0;
  
  if(pizzaOrders.length === 0) {
    return 0;
  } else {
    for(const order of pizzaOrders){
      total += pizzaPrice(order.pizza, ...order.extras);
      console.log(order.extras);
    }
  }
  
    return total;
}
