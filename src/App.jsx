import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container !m-auto">
            <Navbar />
            <div className="!lg:mt-[100px] !mt-[70px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
