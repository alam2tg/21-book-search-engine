import { gql } from '@apollo/client';

export const GET_ME = gql`
	query me {
		me {
			_id
			username
			email
			bookCount
			savedBooks {
				authors
				bookId
				image
				description
				link
				title
			}
		}
	}
`;

export const QUERY_BOOKS = gql`
	query
`