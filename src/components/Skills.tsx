import { ProgressBar } from "react-bootstrap";
import classes from "./Skills.module.css"

function Skills() {

    const htmlValue = 90;
    const cssValue = 90;
    const jsValue = 90;
    const tsValue = 60;
    const reactValue = 90;
    const swiftuiValue = 95;
    const gitValue = 90;
    const awsValue = 70;

    return (
        <>
            <h2 className="mb-5">Skills</h2>
            <div className={classes.skills}>
                <ProgressBar now={swiftuiValue} label={`SwiftUI`} />
                <ProgressBar now={gitValue} label={`Git`} />
                <ProgressBar now={htmlValue} label={`HTML`} />
                <ProgressBar now={cssValue} label={`CSS`} />
                <ProgressBar now={jsValue} label={`Javascript`} />
                <ProgressBar now={reactValue} label={`React`} />
                <ProgressBar now={awsValue} label={`AWS`} />
                <ProgressBar now={tsValue} label={`Typescript`} />
            </div>
        </>
    )
}

export default Skills;