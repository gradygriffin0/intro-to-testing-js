// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

const sayHello = function(name) {
    if(typeof name !== "string"){
        return "Hello, World";
    }
    return "Hello, " + name;
}

function isFive(input){
    if (typeof input === "number") {
        return (Number(input) === 5);
    } else return false;
}

function isEven(input = false){
    return (typeof input === "number") && (Math.abs(input) % 2 === 0);
}


function isVowel(input = false){
    let vowel = 'a' || 'e' || 'i' || 'o' || 'u'
    return (input.toString().toLowerCase() === vowel);
}

function add(num1, num2){
return (Number(num1) + Number(num2));
}