import SocialLinks from "./SocialLinks"

function Footer() {

    return (
        <>
            <div className="container-fluid text-center">
                <SocialLinks />
            </div>
            <div className="footer-copyright text-center py-3">
                © 2024 Brad Booysen. All rights reserved.
            </div>
        </>
    )
}

export default Footer