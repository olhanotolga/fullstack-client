import React, {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {fetchTodo} from '../helpers/apiCalls';
import {UserContext} from '../context/userContext';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

const TodoInfo = () => {
	const {todo, setTodo} = useContext(UserContext);
	let { id } = useParams();
	
	useEffect(() => {
		const getData = async () => {
			let res = await fetchTodo(id);
			setTodo(res.data);
		}

		getData();
	}, [setTodo, id]);

	return (
		<div className="todo-info">
			<section className="todo-info">
				<p>{todo.text}</p>
			</section>
		</div>
	)
}

export default TodoInfo;
