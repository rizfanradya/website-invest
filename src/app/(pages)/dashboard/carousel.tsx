"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
};
const dataCarousel = [
  { src: "carousel/1.png", alt: "1" },
  { src: "carousel/2.png", alt: "2" },
  { src: "carousel/3.png", alt: "3" },
  { src: "carousel/4.png", alt: "4" },
  { src: "carousel/5.png", alt: "5" },
  { src: "carousel/6.png", alt: "6" },
  { src: "carousel/7.png", alt: "7" },
  { src: "carousel/8.jpg", alt: "8" },
];

export default function DashboardCarousel() {
  return (
    <div className="pt-16 lg:w-4/5 m-auto">
      <Slider {...settings}>
        {dataCarousel.map((doc, index) => (
          <Image
            className="h-44 md:h-64 object-cover rounded-xl mb-4"
            key={index}
            src={`/${doc.src}`}
            alt={doc.alt}
            width={1000}
            height={1000}
          />
        ))}
      </Slider>
    </div>
  );
}
