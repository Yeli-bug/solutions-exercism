// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach

  let thereAre= 0;
  stack.forEach((num) => {
    if(num === card){
      thereAre++;
    }
  })
  return thereAre;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let thereAre= 0;
  console.log(stack, type);
  for (const num of stack) {
    let numIs= num % 2 === 0;
    if( numIs === type ){
          thereAre++;
    }
  }
  return thereAre;
}
