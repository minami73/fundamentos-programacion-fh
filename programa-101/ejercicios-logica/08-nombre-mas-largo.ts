// 8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
// nombre que tenga más letras del arreglo, y debe de trabajar así:
// let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
// let hero = largestNameOfArray( heroes );
// console.log( hero ); // Profesor Charles Xavier

export function largestNameOfArray(names: string[]) {
    let largest = names[0];

    for (let i = 1; i < names.length; i++) {
        if (names[i].length > largest.length) {
            largest = names[i];
        }
    }

    return largest;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray(heroes);
console.log(hero); // Profesor Charles Xavier
