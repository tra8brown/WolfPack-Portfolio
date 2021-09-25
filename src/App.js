import React from 'react';
import AboutMe from './components/AboutMe';
import './App.css';

function app () {
    return(
        <div>
            <main>
                <AboutMe></AboutMe>
            </main>
        </div>
    );
}

export default app;
// import {
//     BrowserRouter,
//     Route,
//     Switch
// } from "react-router-dom";
// import Portfolio from "./components/Portfolio";
// import AboutMe from "./components/AboutMe";
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";
// import NavBar from './components/NavBar';
// //import logo from './logo.svg';
// //import './App.css';

// function App() {
//     return ( <BrowserRouter >
//         <NavBar / >
//         <Switch >
//         <Route component = { Portfolio }path = '/'exact / >
//         <Route component = { AboutMe }path = '/AboutMe' / >
//         <Route component = { Contact }path = '/Contact' / >
//         <Route component = { Resume }path = '/Resume' / >
//         </Switch>    
//         </BrowserRouter>
//     )
// }

