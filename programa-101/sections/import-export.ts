import * as mh from "../helpers/math-helpers";
import { printMultiplicationTable } from '../helpers/multiplication-table';

export function greet(name: string = 'Mundo') {
    console.log('Hola ' + name);
}

// let name: string = 'Josué'
// greet(name);}

let num1: number = 20;
let num2: number = 10;

let total1: number = mh.addTwoNumbers(num1, num2);
let total2: number = mh.substractTwoNumbers(num1, num2);
let total3: number = mh.multiplyTwoNumbers(num1, num2);
let total4: number = mh.divideTwoNumbers(num1, num2);

console.log('Total suma: ', total1);
console.log('Total resta: ', total2);
console.log('Total multiplicación: ', total3);
console.log('Total división: ', total4);

// Otro ejercicio
printMultiplicationTable(2,1);