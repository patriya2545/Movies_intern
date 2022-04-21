import React ,{useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Navbar';
import Login from './Page/Login';
import List from './Page/List';
import Detail from './Page/Detail'
import { Route,Routes} from 'react-router-dom';

    <div>
      <h1>Bookkeeper!</h1>
    </div>
function App() {
  return (
    <>
    <Navbar/>

    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<Detail />} />
      </Routes>

    
    </>


    
  )
}

export default App;
