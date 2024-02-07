import Jumbotron from "./Jumbotron";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";

function Home() {
    return (
        <>
            <header className="bg-light text-muted py-5">
                <Jumbotron />
            </header>
            <main className="container">
                <div className="row">
                    <div className="col-md mb-5">
                        <WorkExperience />
                    </div>
                    <div className="col-md mb-5">
                        <Education />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md mb-5">
                        <Skills />
                    </div>
                    <div className="col-md mb-5">
                        <Projects />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;