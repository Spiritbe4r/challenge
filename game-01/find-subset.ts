// # Game 01
// Sea M un conjunto no vacío de números enteros, encuentra el primer subconjunto de 2 números
//  de M que suman N. Por ejemplo, supongamos que tenemos un conjunto de números 
// [2, 5, 8, 14, 0] y N = 10, el subconjunto resultante debería ser [2, 8].

/**
 * Encuentra el primer subconjunto de dos números en el array `M` que sumen a `N`, manteniendo el orden.
 * 
 * @param {number[]} M - un array de números enteros (no vacío).
 * @param {number} N - El valor objetivo de la suma.
 * @returns {number[]} Una matriz que contiene el primer subconjunto de dos números que sumen a `N`. Si no hay tal subconjunto, devuelve una matriz vacía.  
 * 
 * @example
 * findSubsetNoPermute([2, 5, 8, 14, 0], 10); // retorna [2, 8]
 */
function findSubsetNoPermute(M: number[], N: number): number[] {

    // En cada iteración, se compara el primer elemento con el segundo elemento
    for (let i = 0; i < M.length; i++) {
        for (let j = i + 1; j < M.length; j++) {
            if (M[i] + M[j] === N) {
                return [M[i], M[j]]; // Retorna el primer subconjunto encontrado
            }
        }
    }

    // Si no se encuentra ningún subconjunto, devuelve una matriz vacía
    return [];
}

// Ejemplo de uso
const numbers = [2, 5, 8, 14, 0];
const target = 10;
const result = findSubsetNoPermute(numbers, target);
console.log(result); // Salida esperada: [2, 8]
