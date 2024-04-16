function Projects() {
    return (
        <>
            <h2 className="mb-5">Recent Work</h2>
            <div className="row">
                <div className="col-md mb-3">
                    <a href="http://www.storkk.com">
                        <img className="img-fluid img-thumbnail" src={`/storkk.jpg`}/>
                    </a>
                </div>
                <div className="col-md mb-3">
                    <a href="https://apps.apple.com/dm/app/nightwatch-sleep-tracker/id6469570238">
                        <img className="img-fluid img-thumbnail" src={`/nightwatch.jpg`} />
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-md mb-3">
                    <a href="https://apps.apple.com/dm/app/bodybliss-wellness-companion/id6471552539">
                        <img className="img-fluid img-thumbnail" src={`/bodybliss.jpg`} />
                    </a>
                </div>
                <div className="col-md mb-3">
                    <a href="https://apps.apple.com/dm/app/netshield-online-guardian/id6471444637">
                        <img className="img-fluid img-thumbnail" src={`/netshield.jpg`} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects