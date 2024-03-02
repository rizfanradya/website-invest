"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  vertical: true,
  verticalSwipping: true,
};
const dataCarousel = [
  { date: "03-02", incomeCommission: 567000, noHp: "0813****2960" },
  { date: "03-02", incomeCommission: 567000, noHp: "0813****2960" },
  { date: "03-02", incomeCommission: 567000, noHp: "0813****2960" },
  { date: "03-02", incomeCommission: 567000, noHp: "0813****2960" },
  { date: "03-02", incomeCommission: 567000, noHp: "0813****2960" },
  { date: "03-02", incomeCommission: 567000, noHp: "0813****2960" },
  { date: "03-02", incomeCommission: 567000, noHp: "0813****2960" },
  { date: "03-02", incomeCommission: 567000, noHp: "0813****2960" },
];

export default function UserIncomeNotifyCarousel() {
  return (
    <Slider {...settings}>
      {dataCarousel.map((doc, index) => (
        <div key={index} className="card shadow-xl bg-base-200 my-2">
          <div className="card-body">
            <div className="flex items-center gap-8 text-xs md:text-base">
              <div>{doc.date}</div>
              <div className="border-l px-4 border-slate-500">
                <div>
                  Komisi pendapatan Rp{" "}
                  {doc.incomeCommission.toLocaleString("id-ID")}
                </div>
                <div>{doc.noHp}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
