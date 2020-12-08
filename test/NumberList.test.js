const assert = require('chai').assert
const numberList = require('../src/NumberList')

describe('App', () => {
    it("return a sum of 2 numbers", () => {
        let result = numberList.addNumber(4,5)
        assert.equal(result, 9)
    })
    it("the result must be above 5", () => {
        let result = numberList.addNumber(10,10)
        assert.isAbove(result,5)
    })
})
