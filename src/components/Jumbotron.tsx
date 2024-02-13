import { Button } from "react-bootstrap";
import profilePhoto from "/public/profile-photo.jpg";
import { useNavigate } from "react-router-dom";

function Jumbotron() {

    const navigate = useNavigate();

    const routeChange = () => {
        const path = `contact`;
        navigate(path);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 text-left text-md-center mb-3">
                    <img className="rounded-circle img-fluid" src={profilePhoto} alt="Brad-Booysen" />
                </div>
                <div className="col-md-9">
                    <h4>Product Manager & Software Engineer</h4>
                    <p className="border-top pt-3">Results-driven Product Manager and Software Engineer with a strong technical background, adept at aligning innovation with market needs. I have a proven track record in guiding cross-functional teams through the entire product lifecycle to deliver high-impact solutions. Committed to driving growth and ensuring exceptional user experiences through a strategic and data-driven approach.</p>
                    <Button variant="success" onClick={routeChange}>Hire Me</Button>{' '}
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;