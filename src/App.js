import React from "react";
import BuySell from "./components/BuyerSeller/BuySell";
import Clientreview from "./components/Clientreview/Clientreview";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div>
      <Hero />
      <BuySell />
      <Clientreview />
      <Footer />
    </div>
  );
};

export default App;
