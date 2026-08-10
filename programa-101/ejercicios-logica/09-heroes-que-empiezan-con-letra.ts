// 9- Crear una función que reciba un arreglo como argumento, la función debe de retornar un
// nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
// Ejemplo:
// let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
// let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
// console.log( herosWithLetterS ); // She Hulk, Spiderman

export function heroesThatStartsWith(names: string[], letter: string) {
    let newHeroes: string[] = [];

    for (let i = 0; i < names.length; i++) {
        if (names[i].startsWith(letter)) {
            newHeroes.push(names[i]);
        }
    }

    return newHeroes;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith(heroes, 'S');
console.log(herosWithLetterS); // [ 'She Hulk', 'Spiderman' ]
