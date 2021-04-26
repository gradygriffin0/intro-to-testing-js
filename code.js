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

