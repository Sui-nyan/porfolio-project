import ProjectCardsContainer from "@/app/components/ProjectCards/ProjectCardsContainer";
import TimelineContainer from "@/app/components/timeline/TimelineContainer";

export default function Home() {
    return (
        <main className="home-page">
            <div className="introduction flex flex-col items-center">
                <h1 className="text-8xl p-3 font-bold">Elisa Zhang</h1>
                <p className="p-1 text-xl">Student in Stuttgart, Germany</p>
                <p className="p-1 text-xl">(Hopefully) Soon graduating from Stuttgart Media University
                    with a German-Chinese double degree in Computer Science!</p>
            </div>
            <TimelineContainer/>
            <ProjectCardsContainer/>
        </main>
    );
}
