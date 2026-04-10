import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Product from "./components/Product";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <main>
              <div id="home">
                <Home />
              </div>

              <div id="menu">
                <Menu />
              </div>

              <div id="about">
                <About />
              </div>

              <div id="products">
                <Product />
              </div>

              <div id="review">
                <Review />
              </div>
            </main>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
