// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SearchBooks from './pages/SearchBooks';
// import SavedBooks from './pages/SavedBooks';

// import outlet from react router

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (

    <>
      <Navbar />
      <Outlet />
    </>

  );
}

export default App;
