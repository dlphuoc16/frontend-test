import { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ManPerfum from "./pages/ManPerfum";
import WomanPerfum from "./pages/WomanPerfum";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/man" element={<ManPerfum />} />
          <Route path="/woman" element={<WomanPerfum />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
