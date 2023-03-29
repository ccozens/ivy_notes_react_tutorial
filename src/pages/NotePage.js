import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

function NotePage(props) {
	// get id from url
	const { noteId } = useParams();
	const [note, setNote] = useState(null);

	// get note by id
	useEffect(() => {
		getNote();
	}, [noteId]);

	const getNote = async () => {
		//  don't trigger getNote if noteId is new
		if (noteId === 'new') return;
		//  otherwise, do
		const response = await fetch(
			`http://localhost:8000/notes/${noteId}`
		);
		const data = await response.json();
		setNote(data);
	};

	// create note
	const createNote = async () => {
		await fetch(`http://localhost:8000/notes`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ ...note, updated: new Date() }),
		});
	};

	// update note
	const updateNote = async () => {
		await fetch(`http://localhost:8000/notes/${noteId}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			// usually body: JSON.stringify(note) is enough and backend handles update, but json-server needs this
			body: JSON.stringify({ ...note, updated: new Date() }),
		});
	};

	const deleteNote = async () => {
		await fetch(`http://localhost:8000/notes/${noteId}`, {
			method: 'DELETE',
		});
	};

	const handleSubmit = (e) => {
		// if noteId is not new and note body is empty, delete it
		if (noteId !== 'new' && !note.body) {
			deleteNote();
		}
		// if noteId is new, create new note
		else if (noteId !== 'new') {
			updateNote();
		}
		// if noteId is new, and body has content, create note
		else if (noteId === 'new' && note.body) {
			createNote();
		}
	};

	return (
		<div className="note">
			<div className="note-header">
				<h3>
					<Link to="/">
						<ArrowLeft onClick={handleSubmit} />
					</Link>
				</h3>
				{noteId !== 'new' ? (
					<Link to="/">
						<button onClick={deleteNote}>Delete</button>
					</Link>
				) : (
					<Link to="/">
						<button onClick={handleSubmit}>Save</button>
					</Link>
				)}
			</div>
			<textarea
				value={note?.body}
				onChange={(e) => {
					setNote({ ...note, body: e.target.value });
				}}></textarea>
		</div>
	);
}

export default NotePage;
