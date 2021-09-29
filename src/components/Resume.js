import React from "react"
import ResumeLink from "../assets/small/Updated Resume.pdf";

export default function Resume() {
    return <main>
        <h1> Welcome to my Resume Page! </h1>
        <p>Proficiency Skills:</p>
        <ul>
            <li>💪 strong creative ability</li>
            <li>💪 attention to detail</li>
            <li>💪 excellent problem solving skills</li>
            <li>💪 keen interest in technology</li>
            </ul>
        <p>here's the link to my downloadable resume</p>
        <div>
            <a href={ResumeLink} target='_blank'>Resume</a>
        </div>
        </main>
}