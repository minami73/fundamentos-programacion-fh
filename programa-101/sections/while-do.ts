// let gasTank: number = 50;

// while (gasTank > 0) {
//     console.log('Gasolina restante', gasTank);
//     gasTank--;
// }

// console.log('Ya no tiene gasolina');

export let gasTank: number = 50;

do {
    console.log('Gasolina restante', gasTank);
    gasTank--;
} while (gasTank > 0);

console.log('Ya no tiene gasolina');