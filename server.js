const express = require('express')
const config = require('./config');
const expressGraphQL = require('express-graphql');

const taskSchema = require('./taskSchema');
const rootResolver = require('./resolver')

const app = express();

app.use('/graphql/task', expressGraphQL.graphqlHTTP({
    schema: taskSchema,
    rootValue: rootResolver,
    graphiql: true,
  }));

app.use(function(req, res) {
    res.status(404).send({ host: `${req.host}`, url: `${req.originalUrl}`, method: `${req.method}`, message: 'not found'})
  });

app.listen(config.api.port, () => {
    console.log(`Running an  Express GraphQL API server listening on port ${config.api.port}`)
})
