import {GitHub, Email, Instagram, LinkedIn} from "../assets/icons.jsx"

export default function Socials() {
    return (
        <nav>
            <ul className="socialsNav">
                <li>
                    <a href="#"><img className="SocialsSvg" src={GitHub} alt="GitHub" /></a>
                </li>
                <li>
                    <a href="#"><img className="SocialsSvg" src={LinkedIn} alt="LinkedIn" /></a>
                </li>
                <li>
                    <a href="#"><img className="SocialsSvg" src={Instagram} alt="Instagram" /></a>
                </li>
                <li>
                    <a href="#"><img className="SocialsSvg" src={Email} alt="Email" /></a>
                </li>
            </ul>
        </nav>
    )
}