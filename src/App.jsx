import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Events from './pages/Events';
import Learning from './pages/Learning';
import Journals from './pages/Journals';
import Gallery from './pages/Gallery';
import Customers from './pages/Customers';
import Contact from './pages/Contact';
import './main.css';

function App() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/events" element={<Events />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/journals" element={<Journals />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

