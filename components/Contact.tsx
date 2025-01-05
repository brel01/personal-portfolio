import {poppinsExtraBold} from "@/helpers/exportFonts";


export default  function Contact() {

    return (
        <div className={``}>
            <h1 className={`text-[60px] font-extrabold text-primary_yellow leading-[116px] ${poppinsExtraBold.className}`}>Contact.</h1>
            <div className={`flex flex-col`}>
                <div>
                    <p className="text-md leading-[34px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id
                        phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
                    </p>
                </div>

                <div className={`flex mt-20`}>

                </div>
            </div>
        </div>
    )
}