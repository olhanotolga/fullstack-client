import {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserContextProvider = props => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState([]);

	return (
		<UserContext.Provider value={{
			todos, setTodos,
			todo, setTodo
		}}>
			{props.children}
		</UserContext.Provider>
	)

}