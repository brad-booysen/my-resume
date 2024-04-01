import classes from "./Portfolio.module.css"
import { Button } from "react-bootstrap";

function Portfolio() {

    const soloProjects = [
        {
            id: 1,
            title: "Storkk",
            description:
                "Storkk simplifies the planning and tracking of Continuing Professional Development for the legal fraternity",
            technologies: "C# | .NET | Azure",
            link: "http://www.storkk.com",
        },
        {
            id: 2,
            title: "NightWatch",

            description:
                "NightWatch is a native iOS app that let's users easily track their sleep patterns, monitor their progress, and improve thier sleep quality.",
            technologies: "SwiftUI | Swift | CoreData",
            link: "https://apps.apple.com/dm/app/nightwatch-sleep-tracker/id6469570238",
        },
        {
            id: 3,
            title: "RecipeBot",

            description:
                "RecipeBot is a native iOS app that utilises AI to create recipes based on ingredients that the user has at home.",
            technologies: "SwiftUI | Swift | CoreData | OpenAI",
            link: "https://apps.apple.com/dm/app/recipebot-ai-powered-recipes/id6470576790",
        },
        {
            id: 4,
            title: "NetShield",

            description:
                "NetShield is a native iOS app that offers faster, safer, and more private web browsing. Users can block unwanted keywords, websites, and harmful content while enjoying the benefits of a private and secure VPN.",
            technologies: "SwiftUI | Swift | CoreData | Firebase",
            link: "https://apps.apple.com/dm/app/netshield-online-guardian/id6471444637",
        },
        {
            id: 5,
            title: "BodyBliss",

            description:
                "BodyBliss is a native iOS app that provides a range of health and wellness related tools such as fitness and health tracking, mood tracking and meditation.",
            technologies: "SwiftUI | Swift | CoreData | Firebase",
            link: "https://apps.apple.com/dm/app/bodybliss-wellness-companion/id6471552539",
        },
    ];

    return (
        <div className='container mt-5'>
            <div className={classes.intro}>
                <h2 className="mb-3" id={classes.headline}>Recent Projects</h2>
                <p>Just a few of the projects I've worked on recently.</p>
            </div>
            <hr className={classes.divider} />
            {soloProjects.map((project) => {
                return (
                    <>
                        <div className={classes.projects}>
                            <div className={classes.image}>
                                <img src={`/${project.title.toLowerCase()}.jpg`}></img>
                            </div>
                            <div className={classes.details}>
                                <div className='project-title'>
                                    <h2>{project.title}</h2>
                                </div>
                                <div className='project-description'>
                                    <p>{project.description}</p>
                                </div>
                                <div className='project-description'>
                                    <p><strong>Tech stack:</strong> {project.technologies}</p>
                                </div>
                                <div className='button'>
                                    <Button variant="success" href={project.link} target="_blank">Learn More</Button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Portfolio

