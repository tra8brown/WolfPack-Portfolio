import React from "react"
import { NavLink } from "react-router-dom";
export default function NavBar() {
    return ( < header >
        <
        div >
        <
        nav >
        <
        NavLink to = "/"
        exact >
        Tracee <
        /NavLink>  <
        NavLink to = "/about" >
        About Me <
        /NavLink>  <
        NavLink to = "/portfolio" >
        Portfolio <
        /NavLink>  <
        NavLink to = "/contact" >
        Contact <
        /NavLink>  <
        NavLink to = "/resume" >
        Resume <
        /NavLink>  <
        /nav>  <
        /div>  <
        /header>
    )
}