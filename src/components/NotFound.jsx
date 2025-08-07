import React from "react";

const NotFound = () => {
    return (
        <section className={`bg-black h-screen w-full flex flex-col justify-center items-center`}>
            <h1 className={`neonText mx-auto text-center`}>404</h1>
            <h2 className={`sub-head-text text-primary mx-auto text-center`}>Page Not Found</h2>
        </section>
    );
};

export default NotFound;
