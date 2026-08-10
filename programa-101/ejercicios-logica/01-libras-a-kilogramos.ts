// 1- Convertir de Libras a Kilogramos. ( 1 libra = 0.453592 Kilogramos )
// Ejemplo: 150 libras = 68.0388 kilogramos

export function poundsToKilograms(pounds: number) {
    return pounds * 0.453592;
}

console.log(poundsToKilograms(150)); // 68.0388
