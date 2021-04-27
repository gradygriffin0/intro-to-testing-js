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
    if (typeof input === "number"){
        if (input === 5){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}

function isEven(input = false){
    return (typeof input === "number") && (Math.abs(input) % 2 === 0);
}


function isVowel(input = false){
    let vowel = 'a' || 'e' || 'i' || 'o' || 'u'
    return (input.toString().toLowerCase() === vowel);
}