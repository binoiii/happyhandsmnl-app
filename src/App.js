import React from "react";
import Navigation from "./Components/Navigation.js";
import About from "./Components/About.js";
import Products from "./Components/Products.js";
import Home from "./Components/Home.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Products />
      <About />
    </div>
  );
}

export default App;
