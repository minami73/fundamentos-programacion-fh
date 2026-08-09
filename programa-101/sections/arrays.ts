export let people: string[] = ['Josue', 'Magda', 'Kenji'];
let salaries: number[] = [1500, 2400, 3200];
let numbers: number[] = [1, 2, 3, 4, 5];
let flowers: string[] = ['Rosa', 'Girasol', 'Lirio'];


for (let i = 0; i < flowers.length; i++) {
    console.log(flowers[i]);
}

for (let i = 0; i < people.length; i++) {
    console.log(`${people[i]} tiene un salario de ${salaries[i]}`);
}