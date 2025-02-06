let i = 0;

if (i % 2 == 0) {
    console.log("i est pair");
} else {
    console.log("i est impair");
}

i % 2 == 0 ? console.log("i est pair") : console.log("i est impair")

const car = {
    brand: "Volkswagen",
    model: "Microbus",
    year: 1965
}

console.log(car.brand)
console.log(car.model)
console.log(car.year)

const personne = {
    nom: "John",
    age: 30
};

personne.age = 32;
console.log(personne.age);