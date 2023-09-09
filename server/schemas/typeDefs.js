// create type for User, Book, Auth Token, Query, Mutation
// check instructions.md

const typeDefs = `    
    type User {
        _id: ID,
        username: String,
        email: String,
        password: String,
        savedBooks: [Book]
    }

    input BookInput {
        authors: [String],
        description: String,
        title: String,
        image: String,
        link: String
    }

    type Book {
        bookId: ID,
        authors: [String],
        description: String,
        title: String,
        image: String,
        link: String
    }

    type Auth {
        token: ID!,
        user: User
    }
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth

        saveBook(input: BookInput) : Book
        removeBook(bookId: ID) : User
    }
`

module.exports = typeDefs;


//debugged typeDefs