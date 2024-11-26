import { CountdownComp } from "../../countdown/Countdown"
import "./styles.css"

const Intro = () => {
    return (
        <div className="intro">
            <CountdownComp />

            <p>We're making it official and we're super excited to celebrate our love and the next chapter of our journey together with you, our dearest friends and family. You're invited to our wedding reception, or our TILL DEATH DO US PARTY, if you will!</p>

            <p>You’ll find everything you need to know right here - should you have any questions though, just reach out to us! For our friends and family who come from further afield, we’ve included some information about accommodations, some things to do in the area, and travelling to the reception.</p>
        </div>
    )
}

export { Intro }
