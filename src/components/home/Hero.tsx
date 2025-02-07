import HeroBg from "@images/home-hero-bg.png";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div className="relative flex size-full flex-col items-center justify-center ~min-h-[14.0625rem]/[49.8125rem]">
      <img src={HeroBg} className="absolute -z-[1] size-full" alt="" />
      <div className="flex size-full max-w-container flex-col items-center justify-center ~px-[1.5rem]/[17.8rem]">
        <div className="flex size-full flex-col items-center justify-center text-white ~gap-[0.5625rem]/[1.5rem] ~pt-[4.875rem]/[11.875rem]">
          <span className="font-bold ~text-[0.75rem]/[1.5rem] ~leading-4/[1.75rem]">
            2025/03/18~20 | 서울, 한국
          </span>
          <div className="flex flex-col items-center font-Azonix">
            <h1 className="~text-[3rem]/[7.5rem] ~leading-[3.4375rem]/[8.75rem]">
              Vietnam IT
            </h1>
            <h2 className="~text-[1.45rem]/[3.625rem] ~leading-[1.75rem]/[4.375rem]">
              Developer House
            </h2>
          </div>
          <div className="flex w-full items-center justify-center ~gap-[1.125rem]/[3rem]">
            <div className="h-[1px] w-full flex-1 bg-gradient-to-r from-[#FFFFFF00] to-[#FFFFFF]"></div>
            <Countdown />
            <div className="h-[1px] w-full flex-1 bg-gradient-to-l from-[#FFFFFF00] to-[#FFFFFF]"></div>
          </div>
        </div>
      </div>
      <div className="mt-auto flex w-full items-center justify-center bg-[#FFFFFF33] p-4 backdrop-blur">
        <span className="~text-[0.75rem]/[1.5rem] ~leading-[1rem]/[1.75rem]">
          주최사: 아이스티 소프트웨어 코리아 및 아이스티 소프트웨어
        </span>
      </div>
    </div>
  );
};

export default Hero;
