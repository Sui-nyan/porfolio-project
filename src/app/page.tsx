import FourCorners from "@/app/components/fourCorners/FourCorners";

export default function Home() {
    return (
        <main className="home-page">
            <div className="introduction">
                <h1>Elisa Zhang</h1>
                <p>Student in Stuttgart, Germany</p>
                <p>Studying Computer Science as a German-Chinese double degree</p>
            </div>

            <FourCorners/>
        </main>
    );
}
