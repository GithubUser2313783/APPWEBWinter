const names = ["john", "dayday", "frankie", "alexis", "shelby"]

    // const CapName = names.map(names => names.charAt(0).toUpperCase() + names.slice(1));
    // console.log(CapName)
const capitalized = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(capitalized);
