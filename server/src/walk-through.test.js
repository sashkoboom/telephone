const { walkThroughCharTree } = require('./walk-through');

test('basic example with 23 input', () => {
    const str = '23';
    const expectedResults = [ "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    expect(walkThroughCharTree(str).sort()).toEqual(expectedResults.sort());
});

test('find a real word - APPLE', () => {
    const str = '27753';
    const expectedWord = 'apple';
    expect(walkThroughCharTree(str)).toEqual(expect.arrayContaining([expectedWord]));;
})