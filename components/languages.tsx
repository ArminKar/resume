import { ILanguage } from "../data/data";

interface LanguagesProps {
    data: ILanguage[];
}

const Languages = ({ data }: LanguagesProps) => {
    return (
        <>
            <h3>Languages</h3>
            <article className="Languages">
                {
                    data.map((language, index) => (
                        <div key={`language_${index}`} className="Languages-language">
                            <img src={language.icon} />
                            <h6 className="Languages-language-name">{language.name}</h6>
                            <span className="Languages-language-level">{language.level}</span>
                        </div>
                    ))
                }
            </article>
            <style jsx>
                {`
                    .Languages {
                        display: flex;
                        flex-direction: column;
                        padding: 0 1rem;
                        padding-bottom: 3rem;
                    }

                    .Languages-language {
                        margin: .5rem 0;
                    }

                    .Languages-language img {
                        width: 20px;
                        margin-right: .5rem;
                    }
                    
                    @media only screen and (max-width: 768px) {
                        .Languages-language img {
                          width: 16px;
                        }
                      
                        .Introduction {
                          flex-direction: column;
                          text-align: center;
                        }
                      
                        .Introduction-avatar {
                          margin-bottom: 1rem;
                        }
                      
                        .Introduction-wrapper {
                          padding: 1rem;
                        }
                    }
                `}
            </style>
        </>
    );
}

export default Languages;