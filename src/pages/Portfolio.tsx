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
        <div className="container">
            <div className={classes.intro}>
                <h2 className="mt-5" id={classes.headline}>Recent Projects</h2>
                <p>Just a few of the projects I've worked on recently.</p>
            </div>
            <div className="row">
                {soloProjects.map((project) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={project.id}>
                        <div className={classes.project}>
                            <img src={`/${project.title.toLowerCase()}.jpg`} alt={project.title} className="img-fluid" />
                            <div className={classes.content}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <p><strong>Tech stack:</strong> {project.technologies}</p>
                                <Button variant="success" href={project.link}>{"Learn more"}</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio

