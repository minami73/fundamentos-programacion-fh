// 7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
// max, la función debe de determinar cual es el greatest de los 3 y retornarlo… la función debe de
// trabajar así:
// let maxValue = max( 5, 2, 6);
// console.log( maxValue ); // 6

export function max(a: number, b: number, c: number) {
    let greatest = a;

    if (b > greatest) {
        greatest = b;
    }

    if (c > greatest) {
        greatest = c;
    }

    return greatest;
}

let maxValue = max(5, 2, 6);
console.log(maxValue); // 6
