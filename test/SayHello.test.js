const assert = require('chai').assert
const sayHello = require('../src/SayHello').sayHello()

describe('SayHello', () => {
    it("should return hello", () => {
        assert.equal(sayHello, 'Hello Minh Beo')
    })
    it("should not return good bye", () => {
        assert.notEqual(sayHello, 'Good Bye Beo')
    })
    it("this must be a string", () => {
        assert.typeOf(sayHello, 'string')
    })
})

