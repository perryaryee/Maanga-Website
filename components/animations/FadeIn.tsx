"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    immediate?: boolean; // For above-the-fold content - animates immediately on load
}

const FadeIn = ({ children, delay = 0, className = "", direction = "up", immediate = false }: FadeInProps) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.4, // Reduced from 0.6s for faster animations
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1] as any,
            },
        },
    };

    // For immediate animations (above-the-fold content) - starts animating on page load
    if (immediate) {
        return (
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                className={className}
            >
                {children}
            </motion.div>
        );
    }

    // For scroll-triggered animations - starts when element enters viewport
    // Animates every time you scroll past it (up or down)
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "0px" }} // once: false = re-animate every time element enters viewport
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
