import React from 'react';
import Me from "../assets/small/colorSplash.jpg"

const AboutMe = () => {
        return <div className="AboutMe">
            <h1>About Me!</h1>
            <p>Welcome to my Portfolio! I am currently learning to be a Web Developer from the University of Utah's online bootcamp course. The Course took 6 months and I learned many things every week and I applied that knowledge to complete challenges that were due every week for 24 weeks. It's been challenging but I enjoyed it all and meeting new people. My goal after this, is to learn more and perfect everything that I didn't really understand after this course is complete.
                    
                    {/* I am currently a student at University of Utah, taking a Full Stack Web Developing Bootcamp course. The past 13 years I have enjoyed being a stay-at-home mother and since my kids are growing and have started school, I decided now would be the best time
                to go back to school for something I like doing. Raised in Utah, I had made the decision to move to a small town in Colorado in 2005 and thats where I met my husband and where we started a family. We lived there off and on for 12 years
                while moving around to other places like San Tan Valley, AZ and Glendora, CA. We moved to Utah in 2017 and we love it here so there are no plans to move anywhere else. I love hiking, camping, being in the mountains. I have a passion for photography, puzzles, crafting, black and white photos, and spending quality time with my family. */}
                </p>
                <img src={Me} className="me" style={{ width: "100%" }} alt="just me" />
        </div>
}
export default AboutMe;