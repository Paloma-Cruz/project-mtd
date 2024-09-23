import { Routes, Route, Router } from "react-router-dom";
import React from "react"
import './app.scss';

// PAGES
import Search from "./pages/Search";

const App: React.FC = () => {

  return (
    <>
    <h1>Olá, mundo!</h1>
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
    </>
  )

}

export default App;
