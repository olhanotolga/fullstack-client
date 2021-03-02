import '../scss/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Homepage from './Homepage';

const App = (props) => {
  return (
    <div className='app'>
      <Router>
        <Nav></Nav>
        <div className='main'>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='' component={Homepage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
