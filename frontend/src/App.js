// App.js
import React from 'react';
import './App.css';
import CarroList from './pages/CarroList';
import pages from './pages/pages';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A L U C A R</h1>
      </header>
      <div className={classes.root}>        
        <BrowserRouter>
          <Routes>            

            <Route path={pages.routes.CarroList} exact><CarroList /></Route>

          </Routes>          
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
