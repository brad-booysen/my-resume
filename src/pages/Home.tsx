import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useEffect, useState } from 'react'
import VisitorCounter from "../components/VisitorCounter";

function Home() {

    const [userCount, setUserCount] = useState(0)

    // Get the user's IP address
    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                logNewVisit(data.ip) // Log new visit in db
            })
            .catch(error => console.log(error))
    }, []);

    // Log new visit in db via proxy server
    async function logNewVisit(ipAddress: string) {
        try {
            const response = await axios.put("http://localhost:3000/send-data", { "id": ipAddress });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // Fetch visitor count from db via proxy server
    useEffect(() => {
        const options = {
            method: 'GET',
            url: "http://localhost:3000/vistor-count",
        }
        axios.request(options)
            .then(function (response) {
                setUserCount(response.data.length)
            })
            .catch(function (error) {
                console.error(error);
            })
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
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <VisitorCounter hits={userCount} />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;