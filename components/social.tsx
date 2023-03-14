import { ISocial } from "../data/data";

interface SocialProps {
    data: ISocial[];
}

const Social = ({ data }: SocialProps) => {
    return (
        <>
            <h3>My social accounts</h3>
            <article className="Social">
                {
                    data.map((social, index) => (
                        <div className="Social-type" key={`skill_${index}`} >
                            <img src={social.icon} />
                            <a href={social.link} target="_blank">{social.name}</a>
                        </div>
                    ))
                }
            </article>
            <style jsx>
                {`
                    .Social {
                        display: flex;
                        flex-direction: column;    
                        padding: 0 1rem;
                        padding-bottom: 3rem;
                    }

                    .Social-type {
                        display: flex;
                        align-items: center;
                        margin: .5rem 0;
                    }

                    .Social-type img {
                        width: 20px;
                        margin-right: .5rem;
                    }

                    .Social-type a {
                        text-decoration: none;
                        color: black;
                    }

                    @media only screen and (max-width: 768px) {
                        .Social-type img {
                            width: 16px;
                        }
                    }
                `}
            </style>
        </>
    );
}

export default Social;