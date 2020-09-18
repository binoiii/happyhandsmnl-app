import React, { useState, useEffect } from "react";

import Navigation from "./Components/Navigation//Navigation";
import Home from "./Components/Home/Home";
import SocialLinks from "./Components/SocialLinks/SocialLinks";
import Products from "./Components/Products/Products";
import HowToOrder from "./Components/HowToOrder/HowToOrder";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  const [hhData, sethhData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/hhmData.json");
      const data = await response.json();
      sethhData(data.main);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Home />
      <SocialLinks hhData={hhData} />
      <Products />
      <HowToOrder />
      <About />
      <Footer />
    </div>
  );
}

export default App;
