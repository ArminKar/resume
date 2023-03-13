import { IWork } from "../data/data";

interface ExperienceProps {
    data: IWork[];
}

const Experience = ({ data }: ExperienceProps) => {
    return (
        <>
            <h3>Experience</h3>
            <article className="Experience">
                {data.map((work, index) => (
                        <div key={`work_${index}`} className="Experience-work">
                            {!!work.description.length && ( 
                            <ul className="Experience-work-description">
                                {work.description.map((point, index) => (
                                    <li key={`point_${index}`} >{point}</li>
                                ))}
                                </ul>
                                )}
                            </div>
                    ))}
            </article>
            <style jsx>
                {`
                    .Experience {
                        display: flex;
                        flex-direction: column;    
                        padding: 0 1rem;
                    }
                    .Experience-work {
                        display: flex;
                        flex-direction: column;
                        padding: 3rem 0;
                    }
                    .Experience-work:first-child{
                        padding-top: 0;

                    }
                `}
            </style>
        </>
    );
}

export default Experience;