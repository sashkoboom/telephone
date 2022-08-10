// static server serving frontend
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(9000);


// apollo server serving graphql api
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(() => {
    console.log(`
        Server is running!
        GraphQL API istening on port 4000, frontend served on port 9000 
        Visit http://localhost:9000/ to enjoy the dialing :)
  `);
});