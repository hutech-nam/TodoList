import React from 'react'
export default function Edit({ todo, onClickRemoveTodo }) {
	return (
		<>
			<button name='remove-todo' onClick={(e) => onClickRemoveTodo(todo.id, e)}>Remove</button>
		</>
	);
}
