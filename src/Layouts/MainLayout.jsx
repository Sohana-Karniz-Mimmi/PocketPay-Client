import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
// import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                {/* <Footer></Footer> */}
            </div>
        </div>
    );
};

export default MainLayout;