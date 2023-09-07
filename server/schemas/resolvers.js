// require user model + utils/auth
// const resolvers Query, Mutation
//query user to find saved books
//mutation Create User/Book, deleteBook, update (login)

const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
	Query: {
		me: async () => {
			if(AudioContext.user){
			  return me.findOne({_id: AudioContext.user._id})
			}
		 },

	Mutation: {
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const correctPw = await user.isCorrectPassword(password);
			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);
			return { token, user };
		},
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},

		saveBook: async (parent, { description, bookId, image, link, title}, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedBooks: {description,bookId,image,link,title} },
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
		removeBook: async (parent, { bookId }, context) => {
			if (context.user) {
				return User.findOneAndUpdate(
					{ _id: userId },
					{ pull: { savedBooks: bookId } },
					{ new: true }
			
			);
		}
		throw AuthenticationError;
	},
	},
	}
}

module.exports = resolvers;
