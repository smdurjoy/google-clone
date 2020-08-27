import React from 'react';
import './App.css'
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route path="/search">
            <Search/>
          </Route>

          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
