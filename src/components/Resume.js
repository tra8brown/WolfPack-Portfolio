import React from "react"
import ResumeLink from "../assets/small/Updated Resume.pdf";

export default function Resume() {
    return <main>
        <h1 className="resume"> Welcome to my Resume Page! </h1>
        <p className="resume">Proficiency Skills:</p>
        <ul className="proficiency">
            <li>Strong creative ability💪 </li>
            <li>Attention to detail💪 </li>
            <li>Excellent problem solving skills💪 </li>
            <li>Keen interest in technology💪 </li>
            </ul>
        <p>Here's the link to my downloadable resume</p>
        <div>
            <a href={ResumeLink} target='_blank' rel="noreferrer">👉Resume</a>
        </div>
        </main>
}