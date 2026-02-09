let x = Math.floor(Math.random() * 100)

let y = Math.floor(Math.random() * 100)

function add(x, y){
    return x + y
}

function sub(x, y){
    return x - y
}

function mult(x, y){
    return x * y
}

function div(x, y){
    return x / y
}

function calc(x, y){
    return add(x, y) + ", " + sub(x, y) + ", " + mult(x, y) + ", " + div(x, y)
}

const gen = function() {
    calc(x, y)
}

gen()

console.log(add(x, y))
console.log(sub(x, y))
console.log(mult(x, y))
console.log(div(x, y))
console.log(calc(x, y))

/*

const add = (x, y) => x+y

const calc = (x, y) => console.log(
    `
    ${x} + ${y} = ${add(x, y)} * 4
    `
)

*/