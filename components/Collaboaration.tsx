import * as motion from "motion/react-client"
import {poppinsExtraBold, poppinsSemiBold} from "@/helpers/exportFonts";
import radiantImage from "@/assets/images/radiant.png";
import techClub from "@/assets/images/techClub.jpeg";
import Image from "next/image";

export default  function Collaboaration() {

    return (
        <div className={`max-w-sm lg:max-w-screen-lg`}>
            <h1 className={`text-4xl font-extrabold text-primary_yellow leading-[116px] lg:text-5xl ${poppinsExtraBold.className}`}>collaborations.</h1>
            <div className={`flex flex-col`}>
                <div className={`mt-3`}>
                    <p className="text-md leading-[34px]">
                        I have partnered with organizations to facilitate impactful workshops and training sessions,
                        empowering participants with in-demand data analytics skills. Through hands-on learning and
                        practical insights, these collaborations aim to bridge the gap between knowledge and real-world
                        application, fostering growth and success in the tech space.
                    </p>
                </div>

                <div className={`flex mt-10`}>
                    <div className="grid grid-cols-1 gap-20 w-full lg:grid-cols-2">
                        <motion.div whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}} className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={radiantImage}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                                <div className="text-sm italic">{`July 6, 2024`}</div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h2 className={`${poppinsSemiBold.className}`}>Tech Foundation and Employability</h2>
                                <p className={`leading-5`}>{`I partnered with Radiant Pathways Progressive Initiative for the Tech Foundation and Employability Bootcamp 2.0, where I served as a facilitator for the data analytics track. During the program, I provided hands-on training to 20 participants from various professional backgrounds, teaching them how to leverage data for informed decision-making in their careers. Additionally, I guided individuals transitioning into data analytics, offering practical insights and foundational skills to help them successfully navigate their career shift. This collaboration reinforced my commitment to empowering professionals with the tools needed to thrive in the tech-driven world.`}</p>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.95}} className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={techClub}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                                <div className="text-sm italic">{`July 6, 2024`}</div>
                            </div>

                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>{"Tech Girls' Club"}</h2>
                                <p className={`leading-5`}>{`I collaborated with Tech Girls' Club to empower senior secondary school students with foundational data analytics skills. Through interactive sessions, I taught them how to collect and organize data using Microsoft Excel, analyze it effectively, and create dashboards to present insights. These dashboards were designed to support decision-making by stakeholders, fostering a practical understanding of data analytics and its real-world applications. This partnership highlights my dedication to nurturing the next generation of tech-savvy leaders.`}</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}