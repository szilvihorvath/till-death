import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import SzilviAndLiamLogo from "/assets/szilviandliam.svg";
import "./styles.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={SzilviAndLiamLogo} alt="Szilvi and Liam Logo" />
            <HashLink className="link" smooth to="#where">WHERE</HashLink>
            <HashLink className="link" smooth to="#when">WHEN</HashLink>
            <HashLink className="link" smooth to="#faq">FAQ</HashLink>
            <Link className="link" to={"/rsvp"}>RSVP</Link>
        </div>
        
    )    
}

export { Navbar };
