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
mutation saveBook($bookId: ID!, $bookData: BookInput!) {
	saveBook(bookId: $bookId, bookData: $BookInput) {
		bookId
		authors
		description
		title
		image
		link
	}
}

`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
	removeBook(bookId: $ID) {
		bookId
		authors
		description
		title
		image
		link
	}
}
`;