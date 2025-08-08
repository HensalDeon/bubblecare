import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <div className="!mt-[70px] lg:!mt-[100px] bg-primary">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default App;
