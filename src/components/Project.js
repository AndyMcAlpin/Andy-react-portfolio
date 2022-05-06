import React, { useState } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import Resume from './pages/Resume.js';

function Project() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    } else if (currentPage === 'Contact') {
      return <Contact />
    } else {
      return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
      {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Project;