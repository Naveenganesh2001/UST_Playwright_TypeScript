interface Person {
    name: string;
    age: number;
    gender: string;
}

interface Car {
    name: string;
    price: number;
}

const person: Person = {
    name: "Aaryan",
    age: 30,
    gender: "male"
};

const bmw: Car = {
    name: "m5",
    price: 300000
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

console.log(getProperty(person, "gender"));
console.log(getProperty(bmw, "name"));