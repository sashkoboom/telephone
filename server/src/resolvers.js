module.exports = {
    Query: {
        phoneInputToWords: (_, { numberInput }) => [`Hello ${numberInput || 'World'}`],
    },
};