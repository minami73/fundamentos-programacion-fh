export let weekDay: number = 5;

// Si queremos evitar errores de input, como un número negativo o string usa un if

if (weekDay <= 1) {
    // console.log('Día de la semana no permitido');
    // Lanzamos un error para que no avance
    throw new Error('Día de la semana no permitido')

}
// Aqui se pudo poner en el else el switch, pero ya estaríamos anidando

switch (weekDay) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    default:
        console.log('No es ni lunes, martes, miércoles');
}