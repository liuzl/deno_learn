function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function hello(name) {
    return "Hello " + capitalize(name);
}

console.log(hello("johan"));
console.log(hello("john"));
console.log(hello("sara"));