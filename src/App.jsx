import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Product from "./components/Product";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Navbar setShowLogin={setShowLogin} />

      {/* Popup */}
      {showLogin && <Login setShowLogin={setShowLogin} />}

      <main>
        <Home />
        <Menu />
        <About />
        <Product />
        <Review />
      </main>

      <Footer />
    </div>
  );
};

export default App;
