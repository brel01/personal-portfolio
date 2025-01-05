import {poppinsExtraBold} from "@/helpers/exportFonts";
import contactUs from "@/assets/images/contactUs.png";
import Image from "next/image";
import {Facebook, Linkedin, Mail, Phone, Twitter} from "lucide-react";

export default  function Contact() {

    return (
        <section>
        <div className={`max-w-sm lg:max-w-screen-lg`}>
            <h1 className={`text-4xl font-extrabold text-primary_yellow leading-[116px] lg:text-5xl ${poppinsExtraBold.className}`}>Contact.</h1>
            <div className={`flex flex-col gap-6 md:flex-row`}>
                <div className={` lg:flex lg:w-1/3`}>
                    <Image
                        src={contactUs}
                        alt="Person's Image"
                        className={`w-full h-80`}
                    />
                </div>
                <div className={` flex flex-col space-y-6 lg:w-2/3`}>
                    <div className={`leading-[34px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam
                        felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque,
                        proin bibendum diam.
                    </div>
                    <div className={`space-y-6`}>
                        <div className="flex gap-3 items-center">
                            <Mail/>
                            <a href="mailto:johndoe@mail.com" className="hover:underline text-blue-600">
                                johndoe@mail.com
                            </a>
                        </div>

                        <div className={`flex gap-3 items-center`}>
                            <Linkedin/>
                            <div>johndoe@mail.com</div>
                        </div>
                        <div className={`flex gap-3 items-center`}>
                            <Twitter/>
                            <div>johndoe@mail.com</div>
                        </div>
                        <div className={`flex gap-3 items-center`}>
                            <Phone/>
                            <div>johndoe@mail.com</div>
                        </div>
                        <div className={`flex gap-3 items-center`}>
                            <Facebook/>
                            <div>johndoe@mail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}