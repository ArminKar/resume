import { ISkill } from "../data/data";

interface SkillsProps {
    data: ISkill[];
}

const Skills = ({ data }: SkillsProps) => {
    return (
        <>
            <h3>Used stacks</h3>
            <article className="Skills">
                {data.map((skill, index) => (
                    <div className="Skills-skill" key={`skill_${index}`} >
                        <img src={skill.icon} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </article>
            <style jsx>
                {`
                    .Skills {
                        display: flex;
                        flex-direction: column;
                        padding: 0 1rem;
                        padding-bottom: 3rem;
                    }

                    .Skills-skill {
                        display: flex;
                        align-items: center;
                        margin: .5rem 0;
                    }

                    .Skills-skill img {
                        width: 20px;
                        margin-right: .5rem;
                    }

                    @media only screen and (max-width: 768px) {
                        .Skills-skill img {
                            width: 16px;
                        }
                    }
                `}
            </style>
        </>
    );
}

export default Skills;