import { CountdownComp } from "../countdown/Countdown";
import { styles } from "./styles"

const { headerContainer, title, subTitle }  = styles; 

const Header = () => {
    return (
        <div style={headerContainer as React.CSSProperties}>
            <h1 style={title}>TILL DEATH DO US PARTY</h1>
            <h2 style={subTitle}>Szilvi and Liam's Wedding</h2>
            <CountdownComp />
        </div>
    )    
}

export { Header };