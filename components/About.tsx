import {poppinsExtraBold, poppinsSemiBold} from "@/helpers/exportFonts";

export default  function About() {

    return (
        <div className="">
            <h1 className={`text-[60px] font-extrabold text-primary_yellow leading-[116px] ${poppinsExtraBold.className}`}>about.</h1>
            <div>
                <p className="text-md leading-[34px]">
                    {`Kanyinsola Diyan is a data analyst committed to driving informed decision-making and strategic initiatives through data-driven insights.
                    With a strong foundation in analytics, she aspires to become a thought leader in the technology industry, pushing the boundaries of her field and making a global impact.
                    Passionate about empowering others, Kanyinsola actively mentors individuals seeking to establish careers in tech. Her vision extends beyond personal success;
                    she aims to shape industry cultures and inspire others, positioning herself as a rising force in the global technology landscape.
                    Kanyinsola's professional journey is driven by purpose, combining technical expertise with a commitment to fostering growth and innovation in the tech sector.`}
                </p>
            </div>

            <div className={`flex justify-end`}>
                <div className={`py-10 w-4/5 self-end`}>
                    <div className="flex flex-col my-8 gap-5">
                        <div className={`flex items-center gap-3`}>
                            <div className="w-[10px] h-[10px] bg-dark_blue rounded-full"></div>
                            <div className={`${poppinsSemiBold.className}`}>2018-2020</div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id
                            phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum
                            diam.
                        </div>
                    </div>
                    <div className="flex flex-col my-8 gap-5">
                        <div className={`flex items-center gap-3`}>
                            <div className="w-[10px] h-[10px] bg-dark_blue rounded-full"></div>
                            <div className={`${poppinsSemiBold.className}`}>2018-2020</div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id
                            phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum
                            diam.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}