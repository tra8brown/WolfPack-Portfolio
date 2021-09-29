import React from "react";
import Proj3 from '../assets/projects/LetsParty.jpg';
import Proj2 from '../assets/projects/Ramble-On.png';
import Proj1 from '../assets/projects/QuoteGenerator.png';
import PasswordG from '../assets/projects/PasswordGenerator.png';
import Schedular from '../assets/projects/WorkDaySchedular.png';
import RBuddy from '../assets/projects/RunBuddy.png';

export default function Portfolio() {
    return ( 
        <>
    <h1 className="portfolio"> Portfolio Page! </h1>
    <p className="portfolio"> These are some of the projects and challenges I have worked on.</p>
    <div>
        <br></br>
        <p>Group Project 3<img src={Proj3} alt='Lets-Party' className="LetsParty" width="1000" height="500"></img>{/* <a href="tbd">•</a> */}<a href="https://github.com/mattbisbee/lets-party/tree/develop">👉Git repo</a></p>
        <br></br>
        <p>Group Project 2<img src={Proj2} alt='Ramble-On' className="RambleOn" width="1000" height="500"></img><a href="http://rocky-bayou-69146.herokuapp.com/">👉RambleOn</a><a href="https://github.com/asa-grace/ramble-on">👉Git repo</a></p>
        <br></br>
        <p>Group Project 1<img src={Proj1} alt='QuoteGenerator' className="QuoteG" width="1000" height="500"></img><a href="https://asa-grace.github.io/Quote-Generator/">👉QuoteGenerator</a><a href="https://github.com/asa-grace/Quote-Generator">👉Git repo</a></p>
        <br></br>
        <p> Challenge.Three<img src={PasswordG} alt='Password Generator' className="PasswordG" width="1000" height="500"></img><a href="https://tra8brown.github.io/absolute_willow/">👉Password Generator</a><a href="https://github.com/tra8brown/absolute_willow">👉Git repo</a></p>
        <br></br>
        <p>Challenge...Five<img src={Schedular} alt='Work day schedular' className="Schedular" width="1000" height="500"></img><a href="https://tra8brown.github.io/forrest-water/">👉Work Day Schedular</a><a href="https://github.com/tra8brown/forrest-water">👉Git repo</a></p>
        <br></br>
        <p>Week one Lesson<img src={RBuddy} alt='run buddy' className="RBuddy" width="1000" height="500"></img><a href="https://tra8brown.github.io/run-buddy">👉Run Buddy</a><a href="https://github.com/tra8brown/run-buddy">👉Git repo</a></p>
    </div>
</>    
)
}


