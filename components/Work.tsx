"use client"
import * as motion from "motion/react-client"
import {poppinsExtraBold, poppinsSemiBold} from "@/helpers/exportFonts";
import netflix from "@/assets/images/netflix-Logo.png";
import executiveSummaryImage from "@/assets/images/executive-summary.png";
import humanResources from "@/assets/images/humanResources.png";
import rfm from "@/assets/images/rfm.png";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {useState} from "react";


export default  function Work() {

    const [showPdf, setShowPdf] = useState(false);

    const toggleShowPDF = () => {
        setShowPdf(!showPdf);
    }

    return (
        <div className={`max-w-sm lg:max-w-screen-lg`}>
            <h1 className={`text-4xl font-extrabold text-primary_yellow leading-[116px] lg:text-5xl ${poppinsExtraBold.className}`}>projects.</h1>
            <div className={`flex flex-col`}>
                <div>
                    <p className="text-md leading-[34px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id
                        phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum
                        diam.
                    </p>
                </div>

                <div className="flex mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full cursor-pointer">
                        {[
                            {
                                src: humanResources,
                                tool: "BigQuery and Microsoft Power BI",
                                title: "Atlas Labs Human Resources Analytics",
                                description:
                                    "In this project, I analyzed the Human Resources data of Atlas Labs, exploring the attrition rate and employee behaviors to answer the HR Manager's business questions.",
                            },
                            {
                                src: netflix,
                                tool: "Microsoft Power BI",
                                title: "Netflix Content Analytics",
                                description:
                                    "In this project, I analyzed the Netflix dataset from Kaggle and designed a dashboard to resemble a Netflix desktop page prototype. The analysis was presented using Netflix's brand colors.",
                            },
                            {
                                src: executiveSummaryImage,
                                tool: "BigQuery and Microsoft Power BI",
                                title: "AdventureWorks Executive Summary",
                                description:
                                    "For this project, I provided a business summary for the C-level executives of AdventureWorks, showcasing profitability over three fiscal years. Additional pages were created for the HR Head to explore employee demographics and scale human capital.",
                            },
                            {
                                src: rfm,
                                tool: "BigQuery and Microsoft Power BI",
                                title: "RFM Segmentation",
                                description:
                                    "This project utilized Recency, Frequency, and Monetary (RFM) analysis to identify customer buying behaviors and segment customers based on their RFM scores.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.95}}
                                className="flex flex-col gap-3"
                            >
                                <div className="flex flex-col gap-3">
                                    <Image
                                        src={item.src}
                                        alt={`${item.title} image`}
                                        className="w-full h-80"
                                    />
                                    <div className="text-sm italic">{item.tool}</div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h2 className={poppinsSemiBold.className}>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            <Dialog open={showPdf} onOpenChange={toggleShowPDF}>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}