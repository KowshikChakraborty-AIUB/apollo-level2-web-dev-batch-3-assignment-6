"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const ScrollToTopComponent = () => {
    const [buttonDetect, setButtonDetect] = useState(false);

    const scrollButtonDetect = () => {
        if (window.scrollY > 300) {
            setButtonDetect(true);
        } else {
            setButtonDetect(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollButtonDetect);
        return () => window.removeEventListener("scroll", scrollButtonDetect);
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            {buttonDetect && (
                <Button
                    onClick={scrollToTop}
                    className="bg-[#6AAF07] text-white font-bold text-3xl px-6 py-6 rounded-full size-6 animate-bounce hover:bg-[#6AAF07]"
                >
                    &#8593;
                </Button>
            )}
        </div>
    );
};

export default ScrollToTopComponent;