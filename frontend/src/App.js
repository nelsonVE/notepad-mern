import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateUser from './components/CreateUser'
import CreateNote from './components/CreateNote'

function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Route path="/" exact component={NotesList}></Route>
          <Route path="/edit/:id" component={CreateNote}></Route>
          <Route path="/create" component={CreateNote}></Route>
          <Route path="/user" component={CreateUser}></Route>
        </Router>
    </div>
  );
}

export default App;
