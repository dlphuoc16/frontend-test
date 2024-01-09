import { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ManPerfum from "./pages/ManPerfum";
import WomanPerfum from "./pages/WomanPerfum";
import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { FrShopping } from "./pages/FrShopping";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/man" element={<ManPerfum />} />
          <Route path="/woman" element={<WomanPerfum />} />
          <Route path="/login" element={<Login />} />

          <Route path="/frshopping" element={<FrShopping />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <HomePage />
    </>
  );
}

export default App;
