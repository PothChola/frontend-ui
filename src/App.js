import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
