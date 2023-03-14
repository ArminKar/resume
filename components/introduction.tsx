import { IIntroduction } from "../data/data";

interface IntroductionProps {
    data: IIntroduction;
}

const Introduction = ({ data }: IntroductionProps) => {
    return (
        <>
            <article className="Introduction">
                <img className="Introduction-avatar" src={data.avatar} />
                <div className="Introduction-wrapper">
                    <h1 className="Introduction-name">{data.name}</h1>
                    <h2 className="Introduction-title">{data.position}</h2>
                    <p className="Introduction-description">{data.description}</p>
                    <span className="Introduction-location">{data.location}</span>
                </div>
            </article>
            <style jsx>
                {`
                    .Introduction {
                        background-color: #d0d3d9;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        padding: 3rem 0;
                        margin: 0 1rem;
                    }

                    .Introduction-avatar {
                        width: 200px;
                        height: 200px;
                        padding: 0 2rem;
                        border-radius: %;
                        margin: auto;
                    }

                    .Introduction-wrapper {
                        padding: 1rem 2rem;
                        flex: 1 350px;
                    }

                    .Introduction-name {
                        font-size: 3rem;
                    }

                    .Introduction-title {
                        font-size: 1.2rem;
                        margin-top: .5rem;
                    }
                    
                    @media (max-width: 768px) {
                        .Introduction {
                            flex-direction: column;
                            align-items: center;
                            padding: 2rem 0;
                        }
            
                        .Introduction-avatar {
                            margin-bottom: 2rem;
                            padding: 0;
                        }
            
                        .Introduction-wrapper {
                            text-align: center;
                            padding: 0 1rem;
                        }
            
                        .Introduction-name {
                            font-size: 2rem;
                            margin-bottom: .5rem;
                        }
            
                        .Introduction-title {
                            font-size: 1rem;
                            margin-top: 0;
                        }
                    }      
                `}
            </style>
        </>
    );
}

export default Introduction;