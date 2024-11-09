import '../styles/Home.css'
import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";

function Header () {
    
    return (
            
            <div className="header">
                <nav>
                    <Link to="home"><a><b>Home</b></a></Link>
                    <Link to="discover"><a><b>Discover-me</b></a></Link>
                    <Link to="cv"><a><b>Resume</b></a></Link>
                    <Link to="projects"><a><b>Projects</b></a></Link>
                    <Link to="contact"><a><b>Contact</b></a></Link>
                </nav>
                <main>
                    <Outlet />
                </main>
            </div>
            
    );
}

export default Header;
