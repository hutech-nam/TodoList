import React from 'react'
export default function Edit({ todo, onClickEditTodo }) {
	return (
		<>
			<button name='edit-todo' onClick={(e) => onClickEditTodo(todo.id, e)}>Edit</button>
		</>
	);
}
