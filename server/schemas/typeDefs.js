const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        _id: ID
        bookId: String
        authors: [String]
        title: String
        description: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    input savedBookInput {
        authors: [String]
        bookId: String
        description: String
        title: String
        image: String
        link: String
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, pasword: String!): Auth
        saveBook(book: savedBookInput): User
        removeBook(bookId: ID!): User
    }
    `


module.exports = typeDefs