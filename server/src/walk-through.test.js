const { walkThroughCharTree } = require('./walk-through');

test('basic example with 23 input', () => {
    const str = '23';
    const expectedResults = [ "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    expect(walkThroughCharTree(str).sort()).toEqual(expectedResults.sort());
});