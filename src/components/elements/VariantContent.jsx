import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper-custom.css";

const items = [
  { img_url: "/images/coklat.png", title: "Chocolate" },
  { img_url: "/images/taro.png", title: "Taro" },
  { img_url: "/images/mangga.png", title: "Mangga" },
  { img_url: "/images/greentea.png", title: "Green Tea" },
  { img_url: "/images/lemontea.png", title: "Lime Tea" },
];

export default function VariantContent() {
  return (
    <Swiper
      className="w-full max-w-[700px]"
      modules={[Navigation]}
      grabCursor={true}
      slidesPerView={1}
      spaceBetween={30}
      navigation
      centeredSlides={true}
    >
      {items.map((item, index) => (
        <SwiperSlide
          className="flex items-center justify-center uppercase relative"
          key={index}
        >
          <div className="w-full flex justify-center items-center">
            <img src={item.img_url} alt="" className="h-[575px] w-auto" />
            <div className="flex flex-col items-center gap-6 absolute bottom-0">
              <h3 className="text-[50px] text-white text-stroke">
                {item.title}
              </h3>
              <img
                src="/images/button-beli.png"
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
