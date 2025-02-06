let items = ["Egg", 0.25, 12];

let [product, quantity, price] = items;

console.log(`Item: ${product}, Quantité: ${quantity}, Prix: ${price}`);

const user = { firstname: "John", age: 30, isAdmin: false};

let {firstname, age, isAdmin} = user;

console.log(firstname); // John
console.log(age); // 30
console.log(isAdmin); // false

const person = [12, "Chris", "Owen"];

let [age1, firstName, lastName] = person;

console.log(`Personne : - Age: ${age}, Nom: ${firstName} ${lastName}`);

const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
];

const [student1, student2, student3, student4, student5] = moreStudents;

console.log(student1, student2, student3, student4, student5);