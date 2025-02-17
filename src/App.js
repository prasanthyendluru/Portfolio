import React from 'react';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

import './App.css';
import Home  from './components/Home';


function App() {
  

  return (
    <div className="App bg-gray-100">
    <Header />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;


  
 

