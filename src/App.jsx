import React from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Portofolio from "./components/Portofolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Portofolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
