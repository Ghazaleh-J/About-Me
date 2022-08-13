// import React, { useState } from 'react';
import About from './About';
// import Project from './Project';
// import Contact from './Contact';
// import Resume from './Resume';
import Nav from './Nav'




export default function Header(){
    // const [currentPage, setCurrentPage] = useState('About');
    // const renderPage = () => {
    //     if (currentPage === 'About') {
    //       return <About />;
    //     }
    //     if (currentPage === 'Project') {
    //       return <Project />;
    //     }
    //     if (currentPage === 'Contact') {
    //       return <Contact />;
    //     }
    //     return <Resume />;
    //   };
    //   const handlePageChange = (page) => setCurrentPage(page);

    return (
        <header>
          <Nav />
          <About />
            {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            {/* {renderPage()} */}
        </header>

    );

}