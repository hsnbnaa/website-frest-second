export default function HeroContent() {
  return (
    <div className="flex justify-center items-center relative">
      <img src="/images/all-variant.png" alt="All Variant" />
      <div className="absolute w-full">
        {/* Background statis */}
        <div className="flex items-center justify-center bg-[#FFA64D] bg-opacity-75 border-y-4 border-black border-solid py-5">
          {/* Moving Text */}
          <div className="moving-text text-white uppercase text-4xl text-stroke w-full ">
            <h4>Chocolate</h4>
            <img src="/images/batas.png" alt="Separator" />
            <h4>Lime Tea</h4>
            <img src="/images/batas.png" alt="Separator" />
            <h4>Green Tea</h4>
            <img src="/images/batas.png" alt="Separator" />
            <h4>Mango</h4>
            <img src="/images/batas.png" alt="Separator" />
            <h4>Taro</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
