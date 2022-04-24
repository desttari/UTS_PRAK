import React from 'react';
import Navbar from './components/Navbar';
import './App.sass';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import gallery from './components/pages/gallery';
import contact from './components/pages/contact';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' component={gallery} />
          <Route path='/contact us' component={contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
