// 4- Dado el siguiente arreglo:
// let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
// Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número greatest?

export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

let greatest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > greatest) {
        greatest = numbers[i];
    }
}

console.log(greatest); // 10
