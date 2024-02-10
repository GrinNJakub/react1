import './App.css';
import React from 'react';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/LoginForm/Login';
import Storage from './Components/Storage/Storage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/storage" element={<Storage />} />
      </Routes>
    </Router>
  );
}

export default App;
