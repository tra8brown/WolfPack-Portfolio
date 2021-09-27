import React, { useState } from 'react';
import Nav from './NavBar';
// import Home from './Home';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import Portfolio from './Portfolio';


function MainPage() {
  const [currentPage, handlePageChange] = useState('Home');
 

  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        // return <Home />;
        return <AboutMe />;
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