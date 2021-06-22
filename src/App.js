import logo from './logo.svg';
import './App.css';
import {NavMenu} from './Navigation';
import { Layout } from './Layout';

import { Home } from './Home';
import { Employee } from './Components/Employee';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import Login1 from './Login1';
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
     
       
        <Switch>
          <Route exact path='/' component={Login1} />

          <Route path='/Dashboard' component={Dashboard} />
        </Switch>
      
    </Router>
  );
}

export default App;
