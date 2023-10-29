export const sidebar = {
    open: (width = 3000) => ({
        clipPath: `circle(${width}px at calc(100% - 40px) 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(30px at calc(100% - 40px) 40px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

export const backdropVariant = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delayChildren: 0.2,
            type: 'spring',
            bounce: 0,
        },
    },
};


export const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 70,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

export const flip = {
    hidden: {
        transform: "scale(0) rotateX(-360deg)",
        opacity: 0,
        transition: {
            delay: 0.3,
        },
    },
    visible: {
        transform: " scale(1) rotateX(0deg)",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        transform: "scale(0) rotateX(360deg)",
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};