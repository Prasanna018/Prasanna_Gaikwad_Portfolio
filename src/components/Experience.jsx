import React, { useRef, useEffect } from 'react';
import { Code2, GitBranch, Terminal, Database, Globe, Cpu } from 'lucide-react';
import { inView, motion } from 'framer-motion'

const experiences = [
    {
        title: 'Frontend Development',
        description: 'Building responsive and interactive user interfaces for US based client',
        icon: Code2,
        color: 'bg-blue-500'
    }


];

function Experience() {
    const scrollRef = useRef(null);
    const containerRef = useRef(null);
    const animationRef = useRef();
    const isPausedRef = useRef(false);

    useEffect(() => {
        const scroll = scrollRef.current;
        const container = containerRef.current;
        if (!scroll || !container) return;

        // Clone the content for seamless scrolling
        container.appendChild(scroll.cloneNode(true));

        let scrollPos = 0;
        const speed = 1; // Pixels per frame

        const animate = () => {
            if (!isPausedRef.current) {
                scrollPos += speed;
                if (scrollPos >= scroll.offsetWidth) {
                    scrollPos = 0;
                }
                if (container) {
                    container.style.transform = `translateX(-${scrollPos}px)`;
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const handleMouseEnter = () => {
        isPausedRef.current = true;
    };

    const handleMouseLeave = () => {
        isPausedRef.current = false;
    };

    return (
        <section id="experience" className="pt-[100px] min-h-screen flex items-center sm:justify-around  px-4 lg:flex-row flex-col md:flex-col sm:flex-col text-center">
            <div className="w-full  py-16 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        className="text-4xl font-bold text-textPrimary text-center mb-16"
                    >
                        Experience
                    </motion.h2>
                </div>
                <div
                    className="overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        ref={containerRef}
                        className="flex whitespace-nowrap"
                        style={{ willChange: 'transform' }}
                    >
                        <div ref={scrollRef} className="flex  gap-6 px-4">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-72 p-6  rounded-xl shadow-lg transform transition-transform hover:scale-105"
                                >
                                    <div className={`${exp.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                                        <exp.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {exp.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Experience