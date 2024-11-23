import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import SzilviAndLiamLogo from "/assets/szilviandliamribbon.png";
import "./styles.css";


const Navbar = () => {
    const location = useLocation();
    const { pathname } = location;
    const isRsvpPage = pathname === "/rsvp" || pathname === "/thanks";

    return (
        <div className={`${isRsvpPage ? "navbar-rsvp" : "navbar"}`}>
            <Link to={"/"}><img className="logo" src={SzilviAndLiamLogo} alt="Szilvi and Liam Logo" /></Link>
            {isRsvpPage && (<Link className="link link__home" to={"/"}>HOME</Link>)}
            {!isRsvpPage && (
                <>
                    <HashLink className="link" smooth to="#where">WHERE</HashLink>
                    <HashLink className="link" smooth to="#when">WHEN</HashLink>
                    <HashLink className="link" smooth to="#faq">FAQ</HashLink>
                    <Link className="link" to={"/rsvp"}>RSVP</Link>
                </>
            )}
        </div>
        
    )    
}

export { Navbar };
