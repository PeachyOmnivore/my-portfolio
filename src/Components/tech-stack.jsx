export default function TechStack() {
    return (
        <>
            <div className=" main backgroundImageMotherboard backgroundImageSizing"></div>
            <section className="main tech-stack-container matchImage">
                <div>
                    <h1>Tech Stack</h1>
                    <br />
                    <ul className="techStack">
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"><img className="techSvgs" src='assets/svgs/HTML5.svg' alt="HTML5" /></a>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"> <img className="techSvgs" src='assets/svgs/CSS.svg' alt="CSS" /></a>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"> <img className="techSvgs" src='assets/svgs/JS.svg' alt="Javascript" /></a>
                        </li>
                        <li>
                            <a href="https://nodejs.org/en/"><img className="techSvgs" src='assets/svgs/NODEJS.svg' alt="NodeJS" /></a>
                        </li>
                        <li>
                            <a href="https://www.postgresql.org"><img className="techSvgs" src='assets/images/elephant.png' alt="PostgreSQL" /></a>
                        </li>
                        <li>
                            <a href="https://expressjs.com"><img className="techSvgs" src='assets/images/express-js.png' alt="Express" /></a>
                        </li>
                        <li>
                            <a href="https://www.prisma.io"><img className="techSvgs" src='assets/images/prismaHD.png' alt="Prisma" /></a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}