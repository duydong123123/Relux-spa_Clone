import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Section from './components/Section';
import Services from './components/Services';
import RelaxSection from './components/RelaxSection';
import MeetOurTeam from './components/MeetOurTeam';
import Footer from './components/Footer';
import PagesServices from './pages/services/PagesServices';
import SpaPrograms from './pages/spaprogram/SpaPrograms';
import Massages from './pages/massages/Massages';
import Facial from './pages/facials/Facials';
import Body from './pages/body/Body';
import Pagesimage from './pages/pageimages/Pagesimage';
import ContactPage from './pages/contact/ContactPage';
// import useSearch from './hook/useSearch';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Section />
              <Services />
              <RelaxSection />
              <MeetOurTeam />
            </>
          } />
          <Route path="/services" element={<PagesServices />} />
          <Route path="/spa-programs" element={<SpaPrograms />} />
          <Route path="/massage-therapy" element={<Massages />} />
          <Route path="/facial-treatments" element={<Facial />} />
          <Route path="/body-treatments" element={<Body />} />
          <Route path="/pages" element={<Pagesimage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;