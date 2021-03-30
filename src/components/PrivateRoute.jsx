import React, {useContext} from 'react';
import { UserContext } from '../context/userContext';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ path, component, redirectTo='/login' }) => {
	const { user } = useContext(UserContext);
	
	return user ? 
	<Route path={path} component={component}/> :
	<Redirect to={redirectTo} />
}

export default PrivateRoute;