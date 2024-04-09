import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons"
import classes from "./SocialLinks.module.css"

function SocialLinks() {
    return (
        <IconContext.Provider value={{ color: "black", size: '2em' }}>
            <div className={classes.socials}>
                <a href="https://github.com/brad-booysen" target="_blank" rel="noreferrer noopener">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/bradbooysb01/" target="_blank" rel="noreferrer noopener">
                    <FaLinkedin />
                </a>
            </div>
        </IconContext.Provider>
    )
}

export default SocialLinks