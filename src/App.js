import { Routes, Route } from 'react-router';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';

import Layout from './components/Layout/Layout'
import Projects from './components/Projects';



function App() {
  return (
    
    <Routes>
      
      <Route path="/" element={< Layout/>} >

      <Route index element={< Home />} />

        <Route path="/home" element={< Home />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/contact" element={< Contact />} />



      </Route>



    </Routes>
    
  );
}

export default App;
