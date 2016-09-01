var mocha = require('mocha'),
    chai = require('chai'),
    expect = chai.expect;

var minAndMax = require('../src/index.js');

describe('Big and Small Validate', function(){
    var numberLists = [
        ['1 2 3 4 5 6', '1 6'],
        ['1 2 -3 4 5 6', '-3 6'],
        ['0 1 1 6 6 -6', '-6 6'],
        ['99 -99 100 101 -1', '-99 101'],
        ['1 1 1 1 1 1 1', '1 1']
    ];

    it('should return the largest value and smallest value', function(){
        numberLists.forEach(function(numbers){
            stringOfNumbers = numbers[0];
            var value = minAndMax(stringOfNumbers);
            expect(value == numbers[1]).to.be.true;
        });
    });
});