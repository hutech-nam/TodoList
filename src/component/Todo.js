import React from 'react';
import styled from 'styled-components';

const StyledButton = styled('button')`
	background-color: #ccc;
	margin-top: 5px;
	position: relative;

	&:hover {
		.check {
			display: block;
		}
	}
	.is-check {
		text-decoration: line-through;
	}
	.check {
		display: none;
	}
`
export default function Todo({ todo, onClickChecked }) {
	return (
		<>
			<StyledButton>
				<div className={`${todo?.isComplete ? "is-check" : ""}`}>
				{todo.name}
				<span className="check" onClick={() => onClickChecked(todo.id)}>
				</span>
				</div>
			</StyledButton>
		</>
	);
}
