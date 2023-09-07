import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
	mutation loginUser($email: Strings!, password: String!) {
		login($email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

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
mutation removeBook($bookId: ID!) {
	removeBook(bookId: $ID) {
		_id
		email
		username
	}
}
`;