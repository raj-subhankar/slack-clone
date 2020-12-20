import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useState } from 'react';
import Login from './Login';

function App() {
  const[user, setUser] = useState(null);


  return (
    <div className="app">
      <Router >
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h2>welcome</h2>
                  </Route>
                </Switch>
            </div>
          </>
        )}
      
      </Router>
      
    </div>
  );
}

export default App;
