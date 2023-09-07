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

    type Book {
        bookId: ID,
        authors: [String],
        description: String,
        title: String,
        image: String,
        link: String
    }

    input BookInput {
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
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(authors: [String],description: String,bookId: String,image: String,link: String,title:String): User
        removeBook(bookId: String):User
    }
`

module.exports = typeDefs;