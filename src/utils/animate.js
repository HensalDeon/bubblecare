export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            duration: 0.6
        }
    }
}

export const textVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        x: -30
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

export const imageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        x: 30
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

export const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
}

export const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each word
            delayChildren: 0.2
        }
    }
}
export const wordVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.2
        }
    }
}

export const letterVariants = {
    hidden: {
        opacity: 0,
        y: 10,
        rotateX: 90
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
}