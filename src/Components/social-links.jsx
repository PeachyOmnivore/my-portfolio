import { useNavigate } from "react-router-dom"

export default function Socials() {
const navigate = useNavigate()

    return (
        <nav>
            <ul className="socialsNav">
                <li>
                    <a href="https://github.com/PeachyOmnivore"><img src='assets/svgs/GitHub.svg' className="socialsSvg" alt="GitHub"></img></a>
                </li>
                 <li>
                    <a href="https://www.linkedin.com/in/lukas-dembicki"><img className="socialsSvg" src='assets/svgs/LinkedIn.svg' alt="LinkedIn" /></a>
                </li> 
                 <li>
                    <a href="https://www.instagram.com/peachyomnivore/"><img className="socialsSvg" src='assets/svgs/Instagram.svg' alt="Instagram" /></a>
                </li> 
                 <li>
                    <a onClick={ ()=> navigate('/message')} ><img className="socialsSvg" src='assets/svgs/Email.svg' alt="Email" /></a>
                </li> 
            </ul>
        </nav>
    )
}