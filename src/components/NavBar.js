import React from 'react';
// import { NavLink } from 'react-router-dom';
import Teescho from '../assets/cover/teescho.jpg';


export default function Nav(props) {
  const tabs = ['Home', 'AboutMe', 'Portfolio', 'Contact', 'Resume'];
  return (
    <header>
      <nav className="navbar">
        <h1>Tracee Brown</h1>
        <ul className="nav ">
          {tabs.map(tab => (
            <li key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
              >
              {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <img className="teescho" src={Teescho} alt='B&W trees'></img>
    </header>
  );
}

// export default Nav;




// import React from "react"
// import { NavLink } from "react-router-dom";
// export default function NavBar() {
//     return ( 
//     <header className = "bg-red-600" >
//         <div className = "container mx-auto flex justify-between" >
//         <nav className = "flex" >
//         <NavLink to = "/" exact activeClassName = "text-white"
//         className = "inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest" >
//         Tracee </NavLink>    
//         <NavLink to = "/about" className = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" >
//         About Me </NavLink>     
//         <NavLink to = "/portfolio"
//         className = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" >
//         Portfolio </NavLink>     
//         <NavLink to = "/contact" className = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" >
//         Contact </NavLink>     
//         <NavLink to = "/resume" className = "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" >
//         Resume </NavLink>     
//         </nav >  
//         </div>     
//         </header >
//     )
// }