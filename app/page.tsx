"use client"
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Work from "@/components/Work";
import Collaboaration from "@/components/Collaboaration";
import Engagements from "@/components/Engagements";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
    const { ref: aboutRef, inView: aboutInView } = useInView({
        triggerOnce: false, // Allow re-triggering when the section comes back into view
        threshold: 0.2, // Trigger when 20% of the element is visible
    });

    const { ref: workRef, inView: workInView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const { ref: engagementsRef, inView: engagementsInView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const { ref: collaborationRef, inView: collaborationInView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const { ref: contactRef, inView: contactInView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <div className="space-y-5 px-6 py-6 flex flex-col items-center gap-16 w-full text-sm">
            <div className="w-full flex flex-col items-center lg:max-w-screen-lg space-y-[60px] lg:space-y-[100px]">
                <Navbar />
                <Header />

                <motion.section
                    ref={aboutRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: aboutInView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    id={`about`}
                >
                    <About />
                </motion.section>

                <motion.section
                    ref={workRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: workInView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    id={`projects`}
                >
                    <Work />
                </motion.section>

                <motion.section
                    ref={engagementsRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: engagementsInView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    id={`engagements`}
                >
                    <Engagements />
                </motion.section>

                <motion.section
                    ref={collaborationRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: collaborationInView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    id={`collaborations`}
                >
                    <Collaboaration />
                </motion.section>

                <motion.section
                    ref={contactRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: contactInView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    id={`contact`}
                >
                    <Contact />
                </motion.section>

                <Footer />
            </div>
        </div>
    );
}
