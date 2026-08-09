// Programación estructurada (imperativa)
// Programación orientada a objetos

export class Car {
    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: number;

    constructor(brand: string, doors: number) {
        this.brand = brand;
        this.doors = doors;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = 'No type';

        this.createdAt = 12345;
    }

    get _createdAt(): number{
        return this.createdAt;
    }

    turnOn() {

        if (this.isRunning) {
            console.log('El carro ya estaba encendido');
            // Si la condición no se cumple entonces ya no ejecuta el resto
            return;
        }

        if (this.fuelTank <= 0) {
            console.log('El carro no tiene combustible');
            return
        }

        this.isRunning = true;
        console.log('El carro está encendido');
    }

    fillTank(gas: number) {
        console.log(`Llenando con ${gas} litros`);

        if (gas <= 0) {
            console.log('El gas tiene que ser positivo');
            return;
        }

        let newFuelTank = this.fuelTank + gas;

        if (newFuelTank >= 100) {
            newFuelTank = 100;
        }

        this.fuelTank = newFuelTank;
    }


}

let myVw = new Car('Virtus', 4);

console.log(myVw);

myVw.turnOn();
myVw.fillTank(50);
myVw.fillTank(50);

console.log(myVw);

console.log(myVw._createdAt);