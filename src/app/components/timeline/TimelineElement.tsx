import styles from "./Timeline.module.css"

const TimelineElement = (data: any) => {
    return (
        <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
                <time className="text-sm font-light">{data.date}</time>
                <h3 className="text-xl font-bold">{data.title}</h3>
                <p className="">{data.description}</p>
                <span className={styles.circle}/>
            </div>
        </div>
    );
}

export default TimelineElement;