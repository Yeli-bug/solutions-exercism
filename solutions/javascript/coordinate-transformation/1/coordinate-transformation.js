// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * @typedef {function (number, number): [number, number]} CallbackType
 */

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {  
  return function moveCoordinatesRight2Px(x, y) {
            x +=dx;
            y +=dy;
    
    return [x,y];
    }
  //closure no guarda un historial de llamadas, sino que recuerda las variables del entorno donde fue creado.
  }

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return function doubleScale(x, y) {
const scaledX = x * sx;
const scaledY = y * sy;

return [scaledX, scaledY];
    //deja claro que no estás modificando los parámetros, sino creando un nuevo resultado
  }
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {CallbackType} f the first function to apply
 * @param {CallbackType} g the second function to apply
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */

//0,1  2,1      //2,1 4,2    //4,2 [4,2]
export function composeTransform(f, g){
  return function(x, y){
    const resultUno =f(x, y);
   // console.log("After f:", resultUno);
    
    const resultDos =g(resultUno[0],resultUno[1]);
   // console.log("After g:", resultDos);

    return resultDos;
  };
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {CallbackType} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {CallbackType} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  // To narrow the type of the return variable, add `/** @type {[number, number]} */` above it.
  
  //1.- CREAR VARIABLES X, Y, RESULTADO ANTERIOR Y  TENEMOS RESULTADO COMO BOOLEANO.
    let hasPreviousResult = false;
    let previousX = 0;
    let previousY = 0;
    let previousResult = [0, 0];   ///Definimos que son dos valores

    
    
    return function (x, y) {
    
       const sameInputs =
        hasPreviousResult &&
        x === previousX &&
        y === previousY;

      console.log("Current inputs:", x, y);
      console.log("Previous inputs:", previousX, previousY);
      console.log("Same inputs?:", sameInputs);
      
    //2.-HACER LA COMPARACION CON LOS DATOS LLEGADOS       
      if(sameInputs ){
        //4.- si-DEVOLVER LOS DATOS ANTERIORES
         return previousResult;
      } else {
        //3.- no- llama a la function f(x,y) , ACTUALIZAR LA INfO DE LAS VARIABLES y devuelve el nuevo valor

        const result = f(x, y);

        hasPreviousResult = true;
        previousX = x;
        previousY = y;
        previousResult = result;

        return result;
      }
   
   
    }
     
};

