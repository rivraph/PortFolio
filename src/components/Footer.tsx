import reactLogo from '../assets/react.svg'
import '../App.css'
import { useState } from 'react'

function Footer () {
    
    
    return (
        <>
        <div className="footer">
        <a href="https://react.dev" target="_blank" className="react">
        <img src={reactLogo}  alt="React logo" /></a>
            <p className="read-the-docs"><b>Powered by REACT</b></p>
            <p><b> © RR development </b></p>
            <p><b>Merci à Freepik</b></p>
            <p href="https://www.instagram.com/therrelylifephotography/"><b> © therrelylifephotgraphie </b></p>
        </div>
        </>
    );
}

export default Footer;