import "./stroke.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Feedback() {
  return (
    <section className="h-screen bg-feedback bg-no-repeat bg-cover bg-center border-[7px] border-black border-solid flex items-center">
      <img
        src="/images/char-feed.png"
        alt=""
        className="w-auto h-[800px] flex mt-auto"
      />
      <Swiper
        className="mx-auto flex justify-center items-center relative w-full max-w-[700px]"
        modules={[Pagination]}
        pagination
        spaceBetween={30}
      >
        <SwiperSlide className="relative flex justify-center items-center">
          <img
            src="/images/bubble-chat.png"
            alt=""
            className="h-auto w-[700px]"
          />
          <div className="flex flex-col gap-3 items-center uppercase absolute bottom-28">
            <img src="/images/profil.png" alt="" />
            <h3 className="mt-4 text-white text-stroke-little text-5xl">
              Rais Asy Syauqi
            </h3>
            <h4 className="w-2/3 text-center mt-2 text-[#FFF700] text-3xl text-stroke-little">
              Enak banget Enak Banget Enak Banget
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center items-center">
          <img
            src="/images/bubble-chat.png"
            alt=""
            className="h-auto w-[700px]"
          />
          <div className="flex flex-col gap-3 items-center uppercase absolute bottom-28">
            <img src="/images/profil.png" alt="" />
            <h3 className="mt-4 text-white text-stroke-little text-5xl">
              Rais Asy Syauqi
            </h3>
            <h4 className="w-2/3 text-center mt-2 text-[#FFF700] text-3xl text-stroke-little">
              Enak banget Enak Banget Enak Banget
            </h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
