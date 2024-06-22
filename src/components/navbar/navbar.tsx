import { NavLink } from "./navLink/navlink"; 
import { styles } from "./styles"

const Navbar = () => {
    return (
        <div style={styles.navbar}>
            <NavLink title="General"/>
            <NavLink title="Where"/>
            <NavLink title="When"/>
            <NavLink title="FAQ"/>
        </div>
    )    
}

export { Navbar };