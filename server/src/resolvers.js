const words = require('an-array-of-english-words');

module.exports = {
    Query: {
        phoneInputToWords: (_, { numberInput }) => {
            
            const pathTree = numberInput
                .split('')
                .map(( number ) => DIAL_DATA[number]);
                
            const resultsLevels = [];
            
            pathTree.forEach(( level, i ) => {
                if( i === 0) { resultsLevels[i] = level }
                else { 
                    const prevLevel = resultsLevels[ i - 1 ];
                    resultsLevels[i] = prevLevel.flatMap(d => level.map(v => d + v));
                }
            });

            const guesses = resultsLevels.slice(-1)[0];
            return guesses;
        },
    },
};

const DIAL_DATA  = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
};