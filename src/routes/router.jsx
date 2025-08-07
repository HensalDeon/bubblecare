import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Careers from "../pages/Careers";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // layout or wrapper component
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "careers",
                element: <Careers />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
