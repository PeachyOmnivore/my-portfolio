import { AllProjects } from "../AllProjects"

export default function Projects() {
    return (
        <>
            <div className=" main backgroundImageTech backgroundImageSizing "></div>
            <section className="main projects-container matchImage">
                {AllProjects.map((project) => (
                    <div key={project.id + project.name} className="card">
                        <h1>{project.name}</h1>
                        <img src={project.image}  width="200px" alt="" />
                        <p>{project.description}</p>
                        <a href={project.gitRepo}>GitHub Repo</a>
                        <a href={project.website}>Website</a>
                    </div>
                ))}
            </section>
        </>
    )
}