// console es el objeto
// log es el método y dentro de los paréntesis es el argumento que espera
console.log('Hola Mundo carajo');

// De preferencia siempre programa en inglés

// Ejercicio de hacer un contador, acumulador o incrementador
let numberOfLines = 1;

export function printLineNumber(){
    console.log('Linea #', numberOfLines);
    numberOfLines++;
    // numberOfLines += 3;
}

printLineNumber()
printLineNumber()
printLineNumber()
printLineNumber()

// Anteriormente teníamos mucho código pese a que resuelve el problema
// Por lo que lo fuimos reduciendo sin modificar la lógica
// Y finalmente usamos una función

// Recordemos que existen muchas maneras de resolver un mismo problema
// Algunos con más código otros con menos código y más eficiente