import projectData from "./projectData";
import styles from "./ProjectCards.module.css"
import ProjectSkill from "@/app/components/ProjectCards/ProjectSkill";

const ProjectCardsContainer = () => {
    return (
        <div className={styles.cardContainer}>
            {projectData.map((data, key) =>
                <div className={styles.card} key={key}>
                    <a className="relative flex justify-end" href={data.link} target="_blank">
                        <img className="h-4 w-4" src="../../Github-Logo.png" alt="Visit the project on GitHub"/>
                    </a>

                    <h3 className="text-xl pb-1 font-semibold">{data.title}</h3>
                    <p className="pb-4">{data.description}</p>
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