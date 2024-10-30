import reactLogo from '..react.svg'
import '../App.css'
import { useState } from 'react'

interface personalityDatasProps {
    lastName: string,
    firstName: string,
    personality: string,
    hobbies: string,
    age: number,
    city: string,
    adress: string,
    title: string,
}


function Header ({lastName, firstName, personality, hobbies, age, city, adress, title} : personalityDatasProps) {
    const handleClickCv = () => {
        window.open("../assets/curriculum vitae dev.pdf");
       }
    const handleClickDiscoverMe = () => {
        window.alert(`I m ${lastName} firstName`)
    }
    
    return (
            
            <div className="header">
                <nav>
                    <button><a onClick={() => handleClickDiscoverMe()}><b>Discover-me</b></a></button>
                    <button><a onClick={() => handleClickCv()}><b>Resume</b></a></button>
                    <button><a><b>Projects</b></a></button>
                    <button><a><b>Contact</b></a></button>
                </nav>
            </div>
            
    );
}

export default Header;

//<select>
//<option value="0"></option>
//<option value="1">Projet 1</option>
//<option value="2">Projet 2</option>
//<option value="3">Projet 3</option>    
//</select>  