import { Link } from "react-router-dom"


export default function LeftNav() {
    return (
        <div >
            <ul className="left-nav-list">
                <li><Link className="links" to={"/"}>HOME</Link></li>
                <li><Link className="links" to={"/about-me"}>ABOUT ME</Link></li>
                <li><Link className="links" to={"/projects"}>PROJECTS</Link></li>
                <li><Link className="links" to={"/education-experience"}>EDUCATION</Link></li>
                <li><Link className="links" to={"/tech-stack"}>TECH STACK</Link></li>
                <li><Link className="links" to={"/message"}>MESSAGE ME</Link></li>
            </ul>
        </div>
    )
}