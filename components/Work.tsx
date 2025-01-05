import * as motion from "motion/react-client"
import {poppinsExtraBold, poppinsSemiBold} from "@/helpers/exportFonts";
import netflix from "@/assets/images/netflix-Logo.jpeg";
import executiveSummaryImage from "@/assets/images/executive-summary.webp";
import humanResources from "@/assets/images/humanResources.webp";
import rfm from "@/assets/images/rfm.png";
import Image from "next/image";

export default  function Work() {

    return (
        <div className={`max-w-sm lg:max-w-screen-lg`}>
            <h1 className={`text-4xl font-extrabold text-primary_yellow leading-[116px] lg:text-5xl ${poppinsExtraBold.className}`}>projects.</h1>
            <div className={`flex flex-col`}>
                <div>
                    <p className="text-md leading-[34px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id
                        phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
                    </p>
                </div>

                <div className={`flex mt-10`}>
                    <div className="grid grid-cols-1 gap-20 w-full lg:grid-cols-2">
                        <motion.div   whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.95 }} className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={humanResources}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                                <div className={`text-sm italic`}>BigQuery and Microsoft Power BI</div>
                            </div>
                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>Atlas Labs Human Resources Analytics</h2>
                                <p>
                                    In this project, I analyzed the Human resources data of Atlas Labs exploring the
                                    attrition rate and behaviours of the employees to the HR Manager who has asked the
                                    business questions.
                                </p>
                            </div>

                        </motion.div>

                        <motion.div   whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.95 }}  className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={netflix}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                                <div className={`text-sm italic`}>Microsoft Power BI</div>
                            </div>
                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>Netflix Content Analytics</h2>
                                <p>
                                    In this project, I analyzed the Netflix dataset I got on Kaggle and designed the dashboard to look like a Netflix desktop page prototype. The analysis was communicated with the brand colours of Netflix.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div   whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.95 }} className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={executiveSummaryImage}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                                <div className={`text-sm italic`}>BigQuery and Microsoft Power BI</div>
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
                        </motion.div>

                        <motion.div   whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.95 }} className={`flex flex-col gap-3`}>
                            <div className="flex flex-col gap-3">
                                <Image
                                    src={rfm}
                                    alt="Person's Image"
                                    className={`w-full h-80`}
                                />
                                <div className={`text-sm italic`}>BigQuery and Microsoft Power BI</div>
                            </div>
                            <div className={`flex flex-col gap-3`}>
                                <h2 className={`${poppinsSemiBold.className}`}>RFM Segmentation</h2>
                                <p>
                                    The idea of Recency, Frequency and Monetary is used in identifying the buying
                                    behaviors of customers and then segmenting customers based on their RFM scores.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}