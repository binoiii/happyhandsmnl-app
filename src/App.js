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
      const setData = await fetch("/hhmData.json").then((res) => res.json());
      sethhData(setData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Home data={hhData.main} />
      <Personalize />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
