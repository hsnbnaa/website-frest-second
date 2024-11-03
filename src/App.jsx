import React from "react";
import Header from "./components/fragments/Header";
import Hero from "./components/fragments/Hero";
import About from "./components/fragments/About";
import Variant from "./components/fragments/Variant";
import Feedback from "./components/fragments/Feedback";

function App() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <div className="w-full h-[50px] border-x-[7px] border-black border-solid"></div>
      <About />
      <div className="w-full h-[50px] border-x-[7px] border-black border-solid"></div>
      <Variant />
      <div className="w-full h-[50px] border-x-[7px] border-black border-solid"></div>
      <Feedback />
    </main>
  );
}

export default App;
