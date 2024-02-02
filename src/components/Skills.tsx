import { ProgressBar } from "react-bootstrap";
import classes from "./Skills.module.css"

function Skills() {

    const htmlNow = 95;
    const cssNow = 90;
    const jsNow = 95;
    const tsNow = 80;
    const reactNow = 85;
    const swiftuiNow = 90;
    const gitNow = 85;
    const awsNow = 70;

    return (
        <>
            <h2 className="mb-5">Skills</h2>
            <div className={classes.container}>
                <ProgressBar now={htmlNow} label={`HTML`} />
                <ProgressBar now={cssNow} label={`CSS`} />
                <ProgressBar now={jsNow} label={`Javascript`} />
                <ProgressBar now={tsNow} label={`Typescript`} />
                <ProgressBar now={reactNow} label={`React`} />
                <ProgressBar now={swiftuiNow} label={`SwiftUI`} />
                <ProgressBar now={gitNow} label={`Git`} />
                <ProgressBar now={awsNow} label={`AWS`} />
            </div>
        </>
    )
}

export default Skills;