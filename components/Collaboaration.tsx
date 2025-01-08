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
                        <div className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={radiantImage}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                            </div>
                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>Tech Foundation and Employability Bootcamp 2.0 with Radiant Pathways Progressive Initiative</h2>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={techClub}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                            </div>
                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>Tech Girls Club</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}