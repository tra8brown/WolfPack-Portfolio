import React from 'react';
import Family from "../assets/small/IceCaves.jpg"

const AboutMe = () => {
        return <div className="AboutMe">
            <h1>About Me!</h1>
            <p>I am currently a student at University of Utah, taking a Full Stack Web Developing Bootcamp course. The past 13 years I have enjoyed being a stay-at-home mother and since my kids are growing and have started school, I decided now would be the best time
                to go back to school for something I like doing. Raised in Utah, I had made the decision to move to a small town in Colorado in 2005 and thats where I met my husband and where we started a family. We lived there off and on for 12 years
                while moving around to other places like San Tan Valley, AZ and Glendora, CA. We moved to Utah in 2017 and we love it here so there are no plans to move anywhere else. I love hiking, camping, being in the mountains. I have a passion for photography, puzzles, crafting, black and white photos, and spending quality time with my family.</p>
                <img src={Family} className="my-2" style={{ width: "100%" }} alt="family pic" />
        </div>
}
export default AboutMe;