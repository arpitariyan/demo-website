import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home page/Home.js';
import 'leaflet/dist/leaflet.css';
import About from './pages/About page/About.js';
import Services from './pages/Service page/Service.js';
import Contact from './pages/Contact us/Contact.js';



function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<><Header /><Home /><Footer /></>} />
          <Route path='/About' element={<><Header /><About /><Footer /></>} />
          <Route path='/Service' element={<><Header /><Services /><Footer /></>} />
          <Route path='/Contact' element={<><Header /><Contact /><Footer /></>} />

        </Routes>

      </BrowserRouter>

    </>

  );

}

export default App;
