import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/contact/Contact';
import Resume from './components/pages/resume/Resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' element = {<Home />}/>
          <Route path='/about' element = {<About />}/>
          <Route path='/projects' element = {<Projects />}/>
          <Route path='/contact' element = {<Contact />}/>
          <Route path='/resume' element = {<Resume />}/>
        </Switch>
      </Router>
    </>
  );
}




export default App;
