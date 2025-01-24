import HeroBg from "@images/hero-bg.png";
import ArrowRight from "@icons/ep_right.svg";

const Hero = () => {
  return (
    <div className="relative flex size-full justify-center ~min-h-[14.0625rem]/[49.8125rem]">
      <img src={HeroBg} className="absolute -z-[1] size-full" alt="" />
      <div className="flex size-full max-w-container flex-col items-center justify-center ~px-[1.5rem]/[17.8rem]">
        <div className="flex size-full flex-col items-center justify-center text-white ~gap-[0.5625rem]/[1.5rem] ~pt-[4.875rem]/[11.875rem]">
          <span className="font-bold ~text-[0.75rem]/[1.5rem] ~leading-4/[1.75rem]">
            2025/03/18-19 | 서울, 한국
          </span>
          <div className="font-Azonix flex flex-col items-center">
            <h1 className="~text-[3rem]/[7.5rem] ~leading-[3.4375rem]/[8.75rem]">
              Vietnam IT
            </h1>
            <h2 className="~text-[1.45rem]/[3.625rem] ~leading-[1.75rem]/[4.375rem]">
              Developer House
            </h2>
          </div>
          <div className="flex w-full items-center justify-center ~gap-[1.125rem]/[3rem]">
            <div className="h-[1px] w-full flex-1 bg-gradient-to-r from-[#FFFFFF00] to-[#FFFFFF]"></div>
            <span className="w-fit shrink-0 ~text-[0.75rem]/[2.25rem] ~leading-[1rem]/[3.375rem]">
              80 일 07 시간
            </span>
            <div className="h-[1px] w-full flex-1 bg-gradient-to-l from-[#FFFFFF00] to-[#FFFFFF]"></div>
          </div>
        </div>
        <button className="mt-[2.8rem] hidden w-full max-w-[22.25rem] items-center justify-between gap-4 rounded-[30px] bg-white p-3 xl:flex">
          <div className="size-8"></div>
          <span className="text-linear-gradient text-xl font-bold leading-7">
            사전 등록
          </span>
          <div className="flex items-center justify-center rounded-full bg-[#006FFF1A] p-1">
            <img src={ArrowRight} alt="" className="size-full" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
