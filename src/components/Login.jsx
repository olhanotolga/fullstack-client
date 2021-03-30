import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../helpers/apiCalls'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Login = () => {

	const { setError, setUser } = useContext(UserContext);
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();

	const onSubmit = async (userData) => {
		let result = await loginUser(userData);

		console.log(errors);

		// ERROR CASE: { error: {message: "Doesn't work"} }
		if (result.error) {
			return setError(result.error);
		} 
		// SUCCESS CASE: { data }
		setError({});
		setUser(result); // store received user in context
		history.push('/dashboard');
	};

	return (
		<div className="auth-container">
			<section>
				<h3>Log In</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="info">

						<label>email</label>
						<input
							name="email"
							type="email"
							defaultValue="rory@bob.com"
							ref={register({
								required: "Required",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "invalid email address"
								}
							})}
						/>
						<div className="error-message">
							{errors.email && <span>{errors.email.message}</span>}
						</div>

						<label>password</label>

						<input
							name="password"
							defaultValue="Rory@777!"
							type="password"
							ref={register({
								required: "Required",
								minLength: {
									value: 5,
									message: "PW should have min length of 5"
								}
							})}
						/>
						<div className="error-message">
							{errors.password && <span>{errors.password.message}</span>}
						</div>
					</div>

					<div className="submit">
						<input type="submit" />
					</div>
				</form>
			</section>
		</div>
	);
};

export default Login;
