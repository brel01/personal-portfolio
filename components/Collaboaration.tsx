import {poppinsExtraBold, poppinsSemiBold} from "@/helpers/exportFonts";
import radiantImage from "@/assets/images/radiant.png";
import techClub from "@/assets/images/techClub.jpeg";
import Image from "next/image";

export default  function Collaboaration() {

    return (
        <div className={``}>
            <h1 className={`text-[60px] font-extrabold text-primary_yellow leading-[116px] ${poppinsExtraBold.className}`}>collaborations.</h1>
            <div className={`flex flex-col`}>
                <div>
                    {/*<p className="text-md leading-[34px]">*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id*/}
                    {/*    phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.*/}
                    {/*</p>*/}
                </div>

                <div className={`flex`}>
                    <div className="grid grid-cols-2 gap-20 w-full">
                        <div className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={radiantImage}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                            </div>
                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>Foundation and Employability Bootcamp 2.0 with Radiant Pathways Progressive Initiative</h2>
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