import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
	mutation loginUser($email: String!, password: String!) {
		loginUser(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;
//debug, 'email:' $email , missing, delete extra s from strings

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
	addUser(username: $username, email: $email, password: $password) {
	  token
	  user {
		 _id
		 username
	  }
	}
 }
`;

export const SAVE_BOOK = gql`
mutation saveBook($authors: [String], $description: String, $bookId: String, $image: String, $link: String, $title: String) {
	saveBook( description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
		_id
		email
		username
	}
}

`;

export const REMOVE_BOOK = gql`
mutation removeBook($book: String!) {
	removeBook(book: $book) {
		_id
		username
		savedBooks
	}
}
`;