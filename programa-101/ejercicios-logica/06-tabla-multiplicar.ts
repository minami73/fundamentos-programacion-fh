// 6- Realice un algoritmo, que permita la impresión en consola de la siguiente tabla:
// 1  2  3  4  5
// 2  4  6  8  10
// 3  6  9  12 15
// 4  8  12 16 20
// 5  10 15 20 25

for (let row = 1; row <= 5; row++) {
    let line = '';

    for (let column = 1; column <= 5; column++) {
        line += `${row * column}\t`;
    }

    console.log(line);
}
