const words = require('an-array-of-english-words');
const { walkThroughCharTree } = require('./walk-through');

module.exports = {
    Query: {
        phoneInputToWords: (_, { numberInput }) => {
            const guesses = walkThroughCharTree( numberInput );
            const realWords = words.filter(value => guesses.includes(value)); 
            const res = [...realWords, ...guesses.filter( x => !realWords.includes(x))];
            return res;
        },
    },
};

