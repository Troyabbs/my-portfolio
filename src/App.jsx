import React from 'react';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {

  return (
    <div className="App">
      <Intro /> 
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
      
      
    </div>
  )
}

export default App
