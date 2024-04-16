import { Button } from "react-bootstrap";
import profilePhoto from "/public/profile-photo.jpg";
import { useNavigate } from "react-router-dom";

function Jumbotron() {
    const navigate = useNavigate();

    const routeChange = () => {
        navigate("contact");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-center mb-3">
                    <img className="rounded-circle img-fluid" src={profilePhoto} alt="Brad-Booysen" />
                </div>
                <div className="col-lg-9 col-md-8 col-sm-12 d-flex flex-column justify-content-center">
                    <h4>Product Manager & Software Developer</h4>
                    <p className="border-top pt-3">Results-driven Product Manager and Software Developer with a strong technical background, adept at aligning innovation with market needs. I have a proven track record in guiding cross-functional teams through the entire product lifecycle to deliver high-impact solutions. Committed to driving growth and ensuring exceptional user experiences through a strategic and data-driven approach.</p>
                    <Button variant="success" onClick={routeChange} className="align-self-md-start align-self-center mt-md-0 mt-3">Hire Me</Button>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
