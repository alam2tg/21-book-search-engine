import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { link } from 'react-router-dom';
import { SAVE_BOOK } from '../utils/mutations';

const handleSaveBook() => {
	const [newBook, setNewBook] = useState('');

	const[saveBook, {error}] = useMutation(SAVE_BOOK, {
		refetechQueries: [
			QUERY_BOOKS,
			'getBooks',
			GET_ME,
			'me'
		]
	})
}