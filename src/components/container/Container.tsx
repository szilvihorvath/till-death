import { Outlet } from "react-router-dom";
import "./styles.css"
import { Navbar } from "../navbar/Navbar";
import { Header } from "../header/Header";

const Container = () => {
    return (
        <div className="container">
            <Navbar />
            <Header />
            <Outlet />
        </div>
    )    
}

export { Container };