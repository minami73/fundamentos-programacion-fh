// Ejercicio

// Tabla de multiplicar
export let base: number = 10;
let limit: number = 50;

console.log('Con ciclo for \n');

for (let i = 1; i <= 50; i++) {
    let res: number = i * base;
    console.log(`${base} x ${i} = ${res}`);
}
console.log('\n');

console.log('Con ciclo while \n');
let i = 1;
while (i <= limit) {
    let res: number = i * base;
    console.log(`${base} x ${i} = ${res}`);
    i++
}