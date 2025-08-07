import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const useNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname || "/";

    // handle hamburger menu
    const handleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    return { currentPath, menuOpen, handleMenu };
};

export default useNavbar;
