import React from 'react';
import './App.css';
import CarroList from './pages/CarroList';
import pages from './pages/pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <BrowserRouter>
          <Routes>
            <Route path={pages.routes.Login} element={<Login />} />
            <Route path={pages.routes.CarroList} element={<CarroList />} />
            <Route path={pages.routes.Signup} element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
