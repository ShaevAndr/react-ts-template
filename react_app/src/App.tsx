import React from 'react';
import { User } from './components/user';
import './App.css';
import { CONSTANTS } from './components/constants';

function App() {
  console.log("a_setings", CONSTANTS.s)
  return (
    <div className="App">
      <p>компонента App</p>
    <User />
    </div>
  );
}

export default App;
