import './App.css';
import Test from './Test'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home'
import Projects from './Projects'
import Nav from './Nav'
import Login from './Login'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch>
            <Route path = '/' exact component={Home}/>
            <Route path='/test' exact component={Test}/>
            <Route path='/projects' exact component={Projects}/>
            <Route path='/projects' exact component={Projects}/>
            <Route path='/projects' exact component={Projects}/>
            <Route path='/login' exact component={Login}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
