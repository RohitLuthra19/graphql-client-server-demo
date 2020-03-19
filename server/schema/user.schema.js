module.exports = `
  type User {
    id: String!
    username: String!
    email: String!
  }
  
  type Query {
    getUser(email: String!): User
    getAllUsers: [User!]!
  }

  type Mutation {
    addUser(email: String!, username: String!, id: String!): User
    deleteUser(email: String!): User
    updateUser(email: String!, username: String!, id: String!): User
  }
`;
