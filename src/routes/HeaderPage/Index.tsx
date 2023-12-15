import { Outlet } from "react-router-dom";
import Header from "../../components/HomeComponents/Header/Index";


export default function HeaderPage () {
    return (
        <>
        <header >
            <div className="des-container" >
                <Header />
            </div>
        </header>
        <Outlet />
        </>
    );
}