import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const Hero = lazy(() => import("../components/Hero"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Industries = lazy(() => import("../components/Industries"));
const Careers = lazy(() => import("../components/Careers"));

const Home = () => {
    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Hero />
                <AboutUs />
                <Industries />
                <Careers />
            </Suspense>
        </>
    );
};

export default Home;
