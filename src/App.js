import React, {Suspense, lazy} from 'react';
import './App.css';
// import NavigationBar from './components/NavigationBar';
// import Footer from './components/Footer';
import Header from './components/Header';
// import Timeline from './components/Timeline';
// import Contact from './components/Contact';
// import Projects from './components/Projects';

const NavigationBar = lazy(() => import('./components/NavigationBar'));
const Timeline = lazy(() => import('./components/Timeline'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    
      <div className='appRoot'>
        {/* <CssBaseline/> */}
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
