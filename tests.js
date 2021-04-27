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

describe("isEven()", function(){
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return true for isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true for isEven(-4)', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false for isEven(3)', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return true for isEven(8)', function () {
        expect(isEven(8)).toBe(true)
    });
    it('should return false for isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false for isEven(true)', function () {
        expect(isEven(true)).toBe(false)
    });
    it('should return false for isEven(false)', function () {
        expect(isEven(false)).toBe(false)
    });
    it('should return false for isEven(false)', function () {
        expect(isEven(false)).toBe(false)
    });
    it('should return false for isEven()', function () {
        expect(isEven()).toBe(false)
    });
});

describe("isVowel()", function(){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should always return boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true for isVowel("a")', function () {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true for isVowel("A")', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false for isVowel("y")', function () {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false for isVowel(4)', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false for isVowel(true)', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false for isVowel(false)', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false for isVowel("banana")', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false for isVowel()', function () {
        expect(isVowel()).toBe(false);
    });
});