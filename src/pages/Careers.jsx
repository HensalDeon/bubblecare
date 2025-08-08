import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const BuildFuture = lazy(() => import("../components/BuildFuture"));
const LifeAtBubble = lazy(() => import("../components/LifeAtBubble"));
const CurrentOpenings = lazy(() => import("../components/CurrentOpenings"));
const Testimonial = lazy(() => import("../components/Testimonial"));

const Careers = () => {
    return (
        <Suspense fallback={<Loader />}>
            <BuildFuture />
            <LifeAtBubble />
            <CurrentOpenings />
            <Testimonial />
        </Suspense>
    );
};

export default Careers;
