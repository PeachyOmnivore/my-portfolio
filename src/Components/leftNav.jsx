import { Link } from "react-router-dom"
import { ChangeClassColour } from "../client"



export default function LeftNav() {

    return (
        <div >
            <ChangeClassColour/>
            <ul className="left-nav-list">
                <li><Link className="links babyBlue" to={"/"}>HOME</Link></li>
                <li><Link className="links navyBlue" to={"/about-me"}>ABOUT ME</Link></li>
                <li><Link className="links forestGreen" to={"/projects"}>PROJECTS</Link></li>
                <li><Link className="links burntRed" to={"/education-experience"}>EDUCATION</Link></li>
                <li><Link className="links peach" to={"/tech-stack"}>TECH STACK</Link></li>
                <li><Link className="links cream" to={"/message"}>MESSAGE ME</Link></li>
            </ul>
        </div>
    )
}