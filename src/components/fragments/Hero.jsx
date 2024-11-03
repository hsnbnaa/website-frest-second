import HeroContent from "../elements/HeroContent";
import "./stroke.css";

export default function Hero() {
  return (
    <section className="bg-bg-alter bg-no-repeat bg-cover border-[7px] border-black border-solid overflow-x-hidden">
      <div className="flex justify-between items-center pt-20 px-72">
        <img src="/images/finally.png" alt="Finally" />
        <img src="/images/hi.png" alt="Hi" />
      </div>
      <HeroContent />
      <div className="flex items-center justify-center pb-[55px]">
        <img src="/images/hero-text.png" />
      </div>
    </section>
  );
}
