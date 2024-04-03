import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import Moola from './pages/Moola.jsx'
import ContactUs from './pages/contactUs.jsx';
import Passabi from './pages/Passabi';
import FAQ from './pages/Faq.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
AOS.init();
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route index element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/moola" element={<Moola />} />
        <Route path="/passabi" element={<Passabi />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
