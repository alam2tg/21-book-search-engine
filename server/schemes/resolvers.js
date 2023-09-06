// require user model + utils/auth
// const resolvers Query, Mutation
	//query user to find saved books
	//mutation Create User/Book, deleteBook, update (login)


const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
	Query: {
		user: async (parent, { username }) => {
			return user.findOne({ username }).populate('savedBooks');
	  },
	},

	Mutations: {

	},

}