"use client"
import { useEffect, useState } from "react";

const HowItWorks = () => {
    const [showSteps, setShowSteps] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("how-it-works");
            if (section) {
                const top = section.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) {
                    setShowSteps(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="how-it-works" className="py-16 px-6 mb-32">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#6AAF07]">How It Works</h2>
                <p className="mt-4 text-lg font-medium">
                    Getting started is easy! Follow these steps to become part of our gardening community.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { title: "Create an Account", desc: "Sign up in seconds and start your gardening journey." },
                        { title: "Post & Share", desc: "Share your gardening experiences, tips, and guides." },
                        { title: "Engage with Community", desc: "Like, comment, and interact with fellow gardeners." },
                        { title: "Grow & Learn", desc: "Discover expert gardening tips and grow your knowledge." }
                    ].map((step, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform transition-all duration-500 ease-out 
                ${showSteps ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"} hover:scale-105`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="w-16 h-16 flex items-center justify-center bg-[#d4f1aa] text-[#6AAF07] rounded-full text-2xl font-bold">
                                {index + 1}
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-[#6AAF07]">{step.title}</h3>
                            <p className="mt-2 text-[#6AAF07] text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;