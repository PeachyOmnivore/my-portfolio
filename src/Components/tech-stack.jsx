import { HTML5, CSS, REACT, JS, NODEJS } from "../assets/icons.jsx"

export default function TechStack() {
    return (
        <>
            <div className=" main backgroundImageMotherboard "></div>
            <section className="main tech-stack-container">
                <div>
                    <h1>Tech Stack</h1>
                    <br />
                    <ul className="techStack">
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"><img className="techSvgs" src={HTML5} alt="HTML5" /></a>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"> <img className="techSvgs" src={CSS} alt="CSS" /></a>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"> <img className="techSvgs" src={REACT} alt="Javascript" /></a>
                        </li>
                        <li>
                            <a href="https://nodejs.org/en/"><img className="techSvgs" src={JS} alt="NodeJS" /></a>
                        </li>
                        <li>
                            <a href="https://react.dev"><img className="techSvgs" src={NODEJS} alt="React" /></a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}