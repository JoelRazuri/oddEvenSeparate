/*
    Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los
    números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], 
    impares: [1,3,5,7,9]}.
*/

const oddEvenSeparate = (list = undefined) => {
    if (list === undefined) return console.warn("No ingresaste una lista de números");
    if (!(list instanceof Array)) return console.error("El valor que ingresaste no es una lista");
    if (list.length === 0) return console.error("La lista esta vacia");

    for (let num of list){
        if (typeof num !== "number") return console.error(`El valor '${num}' ingresado, NO es un número`);
    }

    return console.info({
        pares: list.filter(num => num % 2 === 0),
        impares: list.filter(num => num % 2 === 1)
    });
}

console.info("EJERCICIO 23");
oddEvenSeparate();
oddEvenSeparate(40);
oddEvenSeparate([1, 2, "3", 4, 5, 6, 7, 8, 9, 0]);
oddEvenSeparate([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);