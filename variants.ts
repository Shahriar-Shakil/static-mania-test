import { Variants } from "framer-motion";

export const fadeIn = (direction = "up"): Variants => {
    return {
        initial: {
            y: direction === "up" ? 20 : -60,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'linear', delay: 0.25, ease: 'easeInOut'
            },
        },
        exit: { opacity: 0, x: 0, y: 15 },
    };
};
export const staggerContainer = (delayIncrement: number): Variants => {
    return {
        initial: {
            opacity: 0,
            x: -100,
            y: -50
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0


        },
        whileInView: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                delay: delayIncrement * 0.6,
                type: "linear"
            }
        },


    }
};
export const staggerForFooterMenu = (delayIncrement: number): Variants => {
    return {
        initial: {
            opacity: 0,
            x: delayIncrement % 2 === 0 ? -100 : 100,
            y: -50
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0


        },
        whileInView: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                delay: delayIncrement * 0.4,
                duration: .5,
                type: "linear"
            }
        },


    }
};