let words: string[] = [
    'COMPUTADORA',
    'MONITOR',
    'TECLADO',
    'MOUSE',
    'PROCESADOR'
];


export function getRandomWord(){
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}