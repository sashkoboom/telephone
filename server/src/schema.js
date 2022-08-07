const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    phoneInputToWords(numberInput: String): [String]!
  }
`;

module.exports = typeDefs;