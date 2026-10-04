import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            type="button"
            className={styles["back-to-top"]}
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
        >
            ↑
        </button>
    );
}