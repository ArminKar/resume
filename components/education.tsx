import { ISchoolEntity } from "../data/data";

interface EducationProps {
    data: ISchoolEntity[];
}

const Education = ({ data }: EducationProps) => {
    return (
        <>
            <h3>Education</h3>
            <article className="Education">
                {
                    data.map((entity, index) => (
                        <div key={`entity_${index}`} className="Education-entity">
                            <div className="Education-entity-place">
                                <img src={entity.logo} alt={entity.name} />
                                <h6 className="Education-entity-name">{entity.name}</h6>
                            </div>
                            <div className="Education-entity-details">
                                <span className="Education-entity-subject">{entity.title}</span>
                                <span className="Education-entity-duration">{entity.duration}</span>
                            </div>
                        </div>
                    ))
                }
            </article>
            <style jsx>
                {`
                    .Education {
                        display: flex;
                        flex-direction: column;
                        padding-bottom: 3rem;
                        padding: 0 1rem;
                    }

                    .Education-entity {
                        margin: 1rem 0;
                    }

                    .Education-entity-place {
                        display: flex;
                        align-items: center;
                    }

                    .Education-entity img {
                        max-height: 45px;
                        max-width: 80px;
                    }

                    .Education-entity-name {
                        margin-left: .5rem;
                    }

                    .Education-entity-details {
                        display: flex;
                        flex-direction: column;
                        margin-top: .5rem;
                    }

                    .Education-entity-duration{
                        opacity: .8;
                        font-size: .8rem;
                        align-self: flex-end;
                    }

                    @media (max-width: 767px) {
                        .Education-entity-place {
                            flex-wrap: wrap;
                        }
            
                        .Education-entity img {
                            max-height: 30px;
                            max-width: 60px;
                        }

                        .Education-entity-details {
                            margin-top: .5rem;
                        }
                        
                        .Education-entity-duration {
                            align-self: flex-start;
                        }
                    }
                `}
            </style>
        </>
    );
}

export default Education;