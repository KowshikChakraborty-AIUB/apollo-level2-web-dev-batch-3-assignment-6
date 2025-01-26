"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const CarouselComponent = () => {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const imagesAndQoutes = [
        {
            image: "https://i.ibb.co.com/ZddFtXK/gardening-tips-carousel-3.jpg",
            qoute: "The earth laughs in flowers",
            qoutedBy: "–Ralph Waldo Emerson",
        },
        {
            image: "https://i.ibb.co.com/NF5tKhK/gardening-tips-carousel-1.jpg",
            qoute: "Where flowers bloom, so does hope",
            qoutedBy: "– Lady Bird Johnson",
        },
        {
            image: "https://i.ibb.co.com/s5gD9ZN/gardening-tips-carousel-2.jpg",
            qoute: "To plant a garden is to believe in tomorrow",
            qoutedBy:
                "–Audrey Hepburn",
        },
    ];

    return (
        <div>
            <Carousel
                plugins={[plugin.current]}
                className=""
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {imagesAndQoutes.map((carouselImg, index) => (
                        <CarouselItem key={index}>
                            <div className="relative md:px-12 w-full p-4 rounded-md min-h-[450px] flex items-center justify-center"
                                style={{
                                    backgroundImage: `url('${carouselImg.image}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="absolute inset-0 bg-black opacity-60"></div>
                                <div className="relative text-center text-white">
                                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                                        {carouselImg.qoute}
                                    </h1>
                                    <p className="mb-5 text-xl italic">{carouselImg.qoutedBy}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-16" />
                <CarouselNext className="mr-16" />
            </Carousel>
        </div>
    );
}

export default CarouselComponent;
