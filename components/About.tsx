import {poppinsExtraBold, poppinsSemiBold} from "@/helpers/exportFonts";

export default  function About() {

    return (
        <div className="w-full max-w-sm lg:max-w-screen-lg">
            <h1 className={`text-4xl font-extrabold text-primary_yellow leading-[116px] lg:text-5xl ${poppinsExtraBold.className}`}>about.</h1>
            <div className={`mt-3`}>
                <p className="text-md leading-[34px]">
                    {`I am a results-driven data analyst with hands-on experience in leveraging data to deliver actionable insights and drive impactful business decisions. With a strong foundation in analytics and a passion for education and mentorship, I bring a unique blend of technical expertise and visionary leadership to every project.`}
                </p>
            </div>

            <div className={`flex justify-end`}>
                <div className={`py-10 w-4/5 self-end`}>
                    <div className="flex flex-col my-8 gap-5">
                        <div className={`flex items-center gap-3`}>
                            <div className="w-[10px] h-[10px] bg-dark_blue rounded-full"></div>
                            <div className={`${poppinsSemiBold.className}`}> In my data analytics career, I have</div>
                        </div>
                        <div>
                            Analyzed and visualized datasets to support key business objectives.<br/>
                            Built dashboards and analytics models to streamline decision-making processes.<br/>
                            Led projects in funnel analysis, customer cohort tracking, and A/B testing to enhance performance metrics.
                        </div>
                    </div>
                    <div className="flex flex-col my-8 gap-5">
                        <div className={`flex items-center gap-3`}>
                            <div className="w-[10px] h-[10px] bg-dark_blue rounded-full"></div>
                            <div className={`${poppinsSemiBold.className}`}>Career Guidance & Personal Branding</div>
                        </div>
                        <div>
                            I help students and early-career professionals gain clarity in their career paths, inspired by my own journey from a new graduate to a thriving data analyst.<br/>
                            I share insights on analytics trends, tools, and strategies to educate and inspire the next wave of data enthusiasts.
                        </div>
                    </div>
                    <div className="flex flex-col my-8 gap-5">
                        <div className={`flex items-center gap-3`}>
                            <div className="w-[10px] h-[10px] bg-dark_blue rounded-full"></div>
                            <div className={`${poppinsSemiBold.className}`}>My vision</div>
                        </div>
                        <div>
                            My vision is to bridge the gap between data, education, and empowerment. If you’re an analytics enthusiast, educator, or aspiring professional looking to connect, let’s collaborate to create lasting impact!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}