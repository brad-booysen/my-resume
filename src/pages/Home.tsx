import Jumbotron from "../components/Jumbotron";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Button } from "react-bootstrap";
import { useEffect, useState } from 'react'

function Home() {

    const [ipAddress, setIPAddress] = useState('')
    const [userCount, setUserCount] = useState(0)

    // Get the user's IP address
    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                setIPAddress(data.ip)
            })
            .catch(error => console.log(error))
    }, []);

    // Get visitor count from AWS
    useEffect(() => {
        fetch('https://q3xubdzzt8.execute-api.us-east-1.amazonaws.com/items')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUserCount(data.length)
                console.log(data); // Handle the response data here
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    })

    // Log the visit in AWS
    function logVisit() {
        const url = 'https://q3xubdzzt8.execute-api.us-east-1.amazonaws.com/items';
        const data = { "id": ipAddress }

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
                    <Button variant="primary" onClick={logVisit}>Primary</Button>{' '}
                </div>
                <div><h1>Visitor count: {userCount}</h1></div>
            </main>
        </>
    );
}

export default Home;