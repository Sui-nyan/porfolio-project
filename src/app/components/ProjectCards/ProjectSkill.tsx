import styles from "./ProjectCards.module.css"

type ProjectSkillProps = {
    skill : string;
    icon : string;
}

const ProjectSkill  = (props : ProjectSkillProps) => {
    return (
        <div className={styles.skillItemContainer}>
            <img src={props.icon} alt={props.skill}/>
            <span>{props.skill}</span>
        </div>
    )
}

export default ProjectSkill