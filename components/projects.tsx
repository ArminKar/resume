import { IProject } from "../data/data";

interface Projectsprops {
    data: IProject[];
}

const Projects = ({ data }: Projectsprops) => {
    return (
        <>
            <h3>Projects</h3>
            <article className="Projects">
                {
                    data.map((project, index) => (
                        <div key={`project_${index}`} className="Projects-project">
                            <img src={project.icon} />
                            <a href={project.link} target="_blank">{project.name}</a>
                        </div>
                    ))
                }
            </article>
            <style jsx>
                {`
                    .Projects {
                        display: flex;
                        flex-direction: column;
                        padding: 0 1rem;
                        padding-bottom: 3rem;
                    }

                    .Projects-project {
                        margin: .5rem 0;
                    }

                    .Projects-project img{
                        width: 20px;
                        margin-right: .5rem;
                    }
                    
                     @media only screen and (max-width: 768px) {
                        .Projects-project img{
                            width: 16px;
                        }
                    }
                `}
            </style>
        </>
    );
}

export default Projects;