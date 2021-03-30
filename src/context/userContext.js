import {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserContextProvider = props => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState([]);
	const [error, setError] = useState({ message: '' });
	const [user, setUser] = useState(null);

	const sharedData = {
		user, setUser,
		todos, setTodos,
		todo, setTodo,
		error, setError,
	}

	return (
		<UserContext.Provider value={sharedData}>
			{props.children}
		</UserContext.Provider>
	)

}