import Chat from './components/Chat';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from 'react'
import Login from './components/LogIn'
// import ChatInput from './components/ChatInput'

const App = ()=> {
    return (
        <Router>
          <div className="navigation">
            <ul className="navbar">
              <li key={1}>
                <Link to="/">Login</Link>
              </li>
              <li key={2}>
                <Link to="/Chat">Chat Page</Link>
              </li>
           
            </ul>
    
            <hr />
    
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/Chat">
                <Chat />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }


export default App
