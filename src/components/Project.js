import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

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
      <Header>
        <Navigation></Navigation>
      </Header>
      <main>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Project;