import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter className="App">
      <div className='wrap'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
