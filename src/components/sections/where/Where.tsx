import "./styles.css"

const Where = () => {
    return (
        <div className="where-container" id='Where'>
            <div className="left">
                <h2>Where?</h2>
                <p>The Reception will be held at The Loft. A function room above The Wentworth Arms in Mapplewell, Barnsley</p>
                <p>10 mins drive from J37 M1</p>
                <p>The Loft<br/>Greenside,<br/>Mapplewell,<br/>Barnsley<br/>S75 6AU</p>
            </div>
            <div className="right">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.5688170014648!2d-1.5055261052487128!3d53.58654168628224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487964efe4267355%3A0x1c472d2aa3a2edce!2sThe%20Loft!5e0!3m2!1sen!2suk!4v1718568252132!5m2!1sen!2suk" 
                    width="600" 
                    height="450" 
                    className="map"               
                    loading="lazy" 
                />
            </div>
        </div>
    )
}

export { Where }
