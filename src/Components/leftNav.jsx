import { Link } from "react-router-dom"
import { ChangeClassColour } from "../client"



export default function LeftNav() {

    return (
        <div >
            <ChangeClassColour/>
            <ul className="left-nav-list">
                <li><Link className="links rawBabyBlue" to={"/"}>HOME</Link></li>
                <li><Link className="links rawNavyBlue" to={"/about-me"}>ABOUT ME</Link></li>
                <li><Link className="links rawForestGreen" to={"/projects"}>PROJECTS</Link></li>
                <li><Link className="links rawBurntRed" to={"/education-experience"}>EDUCATION</Link></li>
                <li><Link className="links rawPeach" to={"/tech-stack"}>TECH STACK</Link></li>
                <li><Link className="links rawCream" to={"/message"}>MESSAGE ME</Link></li>
            </ul>
        </div>
    )
}