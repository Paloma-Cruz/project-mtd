import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import './app.scss';

// PAGES
import Search from "./pages/Search";

const App: React.FC = () => {

  return (
    <>
    <h1>Olá, mundo!</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App;
