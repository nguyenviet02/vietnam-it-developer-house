import Background from "@images/aboutus-bg.png";
import ArrowRight from "@icons/ep_right.svg";
import QR from "@images/QR.svg";

const PreRegistration = () => {
  return (
    <div className="relative w-full max-w-container ~px-4/[6.875rem] ~py-[2.25rem]/[5rem] flex justify-center mx-auto">
      <div className="relative size-full flex justify-center h-fit overflow-hidden">
        <img
          src={Background}
          className="absolute left-0 top-0 -z-[1] size-full rounded-xl object-cover"
          alt=""
        />
        <div className="relative flex size-full max-w-container flex-col items-center justify-center ~py-[1rem]/[5.75rem]">
          <div className="flex size-full flex-col items-center justify-center text-white ~gap-[0.5625rem]/[1.5rem]">
            <span className="font-bold ~text-[0.75rem]/[1.5rem] ~leading-4/[1.75rem]">
              2025/03/18-19 | 서울, 한국
            </span>
            <div className="flex flex-col items-center font-Azonix">
              <h1 className="~text-[2rem]/[7.5rem] ~leading-[3rem]/[8.75rem]">
                Vietnam IT
              </h1>
              <h2 className="~text-[1rem]/[3.625rem] ~leading-[1.25rem]/[4.375rem]">
                Developer House
              </h2>
            </div>
          </div>
          <button className="~mt-[2rem]/[2.8rem] flex w-full items-center justify-between ~gap-2/4 rounded-[30px] bg-white ~p-1/3 ~max-w-[7.7rem]/[22.25rem]">
            <div className="~size-1/8"></div>
            <span className="text-linear-gradient font-bold ~text-[0.75rem]/[1.5rem] ~leading-[0.825rem]/[1.75rem]">
              사전 등록
            </span>
            <div className="flex items-center justify-center rounded-full bg-[#006FFF1A] p-1">
              <img src={ArrowRight} alt="" className="size-full" />
            </div>
          </button>
          <div className="absolute flex flex-col items-center ~right-[0.75rem]/[3.25rem] ~bottom-[0.75rem]/[3.25rem] ~gap-[0.25rem]/[0.75rem]">
            <div className="relative rounded-xl bg-white px-3">
              {/* arrow */}
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 rotate-45 bg-white ~size-1/2"></div>

              <span className="text-linear-gradient font-bold ~text-[0.75rem]/[1.25rem] ~leading-[1.125rem]/[2.25rem]">
                사전등록
              </span>
            </div>
            <div className="rounded-xl bg-white ~size-[3.25rem]/[6.25rem] ~p-[0.25rem]/[0.75rem]">
              <img src={QR} className="size-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreRegistration;
