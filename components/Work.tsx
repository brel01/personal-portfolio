import {poppinsExtraBold, poppinsSemiBold} from "@/helpers/exportFonts";
import netflix from "@/assets/images/netflix-Logo.jpeg";
import executiveSummaryImage from "@/assets/images/executive-summary.webp";
import humanResources from "@/assets/images/humanResources.webp";
import rfm from "@/assets/images/rfm.png";
import Image from "next/image";

export default  function Work() {

    return (
        <div className={``}>
            <h1 className={`text-[60px] font-extrabold text-primary_yellow leading-[116px] ${poppinsExtraBold.className}`}>projects.</h1>
            <div className={`flex flex-col`}>
                <div>
                    <p className="text-md leading-[34px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id
                        phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
                    </p>
                </div>

                <div className={`flex mt-20`}>
                    <div className="grid grid-cols-2 gap-20 w-full">
                        <div className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={netflix}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                                <div className={`text-sm italic`}>November 24, 2019</div>
                            </div>
                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>Netflix Content Analytics</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin
                                    rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc,
                                    consequat, at.
                                </p>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={executiveSummaryImage}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                                <div className={`text-sm italic`}>November 24, 2019</div>
                            </div>
                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>AdventureWorks Executive Summary</h2>
                                <p>
                                    In this project, I came up with the business summary for the C-level executives of
                                    AdventureWorks on how the business profitability over three fiscal years. The second
                                    and third pages were designed for the Human Resources Head to explore the demography
                                    of the employees and scale the business through human capital.
                                </p>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={humanResources}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                                <div className={`text-sm italic`}>November 24, 2019</div>
                            </div>
                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>Atlas Labs Human Resources Analytics</h2>
                                <p>
                                    In this project, I analyzed the Human resources data of Atlas Labs exploring the
                                    attrition rate and behaviours of the employees to the HR Manager who has asked the
                                    business questions.
                                </p>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={rfm}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                                <div className={`text-sm italic`}>November 24, 2019</div>
                            </div>
                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>RFM Segmentation</h2>
                                <p>
                                    The idea of Recency, Frequency and Monetary is used in identifying the buying behaviors of customers and then segmenting customers based on their RFM scores.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}