import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout(){
    return (
        <div className="px-4 md:px-8 lg:px-10 lx:px-32 2xl:px-60">
            <Navbar />
            <Outlet />
        </div>
    )
}