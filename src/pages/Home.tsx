import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useEffect, useState } from 'react'
import VisitorCounter from "../components/VisitorCounter";
import Footer from "../components/Footer";

function Home() {

    // const url = 'https://q3xubdzzt8.execute-api.us-east-1.amazonaws.com/items'
    // const apiKey = import.meta.env.VITE_API_KEY

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

    // Log new visitor
    useEffect(() => {
        const options = {
            method: 'PUT',
            url: "http://localhost:3000/send-data",
            data: { "id": ipAddress },
        }

        axios.request(options)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.error(error);
            })
    }, [ipAddress])

    // Fetch visitor count from AWS via Proxy server
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
                <div className="row">
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default Home;