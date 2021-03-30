import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { signUpUser } from '../helpers/apiCalls';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const SignUp = () => {
	const { register, handleSubmit, errors, watch } = useForm();
	const { setError, setUser } = useContext(UserContext);
	const history = useHistory();

	// const password = useRef({}); // setup a ref, that will track a form field
	// password.current = watch("password", ""); // track the password field (for confirmation check)
	const passwordValue = watch("password", ""); // track the password field (for confirmation check)

	const onSubmit = async (data) => {
		const res = await signUpUser(data);
		if (res.error) {
			return setError(res.error);
		}
		setError({});
		setUser(res);
		history.push('/dashboard');
	};

	return (
		<div className="auth-container">
			<section>
				<h3>Sign Up</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="info">
						<label>First name</label>
						<input
							name="firstName"
							defaultValue="Rory"
							ref={register({
								required: true,
							})}
						/>
						<div className="error-message">
							{errors.firstName && (
								<span>Please put your name sir.</span>
							)}
						</div>

						<label>Last name</label>
						<input
							name="lastName"
							defaultValue="Bobich"
							ref={register({
								required: true,
							})}
						/>
						<div className="error-message">
							{errors.lastName && (
								<span>Please put your last name sir.</span>
							)}
						</div>

						<label>Username</label>
						<input
							name="username"
							defaultValue="robobi"
							ref={register({
								required: true,
							})}
						/>
						<div className="error-message">
							{errors.userName && (
								<span>Please put your username sir.</span>
							)}
						</div>

						<label>Email</label>
						<input
							name="email"
							defaultValue="rory@bob.com"
							type="email"
							ref={register({
								required: true,
							})}
						/>
						<div className="error-message">
							{errors.email && (
								<span>Please put your email sir.</span>
							)}
						</div>

						<label>Password</label>
						<input
							name="password"
							defaultValue="Rory@777!"
							type="password"
							ref={register({
								required: true,
								minLength: { value: 5, message: "This shitty password needs to have min 5 characters!" }
							})}
						/>
						<div className="error-message">
							{errors.password && <span>{errors.password.message}</span>}
						</div>

						<label>Repeat password</label>
						<input
							name="password_repeat"
							defaultValue="Rory@777!"
							type="password"
							ref={register({
								validate: (value) => value === passwordValue || "The passwords do not match"
							})}
						/>
						<div className="error-message">
							{errors.password_repeat && <p>{errors.password_repeat.message}</p>}
						</div>


					</div>

					<div className="submit">
						<input type="submit" value="Sign up" />
					</div>
				</form>
			</section>
		</div>
	);
};

export default SignUp;