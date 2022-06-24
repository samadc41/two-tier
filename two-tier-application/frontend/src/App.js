import React from 'react';
import './App.css';
import Reverser from './components/reverser';
import Summation from './components/summation';
import PersonList from './components/personlist';
import Welcome from './components/welcome'
function App() {
  return (
    <div className="app">
	  <Welcome />
	<PersonList />
      <Reverser/>
      <Summation/>
    </div>
  );
}

export default App;
