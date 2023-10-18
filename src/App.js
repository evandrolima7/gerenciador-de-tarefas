import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer";
import Tarefas from "./componentes/Tarefas";
import Sobre from "./componentes/Sobre";
import Home from "./componentes/home";
import React from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criartarefas" element={<Tarefas />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  );
}

