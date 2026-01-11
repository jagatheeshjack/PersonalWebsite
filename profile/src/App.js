import React, { useState, useEffect } from "react";
import "./App.css";
import "./pages/Testimonials.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import TypingIntro from "./components/TypingIntro";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Close sidebar on nav click (mobile)
  const handleNavClick = () => setSidebarOpen(false);
  // Lock scroll when sidebar is open (mobile)
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);
  return (
    <div className={`container${sidebarOpen ? ' sidebar-open' : ''}`}>
      <button className="hamburger" aria-label="Open navigation" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`} onClick={() => setSidebarOpen(false)}>
        <div className="profile-pic">
          <img src="Profile.jpeg" alt="Jagatheesh K" />
        </div>
        <h1 className="name">Jagatheesh K</h1>
        <div className="social-icons">
          <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/jagatheesh-k-7321b020a" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
        <nav className="nav-menu" onClick={e => e.stopPropagation()}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={handleNavClick}><i className="fas fa-home"></i> Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={handleNavClick}><i className="fas fa-user"></i> About</Link>
          <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""} onClick={handleNavClick}><i className="fas fa-file-alt"></i> Resume</Link>
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""} onClick={handleNavClick}><i className="fas fa-briefcase"></i> Portfolio</Link>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={handleNavClick}><i className="fas fa-cogs"></i> Services</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={handleNavClick}><i className="fas fa-envelope"></i> Contact</Link>
        </nav>
      </aside>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
