import Home from "./pages/Home"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Services from "./pages/Services"
import PricingPage from "./pages/Pricing"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"


function App() {


  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<About /> } />
      <Route path="/contact" element={<ContactUs /> } />

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
