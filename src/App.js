import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Routes/Home';
import Service from './Routes/Service';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
