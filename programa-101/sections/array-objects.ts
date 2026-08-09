interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

export let person1: Person = {
    age: 36,
    isActive: true,
    name: 'Josue',
}

let person2: Person = {
    age: 36,
    isActive: false,
    name: 'Magdalena',
}

let person3: Person = {
    name: 'Elina',
    age: 36,
    isActive: false
}

let people: Person[] = [person1, person2, person3];

console.log('Recorriendo');

for (let i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(`${person.name} ${person.age}`);

}