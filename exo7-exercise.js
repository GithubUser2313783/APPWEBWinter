const lordify = function(firstName) {
    return `${firstName} of Canadia`
};

console.log(lordify("John"));
console.log(lordify("Lexi"));

const lordifyArrow = (firstName, domain) => `${firstName} of ${domain}`;

console.log(lordifyArrow("Frank", "York"))