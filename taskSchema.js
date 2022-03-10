const graphql = require('graphql');

// build schema, using GraphQL schema language
const schema = graphql.buildSchema(`
  type Task {
    id: String
    name: String
    description: String
    priority: String
    status: String
  }
  type Query {
    getTasks: [Task],
    getTask(id: Int) : Task
  }
  type Mutation {
    addTask(name: String, name: String, description: String, priority: String, status: String) : Boolean
    updateTask(id: Int, name: String, description: String, priority: String, status: String) : Boolean
    deleteTask(id: Int) : Boolean
  }
`);

module.exports = schema;