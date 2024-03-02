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
  { src: "carousel/1.jpg", alt: "1" },
  { src: "carousel/2.webp", alt: "2" },
  { src: "carousel/3.jpg", alt: "3" },
  { src: "carousel/4.jpg", alt: "4" },
  { src: "carousel/5.jpg", alt: "5" },
  { src: "carousel/6.jpeg", alt: "6" },
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
