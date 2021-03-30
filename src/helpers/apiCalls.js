import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';


//* USER LOGIN && SIGNUP

export const loginUser = async (userCredentials) => {
	console.log(userCredentials);

	try {
		const response = await axios.post(`/users/login`, userCredentials);
		console.log(response);
		// response object with: {data: {}, status: 200, statusText: 'OK'...}
		return response.data;
	} catch(err) {
		console.log(err.response);
		return err.response && err.response.data;
	}
}

export const signUpUser = async (userData) => {
	// console.log(userData);
	const response = await axios.post(`/users`, userData);
	return response.data;
}


//* TODOS CRUD

export const fetchTodos = async (userId) => {
	// console.log(`fetching todos`);
	const response = await axios.get(`/me/${userId}/todos`);
	return response.data;
}

export const fetchTodo = async (id) => {
	console.log(`fetching a todo`);
	const data = await axios.get(`/todos/${id}`);
	return data;
}

export const addTodo = async (todoData) => {
	console.log(`adding a todo`);
	const data = await axios.post(`/todos`, todoData);
	return data;
}

export const checkTodo = async (todo) => {
	const { text, _id, status } = todo;
	console.log(`checking a todo`);
	const data = await axios.put(`/todos/${_id}`, {
		text: text,
		status: !status
	});
	return data;
}

export const deleteMultipleTodos = async (data) => {
	const res = await axios.post(`/todos/multiple`, data);
	return res.data;
}
