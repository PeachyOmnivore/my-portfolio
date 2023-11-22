import { Link } from "react-router-dom"


export default function LeftNav() {
    return (
        <div className="left-nav">
            <ul>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/about-me"}>ABOUT ME</Link></li>
                <li><Link to={"/projects"}>PROJECTS</Link></li>
                <li><Link to={"/education-experience"}>EDUCATION</Link></li>
                <li><Link to={"/tech-stack"}>TECH STACK</Link></li>
                <li><Link to={"/message"}>MESSAGE ME</Link></li>
            </ul>
        </div>
    )
}