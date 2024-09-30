import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import "./styles.css"

const Container = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    )    
}

export { Container };