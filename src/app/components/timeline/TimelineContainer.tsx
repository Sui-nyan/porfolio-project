import TimelineElement from "@/app/components/timeline/TimelineElement";
import timelineData from "@/app/components/timeline/timelineData";
import styles from "./Timeline.module.css"

const TimelineContainer = () => {
    return (
        timelineData.length > 0 && (
            <div className={styles.timeline}>
                {timelineData.map((data, key) =>
                    <TimelineElement date={data.date} description={data.description} title={data.title} key={key}/>)}
            </div>
        )
    )
}

export default TimelineContainer;