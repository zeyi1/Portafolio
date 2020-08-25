import React, {Suspense, lazy} from 'react';
import './App.css';
import Header from './components/Header';

const NavigationBar = lazy(() => import('./components/NavigationBar'));
const Timeline = lazy(() => import('./components/Timeline'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));



function App() {
  return (
   
      <div className='appRoot'>

        <Suspense fallback={<div />}>
          <NavigationBar />
        </Suspense>

        <Header />

        <Suspense fallback={<div />}>
          <Timeline /> 
        </Suspense>
        
        <Suspense fallback={<div />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<div />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
        
      </div>

  );
}

export default App;
