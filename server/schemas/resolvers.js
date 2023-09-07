// require user model + utils/auth
// const resolvers Query, Mutation
//query user to find saved books
//mutation Create User/Book, deleteBook, update (login)

const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
	Query: {

		me: async () => {
			if (context.user) {
			  return User.findOne({ _id: context.user._id }).populate('savedBooks');
			}
			throw AuthenticationError;
		 },
	},

	Mutation: {
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},
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
		saveBook: async (parent, { userId, bookData }) => {
			await User.findOneAndUpdate(
				{ _id: userId },
				{
					$addToSet: { savedBooks: bookData },
				},
				{
					new: true,
					runValidators: true,
				}
			);
		},
		deleteBook: async (parent, { profileId, userId }) => {
			return User.findOneAndUpdate(
				{ _id: userId },
				{ pull: { savedBooks: bookId } },
				{ new: true }
			);
		},
	},
};

module.exports = resolvers;
