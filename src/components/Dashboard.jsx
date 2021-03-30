import { useEffect } from 'react';
import { fetchTodos } from '../helpers/apiCalls';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import TodosContainer from './TodosContainer';
import TodoForm from './TodoForm';

const Dashboard = () => {
	const { user, setTodos } = useContext(UserContext);
	
	useEffect(() => {
		const getData = async () => {
			// console.log(user);
			let todos = await fetchTodos(user._id);
			setTodos(todos);
		}
		getData();
	}, [user, setTodos]);

	return (
		<div className='dashboard'>
			<section>
				<h3>Dashboard</h3>
				<div className='form-container'>
					<TodoForm/>
				</div>
				<div className='todos-container'>
					<TodosContainer/>
				</div>
			</section>
		</div>
	);
};

export default Dashboard;


