import React from 'react';
import Todo from './Todo';


export default function TodoList({ todoList, onClickChecked, onClickEditTodo, onClickRemoveTodo }) {
	return (
		<>
			<div className="list-item">
				{
					todoList?.map(todo => <Todo key={todo.id} 
												todo={todo} 
												onClickChecked={onClickChecked} 
												onClickEditTodo={onClickEditTodo}
												onClickRemoveTodo={onClickRemoveTodo} />)
				}
			</div>
		</>
	);
}
