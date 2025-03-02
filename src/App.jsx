import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AlcoholBrandList from './pages/alcohol-brand-list/AlcoholBrandList'
import Contact from './pages/contact/Contact'
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy'
import TermsAndConditions from './pages/terms-and-conditions/TermsAndConditions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/brand-list" element={<AlcoholBrandList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App