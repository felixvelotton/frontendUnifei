import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CrudUsuarios from './components/CrudUsuarios';
import Menu from './components/Menu';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="usuarios" element={<CrudUsuarios />} />
      <Route path="sobre" element={<About />} />
    </Routes>
  </BrowserRouter>
);
