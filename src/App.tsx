import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import './app.scss';

// PAGES
import Search from "./pages/Search";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
