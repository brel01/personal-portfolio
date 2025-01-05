import {poppinsExtraBold} from "@/helpers/exportFonts";
import contactUs from "@/assets/images/contactUs.png";
import Image from "next/image";

export default  function Contact() {

    return (
        <section>
        <div className={`max-w-sm lg:max-w-screen-lg`}>
            <h1 className={`text-4xl font-extrabold text-primary_yellow leading-[116px] lg:text-5xl ${poppinsExtraBold.className}`}>Contact.</h1>
            <div className={`flex flex-col`}>
                <div>
                    <p className="text-md leading-[34px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id
                        phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
                    </p>
                </div>

                <div className={`flex flex-col mt-20 gap-3 md:flex-row`}>
                    <div className={`w-1/3`}>
                        <Image
                            src={contactUs}
                            alt="Person's Image"
                            className={`w-full h-80`}
                        />
                    </div>
                    <div className={`w-2/3`}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam
                            felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque,
                            proin bibendum diam.
                        </div>
                        <div>johndoe@mail.com</div>
                        <div>twitter.com/johndoe</div>
                        <div>behance.com/johndoe</div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}