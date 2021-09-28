import React from "react";
import Family from '../assets/small/familyPic.jpg';

export default function Home() {
    return <div>
      <h1>Home</h1>
      <p>
        Welcome to my Portfolio! Currently going to school to be a Web Developer from the University of Utah's online bootcamp course. The Course took 6 months and I learned and applied what I learned every week for the past 24 weeks to learn backend and front end websites. It's been challenging but I enjoyed it and will strive to learn more and review everything that I didn't really understand after this course is complete.
      </p>
      <img src={Family} alt='My Family Photo' className="family"></img>
      </div>
}
