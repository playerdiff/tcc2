// App.js

import React from 'react';
import './App.css';
import CarroList from './components/CarroList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meus Carros</h1>
      </header>
     
      <CarroList />
    </div>
  );
}

export default App;
