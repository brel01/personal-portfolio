import * as motion from "motion/react-client"
import {poppinsExtraBold, poppinsSemiBold} from "@/helpers/exportFonts";
import odumareTech from "@/assets/images/odumareTech.jpeg";
import tentacoos from "@/assets/images/tentacoos.png";
import girlsDay from "@/assets/images/girlsDay.jpeg";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export default  function Engagements() {

    return (
        <div className={`max-w-sm lg:max-w-screen-lg`}>
            <h1 className={`text-4xl font-extrabold text-primary_yellow leading-[116px] lg:text-5xl ${poppinsExtraBold.className}`}>engagements.</h1>
            <div className={`flex flex-col`}>
                <div className={`mt-4`}>
                    <p className="text-md leading-[34px]">
                        Discover my journey as a speaker in the tech community, where I share insights on data analytics, career growth, and empowering the next generation of tech professionals. From workshops to panel discussions, these engagements highlight my passion for knowledge sharing and community building.
                    </p>
                </div>


                <div className="flex mt-6 ">
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-1 gap-6 py-8">
                            {[
                                {
                                    src: odumareTech,
                                    title: "With OdumareTech",
                                    date: "November 24, 2019",
                                    description:
                                        "At OdumareTech, I shared proven strategies with the EdTech community on landing a first role in tech, empowering aspiring professionals to kickstart their careers."
                                },
                                {
                                    src: tentacoos,
                                    title: "With Tentacoos",
                                    date: "November 24, 2019",
                                    description:
                                        "At Tentacoos, an EdTech startup empowering teenagers with tech skills, I shared my journey into data analytics and emphasized the importance of starting in tech early."
                                },
                                {
                                    src: girlsDay,
                                    title: "International Day of the Girl Child with Tech Girls’ Club and IGNOSSA",
                                    date: "November 24, 2019",
                                    description:
                                        "At the International Day of the Girl Child celebration in Ibadan, Nigeria, I inspired high school students by highlighting diverse career paths in the digital world. I encouraged the girls to lead Africa’s tech revolution and embrace opportunities to become trailblazers in technology."
                                }
                            ].map((item, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-2/5">
                                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} className="p-1">
                                        <Card className="bg-transparent min-h-[600px]">
                                            <CardContent
                                                className="flex aspect-square items-center justify-center p-6 bg-transparent">
                                                <div className="flex flex-col gap-3">
                                                    <div className="flex flex-col gap-3">
                                                        <Image src={item.src} alt={item.title} className="w-full h-80"/>
                                                        <div className="text-sm italic">{item.date}</div>
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <h2 className={`${poppinsSemiBold.className}`}>{item.title}</h2>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>

            </div>
        </div>
    )
}