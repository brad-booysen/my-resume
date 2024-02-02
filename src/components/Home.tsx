import Jumbotron from "./Jumbotron";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

function Home() {
    return (
        <>
            <header className="bg-primary text-white py-5">
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
                </div>
            </main>
        </>
    );
}

export default Home;