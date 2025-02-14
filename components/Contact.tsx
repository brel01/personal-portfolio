import {poppinsExtraBold} from "@/helpers/exportFonts";
import contactUs from "@/assets/images/contactUs.png";
import Image from "next/image";
import {Github, Linkedin, Mail} from "lucide-react";

export default  function Contact() {

    return (
        <section>
        <div className={`max-w-sm lg:max-w-screen-lg`}>
            <h1 className={`text-4xl font-extrabold text-primary_yellow leading-[116px] lg:text-5xl ${poppinsExtraBold.className}`}>contact.</h1>
            <div className={`flex flex-col gap-6 mt-4 md:flex-row`}>
                <div className={` lg:flex lg:w-1/3`}>
                    <Image
                        src={contactUs}
                        alt="Person's Image"
                        className={`w-full h-80`}
                    />
                </div>
                <div className={` flex flex-col justify-between space-y-6 lg:w-2/3`}>
                    <div className={`leading-[34px]`}>{`Let's connect! Whether you're interested in collaborating on impactful projects, inviting me to speak at your event, or simply exploring shared interests in data analytics and tech education, I'd love to hear from you.

Reach out through the social media platforms below or via email, and I'll get back to you promptly. Together, we can create meaningful change`}
                    </div>
                    <div className={`space-y-4`}>
                        <div className="flex gap-3 items-center">
                            <Mail/>
                            <a href="mailto:diyankanyinsola@gmail.com" className="hover:underline">
                                diyankanyinsola@gmail.com
                            </a>
                        </div>

                        <div className={`flex gap-3 items-center`}>
                            <Linkedin/>
                            <a href={`https://www.linkedin.com/in/kanyinsola-diyan`} target={`_blank`}
                               rel={`noopener noreferrer`} className="hover:underline">
                                Kanyinsola Diyan
                            </a>
                        </div>
                        <div className={`flex gap-3 items-center`}>
                            <Github />
                            <a href={`https://github.com/mamakay2212`} target={`_blank`} rel={`noopener noreferrer`} className="hover:underline">mamakay2212</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}