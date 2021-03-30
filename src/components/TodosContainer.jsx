import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { checkTodo, deleteMultipleTodos } from '../helpers/apiCalls';
import { useForm } from 'react-hook-form';


const TodosContainer = ({ data }) => {
	let history = useHistory();
	const { todos, setTodos } = useContext(UserContext);
	const { register, handleSubmit } = useForm();

	todos.sort((a, b) => {
		if (a.status < b.status) {
			return -1;
		} else return 1;
	})

	const handleClick = (e) => {
		// e.stopPropagation();
		console.log(e.currentTarget.id);
		// const id = e.currentTarget.id
		// history.push(`dashboard/todos/${id}`);
	};

	const onDeleteMultiple = async (data) => {
		await deleteMultipleTodos(data);
		const deletedTodos = data.todo;
		let remainingTodos = todos.filter(todo => !deletedTodos.includes(todo._id));
		setTodos(remainingTodos);
	}

	const handleTodoClick = async (e) => {
		e.stopPropagation();
		const id = e.currentTarget.dataset.id;
		console.log(`Todo you clicked on: ${id}`);
		let todo = todos.find(todo => todo._id === id);
		let updatedTodo = await checkTodo(todo);

		const newTodos = todos.map((item) => {
			if (item._id === updatedTodo.data._id) {
				console.log('Item', item);
				item.status = !item.status;
			}
			return item;
		});

		console.log('New todos', newTodos);
		setTodos(newTodos);
	};

	const todoList = todos.map(todo => {
		return (
			<div
				className={todo.status ? 'todo checked' : 'todo'}
				onClick={handleClick}
				key={todo._id}
				id={todo._id}
			>
				<p>
					<label>
						<input type="checkbox" name="todo" ref={register} value={todo._id} />
						{todo.text}
					</label>
				</p>
				<div className='actions'>
					<FontAwesomeIcon data-id={todo._id} icon={faCheck} onClick={handleTodoClick} />
					<FontAwesomeIcon icon={faTrash} />
					<FontAwesomeIcon icon={faEdit} />
				</div>
			</div>

		)
	})

	return (
		<form onSubmit={handleSubmit(onDeleteMultiple)}>
			<fieldset>{todoList}</fieldset>
			<input type="submit" value="Delete selected"/>
			{/* <input type="submit" value="Select all"/> */}
		</form>
	);
};

export default TodosContainer;
