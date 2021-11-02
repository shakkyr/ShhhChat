import Chat from './components/Chat';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import React from 'react'
import Login from './components/LogIn'
// import ChatInput from './components/ChatInput'

const App = ()=> {
    return (
        <Router>
          <div className="navigation">
           
    
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
