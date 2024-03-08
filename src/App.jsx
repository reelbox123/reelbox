// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {

  return (
    <>
      <LandingPage/>
    </>
  )
}

export default App
