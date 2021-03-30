import '../scss/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Homepage from './Homepage';
import TodoInfo from './TodoInfo';
import PrivateRoute from './PrivateRoute';
import ErrorDisplay from './ErrorDisplay';


const App = (props) => {
	return (
		<div className='app'>
			<Router>
				<Nav/>
				<ErrorDisplay/>
				<div className='main'>
					<Switch>
						<PrivateRoute exact path='/dashboard' component={Dashboard} />
						<PrivateRoute exact path='/dashboard/todos/:id' component={TodoInfo} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/signup' component={Signup} />
						<Route exact path='' component={Homepage} />
						<Route path='*' component={NotFound} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
