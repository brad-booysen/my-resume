import Jumbotron from "../components/Jumbotron";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Button } from "react-bootstrap";

function Home() {

    // TODO enable CORS

    function invokeAWSFunction() {
        const url = 'https://q3xubdzzt8.execute-api.us-east-1.amazonaws.com/items';
        const data = { "id": "800" }

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        fetch(url, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log(response)
                // return response.json(); // Return the JSON parsing Promise
            })
            .then(data => {
                console.log(data); // Log the parsed JSON data
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

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
                <div>
                    <Button variant="primary" onClick={invokeAWSFunction}>Primary</Button>{' '}
                </div>
            </main>
        </>
    );
}

export default Home;