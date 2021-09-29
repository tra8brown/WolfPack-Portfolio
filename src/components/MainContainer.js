import React, { useState } from 'react';
import Nav from './NavBar';
import HomeTab from './Home';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Footer from './Footer';



function MainPage() {
  const [currentPage, handlePageChange] = useState('Home');
 
  const renderPage = () => {
    switch (currentPage) {
      case 'HomeTab':
        return <HomeTab />;
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      case 'Footer':
        return <Footer />;
      default:
        return <HomeTab />;
    }
  };
  

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default MainPage;