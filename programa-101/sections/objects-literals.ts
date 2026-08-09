export let person = {
    name: 'Mildred',
    age: 13,
    isActive: true,
    hobbies: ['drawing', 'volleyball'],
    toString(){
        let objectString = `${this.name} ${this.age} ${this.hobbies[0]}`
        console.log(objectString);
    }
}

person.toString()

let car = {
    color: 'blanco',
    traction: '4x4',
    tires: 4,
    doors: 5,
    brand: 'Jeep'
}

let smartTv = {
    name: 'Samsung',
    size: 43,
    isOn: false,
    hasApps: true
}

let youtubeVideo = {
    name: 'Me At the Zoo',
    description: 'First video',
    duration: 140,
    isPrivate: false,
    year: '2005'
}