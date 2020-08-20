import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className='appRoot'>
      {/* <CssBaseline/> */}

      <NavigationBar />
      <Header />

      <Timeline /> 
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
