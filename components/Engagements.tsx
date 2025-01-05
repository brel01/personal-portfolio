import {poppinsExtraBold, poppinsSemiBold} from "@/helpers/exportFonts";
import netflix from "@/assets/images/netflix-Logo.jpeg";
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
                <div>
                    <p className="text-md leading-[34px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id
                        phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
                    </p>
                </div>

                <div className={`flex mt-20`}>
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className={`bg-transparent`}>
                                            <CardContent className="flex aspect-square items-center justify-center p-6 bg-transparent">
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
                                                        <h2 className={`${poppinsSemiBold.className}`}>Netflix Content
                                                            Analytics</h2>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                                                            sed aliquam sollicitudin
                                                            rhoncus morbi. Tincidunt quam sem elit a convallis. Eget
                                                            ipsum, velit vitae eu nunc,
                                                            consequat, at.
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
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