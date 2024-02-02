import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from "./Portfolio.module.css"

function Portfolio() {

    const soloProjects = [
        {
            id: 1,
            title: "Flexcavo",

            description:
                "It is the website for construction machine renting company (Flexcavo) from Berlin",
            technologies: "React.js | Pixel-perfect | SCSS | Styled Component",
            link: "https://www.flexcavo.de/",
        },
        {
            id: 2,
            title: "Meet Native",

            description:
                "MeetNative is an upselling platform that helps consumers and local businesses get more for their money.",
            technologies: "React | React Native | Android | iOS",
            link: "https://meetnative.com/",
        },
        {
            id: 3,
            title: "Mob Inspire",

            description:
                "Mob Inspire streamlines the business operations in corporate sector by providing cost-effective and highly productive software solutions.",
            technologies: "Nginx | PHP | MySQL | jQuery",
            link: "https://www.mobinspire.com/",
        },
        {
            id: 4,
            title: "Raise",

            description:
                "Get started with free educational courses to mastery the foundations of startup equity as an African business.",
            technologies: "Remix | React.js | Webflow | jQuery",
            link: "https://www.raise.africa/",
        },
        {
            id: 5,
            title: "Potsave",

            description:
                "Through the PotSave.com platform, PotSave offers in-person product assessment and ordering services, accessible via the website, mobile applications, and software.",
            technologies: "React | Next.js | Lodash | Tailwind CSS",
            link: "https://dev-pwa.potsave.com/",
        },
        {
            id: 6,
            title: "Health",

            description:
                "U of U Health is the Mountain West's only academic health care system. We provide patient care, medical research, and physician training.",
            technologies: "Angular | Drupal | Nginx | TypeScript",
            link: "https://healthcare.utah.edu/",
        },
    ];

    return (
        <>
            <div className='container' id={classes.projects}>
                <h1>Recent Work</h1>
                <div className={classes.projectcard}>
                    {soloProjects.map((project) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Portfolio