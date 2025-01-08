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
import PDFEmbed from "@/components/PDFEmbed";



export default  function Work() {

    const [showPdf, setShowPdf] = useState<boolean>(false);
    const [pdfTitle, setPdfTitle] = useState<string>("");
    const [pdfLink, setPdfLink] = useState<string>("");


    const toggleShowPDF = () => {
        setShowPdf(!showPdf);
    }

    const onDisplayPdf = (title: string, pdfLink: string) => {
        setPdfLink(pdfLink);
        toggleShowPDF();
        setPdfTitle(title);
    }

    return (
        <div className={`max-w-sm lg:max-w-screen-lg`}>
            <h1 className={`text-4xl font-extrabold text-primary_yellow leading-[116px] lg:text-5xl ${poppinsExtraBold.className}`}>projects.</h1>
            <div className={`flex flex-col`}>
                <div className={`mt-4`}>
                    <p className="text-md leading-[34px]">
                        Explore a collection of my analytics projects, where data meets innovation. Using tools like
                        SQL, Power BI, Python, and BigQuery, I transform raw data into actionable insights and
                        interactive dashboards. These works showcase my expertise in solving complex problems,
                        optimizing processes, and driving informed decision-making.


                    </p>
                </div>

                <div className="flex mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full cursor-pointer"
                    >
                        {[
                            {
                                src: humanResources,
                                tool: "BigQuery and Microsoft Power BI",
                                title: "Atlas Labs Human Resources Analytics",
                                description:
                                    "In this project, I analyzed the Human Resources data of Atlas Labs, exploring the attrition rate and employee behaviors to answer the HR Manager's business questions.",
                                pdfLink: "Atlas-Labs-HR.pdf"
                            },
                            {
                                src: netflix,
                                tool: "Microsoft Power BI",
                                title: "Netflix Content Analytics",
                                description:
                                    "In this project, I analyzed the Netflix dataset from Kaggle and designed a dashboard to resemble a Netflix desktop page prototype. The analysis was presented using Netflix's brand colors.",
                                pdfLink: "Netflix-Pro.pdf"
                            },
                            {
                                src: executiveSummaryImage,
                                tool: "BigQuery and Microsoft Power BI",
                                title: "AdventureWorks Executive Summary",
                                description:
                                    "For this project, I provided a business summary for the C-level executives of AdventureWorks, showcasing profitability over three fiscal years. Additional pages were created for the HR Head to explore employee demographics and scale human capital.",
                                pdfLink: "ADW-Project.pdf"
                            },
                            {
                                src: rfm,
                                tool: "BigQuery and Microsoft Power BI",
                                title: "RFM Segmentation",
                                description:
                                    "This project utilized Recency, Frequency, and Monetary (RFM) analysis to identify customer buying behaviors and segment customers based on their RFM scores.",
                                pdfLink: "RFM.pdf"
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.95}}
                                className="flex flex-col gap-3"
                                onClick={() => {onDisplayPdf(item?.title, item?.pdfLink)}}
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
                <DialogContent className={`bg-amber-50 w-full lg:max-w-screen-lg overflow-auto`}>
                    <DialogHeader>
                        <DialogTitle>{pdfTitle}</DialogTitle>
                        <DialogDescription>
                            {/*<PDFEmbed pdfUrl="/pdf/RFM.pdf" />*/}
                        </DialogDescription>
                    </DialogHeader>
                    <PDFEmbed pdfUrl={`/pdf/${pdfLink}`} />
                </DialogContent>
            </Dialog>
        </div>
    )
}