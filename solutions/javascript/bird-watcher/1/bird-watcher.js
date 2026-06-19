// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  const array = Array.from(birdsPerDay);
   return array.reduce((acumulador, birdsOneDay) => acumulador + birdsOneDay, 0);

  
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let i = week === 1? 0: (week - 1) * 7;
  let end= i === 0? i + 7: i + 7 ; 
  let sum= 0;

  for( i ; i < end; i++ ){
      sum+= birdsPerDay[i];
  }

  return (sum);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {  
  
  for (let i = 0; i < birdsPerDay.length; i++ ){    
    if(i % 2 === 0){
      birdsPerDay[i]= birdsPerDay[i]+1 ;
    }
  }
    return birdsPerDay;
}
