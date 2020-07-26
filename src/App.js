import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation//Navigation";
import Home from "./Components/Home/Home";
import Personalize from "./Components/Personalize/Personalize";
import Products from "./Components/Products/Products";
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
      <Home hhData={hhData} />
      <Personalize />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
