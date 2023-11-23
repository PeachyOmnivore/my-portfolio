import {GitHub, Email, Instagram, LinkedIn} from "../assets/icons.jsx"

export default function Socials() {
    return (
        <nav>
            <ul className="socialsNav">
                <li>
                    <a href="#"><img className="svg" src={GitHub} alt="GitHub" /></a>
                </li>
                <li>
                    <a href="#"><img className="svg" src={LinkedIn} alt="LinkedIn" /></a>
                </li>
                <li>
                    <a href="#"><img className="svg" src={Instagram} alt="Instagram" /></a>
                </li>
                <li>
                    <a href="#"><img className="svg" src={Email} alt="Email" /></a>
                </li>
            </ul>
        </nav>
    )
}