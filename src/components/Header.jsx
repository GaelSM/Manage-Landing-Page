import hamburger from "../assets/icon-hamburger.svg"
import close from "../assets/icon-close.svg"
import logo from "../assets/logo.svg"
import { useState} from "react"
import "./Header.css"

export default function Header(){
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen(prev => !prev)


    return (
        <header>
            <img src={logo} alt="Manage Logo" />
            <div className={isOpen ? "mobile-container show" : "mobile-container"}>
                <ul>
                    <li> Pricing </li>
                    <li> Product </li>
                    <li> About Us </li>
                    <li> Careers </li>
                    <li> Community </li>
                </ul>
            </div>
            <button className="get-started"> Get Started </button>
            <img 
                src={isOpen ? close : hamburger } 
                alt="Hamburger Icon" 
                className={isOpen ? "close" : "hamburger"} 
                onClick={handleClick}
            />
        </header>
    )
}