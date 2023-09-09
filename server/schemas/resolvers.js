// require user model + utils/auth
// const resolvers Query, Mutation
//query user to find saved books
//mutation Create User/Book, deleteBook, update (login)

const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
	Query: {
		me: async () => {
			if(context.user){
			  return User.findOne({_id: context.user._id})
			}
			throw AuthenticationError
		 },

	Mutation: {
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			
			return { token, user };
		},
		//checked for bugs

		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });


			if (!user) {
				throw AuthenticationError;
			}

			const correctPw = await user.isCorrectPassword(password);
			if (!correctPw) {
				throw AuthenticationError;
			}

			const token = signToken(user);
			return { token, user };
		},


		saveBook: async (parent, { description, bookId, image, link, title}, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedBooks: Book },
				// {description,bookId,image,link,title}
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw AuthenticationError;
		},
		removeBook: async (parent, { book }, context) => {
			if (context.user) {
				return User.findOneAndDelete(
					{ _id: context.userId },
					{ $pull: { savedBooks: book } },
					{ new: true }
			
			);
		}
		throw AuthenticationError;
	},
	},
	}
}
//debugged removeBook

module.exports = resolvers;
