import {GitHub, Email, Instagram, LinkedIn} from "../assets/icons.jsx"

export default function Socials() {
    return (
        <nav>
            <ul className="socialsNav">
                <li>
                    <a href="https://github.com/PeachyOmnivore"><img className="socialsSvg" src={GitHub} alt="GitHub" /></a>
                </li>
                <li>
                    <a href="www.linkedin.com/in/
lukas-dembicki-4a4846251
"><img className="socialsSvg" src={LinkedIn} alt="LinkedIn" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/peachyomnivore/"><img className="socialsSvg" src={Instagram} alt="Instagram" /></a>
                </li>
                <li>
                    <a href="mailto:lad_777@hotmail.com"><img className="socialsSvg" src={Email} alt="Email" /></a>
                </li>
            </ul>
        </nav>
    )
}