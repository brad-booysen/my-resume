import Jumbotron from "../components/Jumbotron";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
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

    // Log new visitor in AWS
    useEffect(() => {
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
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(data => {
                console.log(data); // Log the parsed JSON data
            })
            .catch(error => console.log(error))
    }, [ipAddress])

    // Fetch visitor count from AWS
    useEffect(() => {
        fetch('https://q3xubdzzt8.execute-api.us-east-1.amazonaws.com/items')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(data => {
                setUserCount(data.length)
            })
            .catch(error => console.log(error))
    }, [])

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
                <div><h1>Visitor count: {userCount}</h1></div>
            </main>
        </>
    );
}

export default Home;