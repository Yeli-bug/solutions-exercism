// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  
const times = {
  "Pure Strawberry Joy": 0.5,
  "Energizer":1.5,
  "Green Garden": 1.5,
  "Tropical Island": 3,
  "All or Nothing": 5
};

    return times[name] ?? 2.5;

  /**
 *switch(name){
    case "Pure Strawberry Joy": 
      return 0.5;
      break;
    case "Energizer":
    case "Green Garden": 
      return 1.5;
      break;
    case "Tropical Island": 
      return 3;
      break;
    case "All or Nothing": 
      return 5;
      break;
    default: 
      return 2.5;
  }
  */
  
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    console.log("wedgesNeeded",wedgesNeeded);
    console.log("limes",limes);

  let total= 0;   //trozos de limon conteo
  let i=0;        // iterador de limas
 
   while(total < wedgesNeeded && i < limes.length){

    console.log("i while",i);
    
    switch(limes[i]){
      case 'small':
        total += 6;
        break;
      case 'medium': 
        total+= 8;
        break;
      case 'large':
        total += 10;
        break;   
    }
  i++

    console.log("limas listas",total < wedgesNeeded);
    console.log("limas limite",i < limes.length);
   }

  
    console.log("i return",i);
    console.log("total",total);
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft, minutos q quedan del turno de Li
 * @param {string[]} orders, jugos que faltan preparar
 * @returns {string[]} remaining orders after the time is up, pedidos que no muede empezar

 -El tiempo restante en el turno siempre será mayor que cero. --El array de jugos a preparar nunca estará vacío
 -los pedidos se preparan en el orden en que aparecen en el array.
 -Si Li Mei empieza a preparar un jugo, siempre lo terminará, aunque tenga que trabajar un poco más.
 -Si no quedan pedidos pendientes que Dmitry deba atender, se debe devolver un array vacío.
 */
export function remainingOrders(timeLeft, orders) {  
   /**let ordersTimeCanDo= 0;
  while(ordersTimeCanDo < timeLeft){
      ordersTimeCanDo+= timeToMixJuice(orders[0]);
      orders.shift();      
  } 
  return orders;  */
console.log("timeLeft, orders",timeLeft, orders);

  let ordersTimeCanDo= 0;
  let i=0;
  while(ordersTimeCanDo < timeLeft){
      ordersTimeCanDo+= timeToMixJuice(orders[i]);
      i++;
  } 
  return orders.slice(i,orders.length); 
}
