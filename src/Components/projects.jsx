import { AllProjects } from "../AllProjects"

export default function Projects() {

    const noWebsite = (project) => {
        if (!project.website) {
            return "Coming Soon"
        } else {
            return <a href={project.website}>Website</a>
        }
    }


    return (
        <>
            <div className=" main backgroundImageTech backgroundImageSizing "></div>
            <section className="main projects-container matchImage">
                {AllProjects.map((project) => (
                    <div key={project.id + project.name} className="card">
                        <h1>{project.name}</h1>
                        <img src={project.image} width="200px" alt="" />
                        <p>{project.description}</p>
                        <a href={project.gitRepo}>GitHub Repo</a>
                        {noWebsite(project)}
                    </div>
                ))}
            </section>
        </>
    )
}