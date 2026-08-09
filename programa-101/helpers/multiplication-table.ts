// Siempre considera los escenarios negativos

export function printMultiplicationTable(base: number, limit: number = 10) {
    if (base >= 0 && limit > 0) {
        for (let i = 1; i <= limit; i++) {
            console.log(`${base} x ${i} = `, base * i);
        }
    } else {
        console.log('Usa base entera y limite mayor a 0');
    }
}