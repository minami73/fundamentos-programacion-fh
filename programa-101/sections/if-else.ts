console.log('Inicio del programa');

export let isTired: boolean = true;

// Aqui tenemos un nuevo scope / ámbito

// if else básico
// if(isTired){
//     console.log('Toma café cabrón');
// } else {
//     console.log('Sigue trabajando');
// }

let grade: number = 40;

if(grade >= 60){
    console.log('El alumno aprueba la clase');   
} else if (grade >= 50){
    console.log('Por favor estudie más');
} else {
    console.log('El alumno no aprueba la clase');
}



console.log('Fin del programa');
