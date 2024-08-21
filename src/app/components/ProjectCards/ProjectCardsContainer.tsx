import projectData from "./projectData";
import styles from "./ProjectCards.module.css"
import ProjectSkill from "@/app/components/ProjectCards/ProjectSkill";

const ProjectCardsContainer = () => {
    return (
        <div className={styles.cardContainer}>
            {projectData.map((data, key) =>
                <div className={styles.card} key={key}>
                    <a href={data.link} target="_blank">
                        <img src="../../Github-Logo.png" alt="Visit the project on GitHub"/>
                    </a>

                    <h3 className="text-xl">{data.title}</h3>
                    <p>{data.description}</p>
                    <div className="flex flex-wrap gap-2 m-1">
                        {data.skills.map((skill, i) => {
                            return (<ProjectSkill skill={skill.name} icon={skill.icon} key={i}/>);})
                        }
                    </div>
                </div>
            )}
        </div>
    )
};

export default ProjectCardsContainer