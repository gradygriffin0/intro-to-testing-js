// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function(){
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Grady" when called sayHello("Grady")', function () {
        expect(sayHello("Grady")).toBe("Hello, Grady");
    });
    it('should return "Hello, Casey" when called sayHello("Casey")', function () {
        expect(sayHello("Casey")).toBe("Hello, Casey");
    });
    it('should return "Hello, Laura" when called sayHello("Laura")', function () {
        expect(sayHello("Laura")).toBe("Hello, Laura");
    });
    it('sayHello() should return "Hello, World"', function () {
        expect(sayHello()).toBe("Hello, World");
    });
    it('sayHello(true) should return "Hello, World"', function () {
        expect(sayHello(true)).toBe("Hello, World");
    });
    it('sayHello(false) should return "Hello, World"', function () {
        expect(sayHello(false)).toBe("Hello, World");
    });
});

describe("isFive()", function(){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when called isFive(5)', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should only accept number inputs', function () {
        expect(isFive("5")).toBe(false);
    });
});