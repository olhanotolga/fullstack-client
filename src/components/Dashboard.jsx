import { useEffect } from 'react';
import { fetchTodos } from '../helpers/apiCalls';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import Todo from './Todo';

const Dashboard = () => {
	const { todos, setTodos } = useContext(UserContext);
	
	useEffect(() => {
		const getData = async () => {
			let res = await fetchTodos();
			setTodos(res.data);
		}

		getData();
	}, [setTodos]);

	const todoList = todos.map(todo => {
		return <Todo key={todo.id} data={todo}>{todo.text}</Todo>
	})

	return (
		<div className='dashboard'>
			<section>
				<h3>Dashboard</h3>
				<div className='todos-container'>{todoList}</div>
			</section>
		</div>
	);
};

export default Dashboard;


