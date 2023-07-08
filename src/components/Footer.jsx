import logo from "../assets/logo-white.svg"
import { useState } from "react"
import "./Footer.css"

export default function Footer() {

    const [isInvalid, setIsInvalid] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const { email } = Object.fromEntries(new FormData(e.target))

        let RegExp = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/

        if (!RegExp.test(email) || email === "") return setIsInvalid(true)
        return setIsInvalid(false)
    }

    return (
        <footer>
            <article className="social">
                <img src={logo} alt="Manage Logo" />
                <div>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </article>
            <ul className="first-ul">
                <li> Home </li>
                <li> Pricing </li>
                <li> Products </li>
                <li> About Us </li>
            </ul>
            <ul className="second-ul">
                <li> Careers </li>
                <li> Community </li>
                <li> Privacy Policy </li>
            </ul>
            <form onSubmit={handleSubmit} className={isInvalid ? "error" : ""}>
                <input type="text" placeholder="Updates in your inbox..." name="email" autoComplete="off" />
                <button> Go </button>
                <p> Please insert a valid email </p>
            </form>
            <article className="copy">
                <p> Copyright 2020. All Rights Reserved </p>
            </article>
        </footer>
    )
}