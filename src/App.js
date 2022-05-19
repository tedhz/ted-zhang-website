import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Home from './components/pages/home/Home';
import About from './components/pages/About';
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
          <Route path='/resume-download' element={<Resume_Download />}/>
          <Route path='/linkedin' element={<LinkedIn />}/>
          <Route path='/github' element={<Github />}/>
        </Switch>
      </Router>
    </>
  );
}

function Resume_Download() {
  window.location.replace("https://drive.google.com/file/d/11D01uitlnqth8Sfw8qb7q-ZTWRXZW2x9/view?usp=sharing");
  return null;
}

function LinkedIn() {
  window.location.replace('https://www.linkedin.com/in/ted-h-zhang');
  return null;
}

function Github() {
  window.location.replace('https://github.com/tedhz');
  return null;
}


export default App;
