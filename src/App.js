import React from "react";
import './App.scss';
// import ContactSection from './components/ContactSection.js';
// import SectionTitle from './components/SectionTitle';
import Folder from './components/Folder/Folder.jsx';

// import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
   return(
    <div className="App">
    
    <Folder/>
    {/* <SectionTitle heading='Contact Us'
            subheading='Get in Touch'/> */}
    </div>
   );
}

export default App;
